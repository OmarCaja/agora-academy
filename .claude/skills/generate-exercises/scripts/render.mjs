#!/usr/bin/env node
/**
 * Renders an Ágora exam/exercise sheet from Markdown to PDF, locally.
 *
 *   node render.mjs --file exam.md --out public/ejercicios/2-bach/matrices [--base matrices] [--html]
 *   node render.mjs --file exercises-src/2-bach/matrices/matrices-3.md      (re-render in place)
 *
 * Markdown -> HTML (formulas via KaTeX, already a site dependency) -> PDF via
 * headless Chrome. A new sheet is named <base>-<next number> after the PDFs
 * already in --out, and its Markdown is kept as exercises-src/<level>/<topic>/<name>.md
 * so it can be edited and re-rendered later. Passing such a source file as --file
 * overwrites its PDF instead. --html also keeps the intermediate HTML next to
 * the PDF for debugging. Override the browser with CHROME=/path/to/chrome.
 */
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';
import katex from 'katex';
import { fail, escapeHtml, findChrome } from '../../../../scripts/pdf.mjs';
import { SITE_NAME, SITE_URL, ADDRESS } from '../../../../src/data/site.ts';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../../..');
const PUBLIC_DIR = path.join(root, 'public/ejercicios');
const SOURCE_DIR = path.join(root, 'exercises-src');

function parseArgs(argv) {
  const args = {};
  for (let i = 0; i < argv.length; i++) {
    if (!argv[i].startsWith('--')) fail('Unexpected argument: ' + argv[i]);
    const name = argv[i].slice(2), next = argv[i + 1];
    if (next === undefined || next.startsWith('--')) args[name] = true;
    else { args[name] = next; i++; }
  }
  return args;
}

const failedEquations = [];
function tex(src, displayMode) {
  try {
    return katex.renderToString(src, { displayMode, throwOnError: true });
  } catch (e) {
    failedEquations.push(src);
    return `<code class="tex-error">${escapeHtml(src)}</code>`;
  }
}

// Inline: $...$ (\$ is a literal dollar) and **bold**.
function inline(text) {
  const parts = text.split(/(?<!\\)\$(.+?)(?<!\\)\$/);
  return parts.map((p, i) => i % 2
    ? tex(p, false)
    : escapeHtml(p.replace(/\\\$/g, '$')).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
  ).join('');
}

// Only the subset of Markdown the skill allows: #/##/### headings, "- " and
// "1. " lists, $$...$$ display lines, "---" page breaks and paragraphs.
function toHtml(md) {
  const out = [];
  let list = null;
  const closeList = () => { if (list) { out.push(`</${list}>`); list = null; } };
  for (const raw of md.split(/\r?\n/)) {
    const line = raw.trim();
    let m;
    if (!line) { closeList(); continue; }
    if (line === '---') { closeList(); out.push('<div class="page-break"></div>'); continue; }
    if ((m = line.match(/^\$\$(.+)\$\$$/))) { closeList(); out.push(`<div class="display">${tex(m[1], true)}</div>`); continue; }
    if ((m = line.match(/^(#{1,3}) (.*)$/))) { closeList(); out.push(`<h${m[1].length}>${inline(m[2])}</h${m[1].length}>`); continue; }
    const item = line.match(/^- (.*)$/) ? ['ul', line.slice(2)] : (m = line.match(/^\d+\. (.*)$/)) ? ['ol', m[1]] : null;
    if (item) {
      if (list !== item[0]) { closeList(); list = item[0]; out.push(`<${list}>`); }
      out.push(`<li>${inline(item[1])}</li>`);
      continue;
    }
    closeList();
    out.push(`<p>${inline(line)}</p>`);
  }
  closeList();
  return out.join('\n');
}

// Recreates the Google Docs "Plantilla": A4, Arial 11pt, header with the
// academy link on the left and the logo on the right, repeated on every page
// (a <thead> repeats on each printed page in Chrome). Footer: creation date
// (dd/mm/yyyy) on the left, page number on the right.
function page(title, body) {
  const date = new Date().toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' });
  const katexCss = pathToFileURL(path.join(root, 'node_modules/katex/dist/katex.min.css')).href;
  const logo = pathToFileURL(path.join(root, 'public/favicon/logo.png')).href;
  return `<!doctype html>
<html lang="es"><head><meta charset="utf-8"><title>${escapeHtml(title)}</title>
<link rel="stylesheet" href="${katexCss}">
<style>
  @page { size: A4; margin: 15mm 25.4mm 18mm;
    @bottom-left { content: "${date}"; font: 10pt Arial, Helvetica, sans-serif; }
    @bottom-right { content: counter(page); font: 10pt Arial, Helvetica, sans-serif; } }
  body { margin: 0; font: 11pt/1.15 Arial, Helvetica, sans-serif; color: #000; }
  table.layout { width: 100%; border-collapse: collapse; }
  table.layout > * > tr > td { padding: 0; }
  .header { padding-left: 4pt; display: flex; justify-content: space-between; align-items: center; padding-bottom: 8mm; }
  .header a { color: inherit; }
  .header img { width: 36px; height: 36px; }
  h1 { font-size: 24pt; margin: 6pt 0 12pt; }
  h2 { font-size: 15pt; margin: 0 0 12pt; }
  h3 { font-size: 14pt; margin: 16pt 0 8pt; break-after: avoid; }
  p, ul, ol { margin: 0 0 6pt; }
  ul, ol { padding-left: 20pt; }
  ul { list-style: none; padding-left: 10pt; }
  li { margin-bottom: 4pt; }
  .display { margin: 6pt 0; break-inside: avoid; }
  p:has(+ .display) { break-after: avoid; }
  .katex { font-size: 1.05em; }
  .page-break { break-after: page; }
  .tex-error { color: #c00; }
</style></head>
<body><table class="layout">
<thead><tr><td><div class="header"><a href="${SITE_URL}/">${escapeHtml(SITE_NAME)} - ${ADDRESS.city}</a><img src="${logo}" alt=""></div></td></tr></thead>
<tbody><tr><td>
${body}
</td></tr></tbody></table></body></html>`;
}

function nextName(outDir, base) {
  const pdfs = fs.existsSync(outDir) ? fs.readdirSync(outDir).filter(f => /-\d+\.pdf$/.test(f)) : [];
  if (!base) {
    const bases = [...new Set(pdfs.map(f => f.replace(/-\d+\.pdf$/, '')))];
    if (bases.length !== 1) fail(`Can't infer the base name from ${outDir} (found: ${bases.join(', ') || 'none'}). Pass --base.`);
    base = bases[0];
  }
  const nums = pdfs.filter(f => f.startsWith(base + '-')).map(f => Number(f.slice(base.length + 1, -4))).filter(Number.isInteger);
  return `${base}-${Math.max(0, ...nums) + 1}`;
}

const args = parseArgs(process.argv.slice(2));
if (!args.file || args.file === true) {
  console.log('Usage: render.mjs --file <md> --out <dir> [--base <name>] [--html]\n       render.mjs --file exercises-src/<level>/<topic>/<name>.md [--html]');
  process.exit(args.help ? 0 : 1);
}
const source = path.resolve(args.file);
if (!fs.existsSync(source)) fail('File not found: ' + args.file);
const markdown = fs.readFileSync(source, 'utf8');
if (!markdown.trim()) fail('The file is empty.');
const CHROME = findChrome();

// A kept source re-renders its own PDF; anything else becomes the next numbered sheet.
const rerender = source.startsWith(SOURCE_DIR + path.sep);
let outDir, name;
if (rerender) {
  outDir = path.join(PUBLIC_DIR, path.relative(SOURCE_DIR, path.dirname(source)));
  name = path.basename(source, '.md');
} else {
  if (!args.out || args.out === true) fail('--out is required for a new sheet.');
  outDir = path.resolve(args.out);
  if (!outDir.startsWith(PUBLIC_DIR + path.sep)) fail('--out must be inside public/ejercicios.');
  name = nextName(outDir, typeof args.base === 'string' ? args.base : undefined);
}
fs.mkdirSync(outDir, { recursive: true });
const pdfPath = path.join(outDir, name + '.pdf');

const html = page(name, toHtml(markdown));
const htmlPath = args.html ? path.join(outDir, name + '.html') : path.join(fs.mkdtempSync(path.join(os.tmpdir(), 'agora-')), name + '.html');
fs.writeFileSync(htmlPath, html);

execFileSync(CHROME, [
  '--headless', '--disable-gpu', '--no-pdf-header-footer', '--allow-file-access-from-files',
  `--print-to-pdf=${pdfPath}`, pathToFileURL(htmlPath).href,
], { stdio: 'pipe' });
if (!fs.existsSync(pdfPath)) fail('Chrome did not produce the PDF.');

const sourcePath = path.join(SOURCE_DIR, path.relative(PUBLIC_DIR, outDir), name + '.md');
if (!rerender) {
  fs.mkdirSync(path.dirname(sourcePath), { recursive: true });
  fs.writeFileSync(sourcePath, markdown);
}

console.log(JSON.stringify({
  name,
  pdfPath: path.relative(process.cwd(), pdfPath),
  sourcePath: path.relative(process.cwd(), sourcePath),
  htmlPath: args.html ? path.relative(process.cwd(), htmlPath) : undefined,
  failedEquations,
}, null, 2));
if (failedEquations.length) process.exit(2);
