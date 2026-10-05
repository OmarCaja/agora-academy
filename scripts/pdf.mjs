// Shared by the two PDF generators: scripts/build-book.mjs and
// .claude/skills/generate-exercises/scripts/render.mjs.
import fs from 'node:fs';

export const fail = msg => { console.error('Error: ' + msg); process.exit(1); };

export const escapeHtml = s =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Usual Chrome/Chromium install paths on macOS, Linux and Windows.
const CHROME_PATHS = [
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
  '/usr/bin/google-chrome',
  '/usr/bin/google-chrome-stable',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser',
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
];

export function findChrome() {
  const chrome = process.env.CHROME || CHROME_PATHS.find(p => fs.existsSync(p));
  if (!chrome || !fs.existsSync(chrome)) fail('Chrome not found. Install Google Chrome or set CHROME=/path/to/chrome.');
  return chrome;
}
