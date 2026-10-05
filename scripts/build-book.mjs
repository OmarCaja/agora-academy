#!/usr/bin/env node
/**
 * Builds a PDF book from theory topics (src/content/topics/*.json).
 *
 *   node scripts/build-book.mjs --topics matrices,determinantes --title "Matrices y determinantes" \
 *     [--subtitle "2º Bachillerato"] --out public/libros/matrices-determinantes.pdf [--html]
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
import { fail, escapeHtml as esc, findChrome } from './pdf.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const BOOKS = path.join(root, 'scripts/books.json');
const PAGEDJS = '/node_modules/pagedjs/dist/paged.polyfill.js';
const CHROME = findChrome();
// Topic HTML references images site-relative (/ejemplos/...); the server below serves the
// project root, so point them at /public/.
const content = s => renderMath(s).replace(/src="\//g, 'src="/public/');

const { values: args } = parseArgs({ options: {
  topics: { type: 'string' }, title: { type: 'string' }, subtitle: { type: 'string' },
  out: { type: 'string' }, html: { type: 'boolean' }, all: { type: 'boolean' } } });
const books = JSON.parse(fs.readFileSync(BOOKS, 'utf8'));

if (args.all) {
  for (const book of books) await buildBook(book, args.html);
} else {
  if (!args.topics || !args.title || !args.out) {
    console.log('Usage: build-book.mjs --topics a,b --title "..." [--subtitle "..."] --out file.pdf [--html] | --all');
    process.exit(1);
  }
  const book = { topics: args.topics.split(',').map(s => s.trim()), title: args.title,
    ...(args.subtitle && { subtitle: args.subtitle }), out: path.relative(root, path.resolve(args.out)) };
  await buildBook(book, args.html);
  const i = books.findIndex(b => b.out === book.out);
  if (i === -1) books.push(book); else books[i] = book;
  fs.writeFileSync(BOOKS, JSON.stringify(books, null, 2) + '\n');
}

async function buildBook(book, keepHtml) {
  const chapters = book.topics.map(slug => {
    const file = path.join(root, 'src/content/topics', slug.trim() + '.json');
    if (!fs.existsSync(file)) fail('Topic not found: ' + file);
    return { slug: slug.trim(), ...JSON.parse(fs.readFileSync(file, 'utf8')) };
  });
  const id = (ch, j) => j === undefined ? ch.slug : `${ch.slug}-${j}`;

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
    ${sec.items.map(it => `
    <div class="item">
      <h3>${content(it.title)}</h3>
      ${it.formula ? `<div class="formula">${content(it.formula)}</div>` : ''}
      ${it.example ? `<p class="label">Ejemplo:</p><div class="example">${content(it.example)}</div>` : ''}
      ${it.description ? `<div class="description">${content(it.description)}</div>` : ''}
    </div>`).join('')}`).join('')}
  </section>`).join('');

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

    body { font: 10pt/1.55 "Space Mono", monospace; color: #1f1f1f; }
    a { color: inherit; text-decoration: none; }

    .cover { page: cover; height: 277mm; margin: 10mm; box-sizing: border-box; padding: 30mm 25mm; display: flex; flex-direction: column;
      border: 3mm solid #1f1f1f; break-after: page; }
    .cover .brand { display: flex; align-items: center; gap: 5mm; font: 700 12pt "Space Mono", monospace;
      letter-spacing: .2em; text-transform: uppercase; }
    .cover .brand img { width: 14mm; margin: 0; }
    .cover .rule { height: 3mm; background: #1f1f1f; width: 40mm; margin-top: auto; }
    .cover h1 { font-size: 34pt; line-height: 1.1; margin: 8mm 0 6mm; text-transform: uppercase; }
    .cover .subtitle { font-size: 14pt; margin: 0; }
    .cover footer { margin-top: 30mm; padding-top: 4mm; border-top: 1px solid #1f1f1f; text-align: right; font-size: 10pt; }

    .toc { page: toc; break-after: page; }
    .toc h1 { font-size: 22pt; text-transform: uppercase; margin: 0 0 10mm; }
    .toc ol { list-style: none; padding: 0; margin: 0; }
    .toc-chapter { font-weight: 700; font-size: 11pt; margin-bottom: 6mm; }
    .toc-chapter ol { font-weight: 400; font-size: 9.5pt; margin: 2mm 0 0 6mm; }
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
    .label { margin: 0; font-size: 8.5pt; font-weight: 700; color: #666; text-transform: uppercase; }
    .description { color: #333; }
    .description p { margin: 0 0 2mm; }
    img { max-width: 100%; height: auto; display: block; margin: 2mm auto; }
    .katex { font-size: 1.08em; }
  </style>
  <script>window.PagedConfig = { auto: false }; new Image().src = '/wait';</script>
  <script src="${PAGEDJS}"></script>
  <script>document.addEventListener('DOMContentLoaded', () =>
    document.fonts.ready.then(() => PagedPolyfill.preview()).finally(() => fetch('/done')));</script>
  </head><body>
  <section class="cover">
    <div class="brand"><img src="/public/favicon/logo.png" alt="">${esc(SITE_NAME)}</div>
    <div class="rule"></div>
    <h1>${esc(book.title)}</h1>
    ${book.subtitle ? `<p class="subtitle">${esc(book.subtitle)}</p>` : ''}
    <footer>${ADDRESS.city} · ${year}</footer>
  </section>
  <nav class="toc"><h1>Índice</h1><ol>${toc}</ol></nav>
  ${body}
  </body></html>`;

  const out = path.resolve(root, book.out);
  if (keepHtml) fs.writeFileSync(out.replace(/\.pdf$/, '') + '.html', html);

  // Paged.js fetch()es stylesheets, which file:// pages can't do, so serve the book (and the
  // project root for CSS, fonts and images) over HTTP while Chrome prints it.
  // Chrome's --print-to-pdf prints on the load event, so a detached /wait image keeps the
  // page loading until Paged.js reports /done (or 60 s pass). The polyfill's own auto-start
  // waits for load, so the page starts it at DOMContentLoaded instead.
  const waiting = [];
  const release = () => waiting.splice(0).forEach(r => { r.statusCode = 204; r.end(); });
  const timeout = setTimeout(release, 60000);
  const types = { '.css': 'text/css', '.woff2': 'font/woff2', '.woff': 'font/woff', '.ttf': 'font/ttf', '.png': 'image/png', '.svg': 'image/svg+xml' };
  const server = http.createServer((req, res) => {
    const url = decodeURIComponent(new URL(req.url, 'http://x').pathname);
    if (url === '/book.html') return res.end(html);
    if (url === '/wait') return waiting.push(res);
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
  console.log(path.relative(process.cwd(), out));
}
