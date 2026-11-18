#!/usr/bin/env node
/**
 * Builds a PDF book from theory topics (src/content/topics/*.json).
 *
 *   node scripts/build-book.mjs --topics matrices,determinantes --title "Matrices y determinantes"
 *     --out public/libros/matrices-determinantes.pdf [--html]
 *   node scripts/build-book.mjs --all        (pnpm books: rebuild every book in scripts/books.json)
 *
 * Topics -> one HTML (formulas via the site's renderMath) -> Paged.js lays out
 * the pages (cover, TOC with page numbers, running header/footer) -> PDF via
 * headless Chrome. Chapters follow the order given in --topics. A single build
 * is recorded in scripts/books.json (keyed by --out) so --all can redo it after
 * the topics change. Override the browser with CHROME=/path/to/chrome.
 */
import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { execFile } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';
import { renderMath } from '../src/utils/math.ts';
import { SITE_NAME, SITE_URL, ADDRESS } from '../src/data/site.ts';
import { KIND_LABELS } from '../src/data/itemKinds.ts';
import { PDFDocument, PDFName, PDFHexString } from 'pdf-lib';
import { fail, escapeHtml as esc, findChrome } from './pdf.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const BOOKS = path.join(root, 'scripts/books.json');
const PAGEDJS = '/node_modules/pagedjs/dist/paged.polyfill.js';
const CHROME = findChrome();
// Topic HTML references images site-relative (/ejemplos/...); the server below serves the
// project root, so point them at /public/.
// Paged.js drops whitespace-only text nodes, so a plain space between a tag and a
// formula (`</strong> $x$`) vanishes; a non-breaking space survives.
const content = s => renderMath(s.replace(/(<\/\w+>) (?=\$)|(\$) (?=<\w)/g, '$1$2 ')).replace(/src=(["'])\//g, 'src=$1/public/');

const { values: args } = parseArgs({ options: {
  topics: { type: 'string' }, title: { type: 'string' },
  out: { type: 'string' }, html: { type: 'boolean' }, all: { type: 'boolean' } } });
const books = JSON.parse(fs.readFileSync(BOOKS, 'utf8'));
// `at` maps every chapter, section and card id to its (1-based) PDF page: keep it on one line per book.
const writeBooks = () => fs.writeFileSync(BOOKS, '[\n' + books.map(({ at, ...rest }) =>
  JSON.stringify(rest, null, 2).replace(/\n}$/, `,\n  "at": ${JSON.stringify(at ?? {})}\n}`).replace(/^/gm, '  ')).join(',\n') + '\n]\n');

if (args.all) {
  for (const book of books) Object.assign(book, await buildBook(book, args.html));
  writeBooks();
} else {
  if (!args.topics || !args.title || !args.out) {
    console.log('Usage: build-book.mjs --topics a,b --title "..." --out file.pdf [--html] | --all');
    process.exit(1);
  }
  const book = { topics: args.topics.split(',').map(s => s.trim()), title: args.title,
    out: path.relative(root, path.resolve(args.out)) };
  Object.assign(book, await buildBook(book, args.html));
  const i = books.findIndex(b => b.out === book.out);
  if (i === -1) books.push(book); else books[i] = book;
  writeBooks();
}

async function buildBook(book, keepHtml) {
  const chapters = book.topics.map(slug => {
    const file = path.join(root, 'src/content/topics', slug.trim() + '.json');
    if (!fs.existsSync(file)) fail('Topic not found: ' + file);
    return { slug: slug.trim(), ...JSON.parse(fs.readFileSync(file, 'utf8')) };
  });
  const id = (ch, j, k) => j === undefined ? ch.slug : k === undefined ? `${ch.slug}-${j}` : `${ch.slug}-${j}-${k}`;

  const toc = chapters.map((ch, i) => `
    <li class="toc-chapter"><a href="#${id(ch)}"><span>${i + 1}. ${esc(ch.title)}</span></a>
      <ol>${ch.sections.map((sec, j) => `<li><a href="#${id(ch, j)}"><span>${content(sec.title)}</span></a></li>`).join('')}</ol>
    </li>`).join('');

  const body = chapters.map((ch, i) => `
  <section class="chapter">
    <header class="chapter-head" id="${id(ch)}">
      <p class="chapter-num">Tema ${i + 1}</p>
      <h1>${esc(ch.title)}</h1>
      ${ch.description ? `<p class="chapter-desc">${content(ch.description)}</p>` : ''}
    </header>
    ${ch.sections.map((sec, j) => `
    <h2 id="${id(ch, j)}">${content(sec.title)}</h2>
    ${sec.items.map((it, k) => `
    <div class="item" id="${id(ch, j, k)}">
      ${it.kind ? `<p class="kind kind-${it.kind}">${KIND_LABELS[it.kind]}</p>` : ''}
      <h3>${content(it.title)}</h3>
      ${it.description ? `<div class="description">${content(it.description)}</div>` : ''}
      ${it.formula ? `<div class="formula">${content(it.formula)}</div>` : ''}
      ${it.example ? `<p class="label">Ejemplo:</p><div class="example">${content(it.example)}</div>` : ''}
    </div>`).join('')}`).join('')}
  </section>`).join('');

  // «Resumen»: each topic's hand-written key points and formulas (`summary` in its JSON).
  const summarised = chapters.filter(ch => ch.summary?.length);
  const summary = summarised.length ? `
  <section class="summary"><h1 id="resumen">Resumen</h1>
    ${summarised.map(ch => `<h2>${chapters.indexOf(ch) + 1}. ${esc(ch.title)}</h2>
    ${ch.summary.map(p => `<div class="point"><h3>${content(p.title)}</h3>
      ${p.text ? `<div class="description">${content(p.text)}</div>` : ''}
      ${p.formula ? `<div class="formula">${content(p.formula)}</div>` : ''}</div>`).join('')}`).join('')}
  </section>` : '';

  // Alphabetical index of the book's definitions and theorems, each with its page.
  const plain = t => t.replace(/\$([^$]*)\$/g, ' $1 ').replace(/<[^>]+>/g, ' ').replace(/[^\p{L}\p{N} ]+/gu, ' ').replace(/\s+/g, ' ').trim();
  const concepts = chapters.flatMap(ch => ch.sections.flatMap((sec, j) => sec.items.flatMap((it, k) =>
    it.kind === 'definicion' || it.kind === 'teorema'
      ? [{ id: id(ch, j, k), title: it.title, kind: it.kind, key: plain(it.title).replace(/^qu[eé] es (el |la |los |las |un |una )?/i, '') }] : [])));
  const letterOf = c => { const l = c.key.charAt(0).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase(); return /[A-Z]/.test(l) ? l : '#'; };
  const byLetter = new Map();
  for (const c of concepts.sort((a, b) => (a.key || '~').localeCompare(b.key || '~', 'es')))
    (byLetter.get(letterOf(c)) ?? byLetter.set(letterOf(c), []).get(letterOf(c))).push(c);
  const conceptIndex = concepts.length ? `
  <nav class="concept-index"><h1 id="indice-conceptos">Índice de conceptos</h1>
    ${[...byLetter].map(([letter, list]) => `<h2 class="letter">${letter}</h2><ol>${list.map(c =>
      `<li><a href="#${c.id}"><span><span class="t">${content(c.title)}</span><em>${KIND_LABELS[c.kind]}</em></span></a></li>`).join('')}</ol>`).join('')}
  </nav>` : '';

  const year = new Date().getFullYear();
  const html = `<!doctype html>
  <html lang="es"><head><meta charset="utf-8"><title>${esc(book.title)}</title>
  <link rel="stylesheet" href="/node_modules/katex/dist/katex.min.css">
  <link rel="stylesheet" href="/node_modules/@fontsource/space-mono/400.css">
  <link rel="stylesheet" href="/node_modules/@fontsource/space-mono/700.css">
  <style>
    @page { size: A4; margin: 22mm 20mm 20mm;
      @top-left { content: "${SITE_NAME}"; font: 700 8pt "Space Mono", monospace; border-bottom: 1px solid #1f1f1f; }
      @top-right { content: string(chapter); font: 8pt "Space Mono", monospace; border-bottom: 1px solid #1f1f1f; }
      @bottom-left { content: "${SITE_URL.replace(/^https?:\/\//, '')}"; font: 8pt "Space Mono", monospace; color: #666; }
      @bottom-right { content: counter(page); font: 700 9pt "Space Mono", monospace; } }
    @page cover { margin: 0; @top-left { content: none; } @top-right { content: none; }
      @bottom-left { content: none; } @bottom-right { content: none; } }
    @page toc { @top-right { content: "Índice"; } }
    @page index { @top-right { content: "Índice de conceptos"; } }
    @page summary { @top-right { content: "Resumen"; } }

    body { font: 10pt/1.55 "Space Mono", monospace; color: #1f1f1f; }
    a { color: inherit; text-decoration: none; }

    .cover { page: cover; height: 277mm; margin: 10mm; box-sizing: border-box; padding: 30mm 25mm; display: flex; flex-direction: column;
      border: 3mm solid #1f1f1f; break-after: page; }
    .cover .brand { display: flex; align-items: center; gap: 5mm; font: 700 12pt "Space Mono", monospace;
      letter-spacing: .2em; text-transform: uppercase; }
    .cover .brand img { width: 14mm; margin: 0; }
    .cover .rule { height: 3mm; background: #1f1f1f; width: 40mm; margin-top: auto; }
    .cover h1 { font-size: 34pt; line-height: 1.1; margin: 8mm 0 6mm; text-transform: uppercase; }
    .cover footer { margin-top: 30mm; padding-top: 4mm; border-top: 1px solid #1f1f1f; text-align: right; font-size: 10pt; }

    .toc { page: toc; break-after: page; }
    .toc h1 { font-size: 22pt; text-transform: uppercase; margin: 0 0 10mm; }
    .toc ol { list-style: none; padding: 0; margin: 0; }
    .toc-chapter { font-weight: 700; font-size: 11pt; margin-bottom: 6mm; }
    .toc-chapter ol { font-weight: 400; font-size: 9.5pt; margin: 2mm 0 0 6mm; }
    .summary { page: summary; break-before: page; font-size: 9pt; }
    .summary h1 { font-size: 22pt; text-transform: uppercase; margin: 0 0 6mm; }
    .summary h2 { margin-top: 7mm; }
    .summary .point { border-bottom: 1px solid #1f1f1f; padding: 0 0 2.5mm; margin: 0 0 3mm; break-inside: avoid; }
    .summary h3 { font-size: 10pt; margin: 0 0 1mm; }
    .summary .formula { margin: 1.5mm 0 0; padding: 2mm 3mm; }
    .concept-index { page: index; break-before: page; }
    .concept-index h1 { font-size: 22pt; text-transform: uppercase; margin: 0 0 8mm; string-set: chapter "Índice de conceptos"; }
    .concept-index .letter { font-size: 12pt; margin: 5mm 0 1.5mm; padding: .5mm 0 .5mm 4mm; border-bottom: 2px solid #1f1f1f; break-after: avoid; }
    .concept-index ol { list-style: none; padding: 0; margin: 0; font-size: 9pt; }
    .concept-index a { display: flex; align-items: baseline; }
    .concept-index a > span { flex: 1; display: flex; gap: 2mm; align-items: baseline; }
    .concept-index .t { display: block; }
    .concept-index a > span::after { content: ""; flex: 1; border-bottom: 1px dotted #1f1f1f; margin: 0 1mm; order: 2; }
    .concept-index em { font-style: normal; font-size: 7pt; color: #666; text-transform: uppercase; order: 1; white-space: nowrap; }
    .concept-index a::after { content: target-counter(attr(href), page); }
    .toc a { display: flex; align-items: baseline; }
    .toc a span { flex: 1; display: flex; }
    .toc a span::after { content: ""; flex: 1; border-bottom: 1px dotted #1f1f1f; margin: 0 2mm; }
    .toc a::after { content: target-counter(attr(href), page); }

    .chapter { break-before: page; }
    .chapter-head { border-bottom: 3px solid #1f1f1f; padding-bottom: 6mm; margin-bottom: 8mm; }
    .chapter-head h1 { string-set: chapter content(text); font-size: 28pt; text-transform: uppercase; margin: 0 0 4mm; }
    .chapter-num { font-weight: 700; letter-spacing: .2em; text-transform: uppercase; margin: 10mm 0 2mm; color: #666; }
    .chapter-desc { margin: 0; color: #444; }
    h2 { font-size: 14pt; margin: 9mm 0 4mm; padding-left: 3mm; border-left: 3mm solid #1f1f1f; break-after: avoid; }
    .item { border: 1.5px solid #1f1f1f; box-shadow: 2mm 2mm 0 #1f1f1f; padding: 4mm 5mm; margin: 0 2mm 6mm 0; break-inside: avoid; }
    .item h3 { font-size: 11pt; margin: 0 0 3mm; padding-bottom: 1mm; border-bottom: 2px solid #1f1f1f; display: inline-block; }
    .formula, .example { background: #f5f5f5; border: 1px solid #1f1f1f; padding: 3mm 4mm; margin: 2mm 0 3mm; overflow: hidden; }
    .formula .katex-display, .example .katex-display { margin: .3em 0; }
    .kind { display: table; margin: 0 0 2mm; padding: .3mm 2.5mm; border: 1px solid #1f1f1f; font-size: 7.5pt; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; }
    .kind-definicion { background: #1f1f1f; color: #fff; }
    .item:has(.kind-definicion), .item:has(.kind-teorema) { border-left-width: 3mm; }
    .label { margin: 0; font-size: 8.5pt; font-weight: 700; color: #666; text-transform: uppercase; }
    .description { color: #333; }
    .description p { margin: 0 0 2mm; }
    img { max-width: 100%; height: auto; display: block; margin: 2mm auto; }
    .katex { font-size: 1.08em; }
  </style>
  <script>window.PagedConfig = { auto: false }; new Image().src = '/wait';</script>
  <script src="${PAGEDJS}"></script>
  <script>document.addEventListener('DOMContentLoaded', () =>
    document.fonts.ready.then(() => PagedPolyfill.preview()).then(() => {
      // Page (0-based, as in the PDF) where every chapter and section heading ended up: the PDF outline.
      const pages = [...document.querySelectorAll('.pagedjs_page')], at = {};
      document.querySelectorAll('.chapter-head[id], h2[id], .item[id], #resumen, #indice-conceptos').forEach(el => {
        const page = el.closest('.pagedjs_page'); if (page) at[el.id] = pages.indexOf(page);
      });
      return fetch('/outline', { method: 'POST', body: JSON.stringify(at) });
    }).finally(() => fetch('/done')));</script>
  </head><body>
  <section class="cover">
    <div class="brand"><img src="/public/favicon/logo.png" alt="">${esc(SITE_NAME)}</div>
    <div class="rule"></div>
    <h1>${esc(book.title)}</h1>
    <footer>${ADDRESS.city} · ${year}</footer>
  </section>
  <nav class="toc"><h1>Índice</h1><ol>${toc}${[summary && ['resumen', 'Resumen'], conceptIndex && ['indice-conceptos', 'Índice de conceptos']]
    .filter(Boolean).map(([href, t]) => `<li class="toc-chapter"><a href="#${href}"><span>${t}</span></a></li>`).join('')}</ol></nav>
  ${body}
  ${summary}
  ${conceptIndex}
  </body></html>`;

  const out = path.resolve(root, book.out);
  if (keepHtml) fs.writeFileSync(out.replace(/\.pdf$/, '') + '.html', html);

  // Paged.js fetch()es stylesheets, which file:// pages can't do, so serve the book (and the
  // project root for CSS, fonts and images) over HTTP while Chrome prints it.
  // Chrome's --print-to-pdf prints on the load event, so a detached /wait image keeps the
  // page loading until Paged.js reports /done (or 60 s pass). The polyfill's own auto-start
  // waits for load, so the page starts it at DOMContentLoaded instead.
  let headingPages = {};
  const waiting = [];
  const release = () => waiting.splice(0).forEach(r => { r.statusCode = 204; r.end(); });
  const timeout = setTimeout(release, 60000);
  const types = { '.css': 'text/css', '.woff2': 'font/woff2', '.woff': 'font/woff', '.ttf': 'font/ttf', '.png': 'image/png', '.svg': 'image/svg+xml' };
  const server = http.createServer((req, res) => {
    const url = decodeURIComponent(new URL(req.url, 'http://x').pathname);
    if (url === '/book.html') return res.end(html);
    if (url === '/wait') return waiting.push(res);
    if (url === '/outline') {
      let body = ''; req.on('data', c => body += c);
      req.on('end', () => { try { headingPages = JSON.parse(body); } catch { console.error('Warning: could not read heading pages; the PDF will have no bookmarks.'); } res.end(); });
      return;
    }
    if (url === '/done') { clearTimeout(timeout); res.end(); return release(); }
    const file = path.join(root, path.normalize(url));
    if (!file.startsWith(root) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) { res.statusCode = 404; return res.end(); }
    res.setHeader('Content-Type', types[path.extname(file)] || 'application/octet-stream');
    fs.createReadStream(file).pipe(res);
  }).listen(0, '127.0.0.1');
  await new Promise(r => server.once('listening', r));
  await new Promise((resolve, reject) => execFile(CHROME, [
    '--headless', '--disable-gpu', '--no-pdf-header-footer',
    `--print-to-pdf=${out}`, `http://127.0.0.1:${server.address().port}/book.html`,
  ], err => err ? reject(err) : resolve()));
  clearTimeout(timeout);
  server.close();
  if (!fs.existsSync(out)) fail('Chrome did not produce the PDF.');
  // renderMath doesn't throw on bad LaTeX; it emits .katex-error spans that render as red text.
  const katexErrors = (html.match(/class="katex-error"/g) || []).length;
  if (katexErrors) console.error(`Warning: ${katexErrors} formula(s) failed to render (search katex-error with --html).`);
  if (!Object.keys(headingPages).length) console.error(`Warning: no heading pages reported for ${book.title}; the PDF has no bookmarks and /libros no deep links.`);
  const pages = await setPdfMetadata(out, book, chapters, headingPages, id);
  console.log(path.relative(process.cwd(), out));
  return { pages, at: Object.fromEntries(Object.entries(headingPages).map(([k, v]) => [k, v + 1])) };
}

// PDF bookmarks (the outline panel of any reader): a chapter per topic, a child per section.
// Entries whose heading page is unknown are skipped.
function addOutline(pdf, nodes) {
  const ctx = pdf.context, pages = pdf.getPages();
  const build = (list, parent) => {
    const items = list.filter(n => Number.isInteger(n.page) && pages[n.page]);
    const refs = items.map(() => ctx.nextRef());
    items.forEach((n, k) => {
      const kids = build(n.children || [], refs[k]);
      const dict = { Title: PDFHexString.fromText(n.title), Parent: parent,
        Dest: [pages[n.page].ref, PDFName.of('XYZ'), null, null, null] };
      if (k > 0) dict.Prev = refs[k - 1];
      if (k < items.length - 1) dict.Next = refs[k + 1];
      if (kids.first) { dict.First = kids.first; dict.Last = kids.last; dict.Count = kids.count; }
      ctx.assign(refs[k], ctx.obj(dict));
    });
    return { first: refs[0], last: refs[refs.length - 1], count: items.length };
  };
  const root = ctx.nextRef();
  const top = build(nodes, root);
  if (!top.first) return;
  ctx.assign(root, ctx.obj({ Type: 'Outlines', First: top.first, Last: top.last, Count: top.count }));
  pdf.catalog.set(PDFName.of('Outlines'), root);
  pdf.catalog.set(PDFName.of('PageMode'), PDFName.of('UseOutlines'));
}

// Chrome only writes the page title into the PDF. Add what readers and search engines show in
// the file's properties: author, subject (what the book covers) and keywords (chapter and
// section titles). Returns the page count, which the /libros page lists.
async function setPdfMetadata(file, book, chapters, headingPages, id) {
  const pdf = await PDFDocument.load(fs.readFileSync(file));
  const sections = chapters.flatMap(ch => ch.sections.map(sec => sec.title));
  pdf.setTitle(book.title);
  pdf.setAuthor(SITE_NAME);
  pdf.setSubject(`${chapters.map(ch => ch.title).join(', ')}. ${chapters.map(ch => ch.description).join(' ')}`.slice(0, 1000));
  pdf.setKeywords([...chapters.map(ch => ch.title), ...sections]);
  pdf.setCreator(SITE_NAME);
  pdf.setProducer(SITE_URL.replace(/^https?:\/\//, ''));
  pdf.setLanguage('es');
  const now = new Date();
  pdf.setCreationDate(now);
  pdf.setModificationDate(now);
  if (Object.keys(headingPages).length) addOutline(pdf, [...chapters.map((ch, i) => ({
    title: `${i + 1}. ${ch.title}`, page: headingPages[id(ch)],
    children: ch.sections.map((sec, j) => ({ title: sec.title.replace(/\$/g, ''), page: headingPages[id(ch, j)] })),
  })), { title: 'Resumen', page: headingPages.resumen }, { title: 'Índice de conceptos', page: headingPages['indice-conceptos'] }]);
  fs.writeFileSync(file, await pdf.save());
  return pdf.getPageCount();
}
