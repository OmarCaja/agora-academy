#!/usr/bin/env node
/**
 * Client for the Ágora generator (Google Apps Script).
 *
 *   node generate.mjs ping
 *   node generate.mjs folders
 *   node generate.mjs create --folder "2 Bachillerato / Matrices" --file exam.md \
 *        --out public/ejercicios/2-bach/matrices [--base matrices] [--create-folders]
 *
 * Reads GENERADOR_URL and GENERADOR_KEY from .env (searched from the current
 * directory upwards) or from environment variables.
 */
import fs from 'node:fs';
import path from 'node:path';

function fail(msg) {
  console.error('Error: ' + msg);
  process.exit(1);
}

function loadEnv() {
  let dir = process.cwd();
  while (true) {
    const f = path.join(dir, '.env');
    if (fs.existsSync(f)) {
      for (const line of fs.readFileSync(f, 'utf8').split(/\r?\n/)) {
        const m = line.match(/^\s*([A-Z_]+)\s*=\s*(.*?)\s*$/);
        if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
      }
      break;
    }
    const parent = path.dirname(dir);
    if (parent === dir) break;
    dir = parent;
  }
  const url = process.env.GENERADOR_URL, key = process.env.GENERADOR_KEY;
  if (!url || !key) fail('GENERADOR_URL and GENERADOR_KEY not found. Add them to .env at the repo root.');
  return { url, key };
}

function parseArgs(argv) {
  const args = { _: [] };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a.startsWith('--')) {
      const name = a.slice(2);
      const next = argv[i + 1];
      if (next === undefined || next.startsWith('--')) args[name] = true;
      else { args[name] = next; i++; }
    } else args._.push(a);
  }
  return args;
}

async function request(url, options) {
  try {
    return await fetch(url, options);
  } catch (e) {
    fail('Could not connect to the generator: ' + (e.cause?.message || e.message));
  }
}

const wait = s => new Promise(r => setTimeout(r, s * 1000));

async function call(env, payload) {
  // Apps Script runs doPost on the POST and serves its result through a 302 to
  // googleusercontent.com, which intermittently answers with an HTML error
  // page ("No se puede abrir el archivo en estos momentos") or a redirect to
  // the Workspace login. Retry that GET; only re-POST read-only actions,
  // since re-POSTing a create would duplicate the Doc.
  const posts = payload.action === 'create' ? 1 : 3;
  let res, text, data;
  for (let p = 0; p < posts && !data; p++) {
    if (p) await wait(3);
    res = await request(env.url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ key: env.key, ...payload }),
      redirect: 'manual',
    });
    const location = res.headers.get('location');
    text = location ? '' : await res.text();
    if (!location) try { data = JSON.parse(text); } catch {}
    for (let i = 0; location && i < 4 && !data; i++) {
      if (i) await wait(2 * i);
      res = await request(location);
      text = await res.text();
      try { data = JSON.parse(text); } catch {}
    }
  }
  if (!data) fail(`Unexpected response (HTTP ${res.status}). Is the URL the /exec of the "API Cowork" deployment?` +
    (payload.action === 'create' ? ' The Doc may have been created anyway: check Drive before retrying.' : '') + '\n' + text.slice(0, 300));
  if (!data.ok) fail(data.error || 'Unknown generator error.');
  return data;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const cmd = args._[0];
  if (!cmd || args.help) {
    console.log('Usage: generate.mjs ping | folders | create --folder "<course> / <topic>" --file <md> --out <dir> [--base <name>] [--create-folders]');
    return;
  }
  const env = loadEnv();

  if (cmd === 'ping') {
    console.log((await call(env, { action: 'ping' })).message);
    return;
  }

  if (cmd === 'folders') {
    (await call(env, { action: 'folders' })).folders.forEach(f => console.log(f));
    return;
  }

  if (cmd === 'create') {
    if (!args.folder || args.folder === true) fail('Missing --folder.');
    if (!args.file || args.file === true) fail('Missing --file.');
    if (!args.out || args.out === true) fail('Missing --out.');
    if (!fs.existsSync(args.file)) fail('File not found: ' + args.file);
    const markdown = fs.readFileSync(args.file, 'utf8');
    if (!markdown.trim()) fail('The file is empty.');

    const outDir = path.resolve(args.out);
    fs.mkdirSync(outDir, { recursive: true });

    const data = await call(env, {
      action: 'create',
      folderPath: args.folder,
      baseName: typeof args.base === 'string' ? args.base : undefined,
      createFolders: args['create-folders'] === true,
      markdown,
      pdf: true,
    });

    const pdfPath = path.join(outDir, data.pdfName);
    let saved = true;
    if (fs.existsSync(pdfPath)) {
      saved = false;
    } else {
      fs.writeFileSync(pdfPath, Buffer.from(data.pdfBase64, 'base64'));
    }

    console.log(JSON.stringify({
      name: data.name,
      docUrl: data.docUrl,
      pdfPath: path.relative(process.cwd(), pdfPath),
      pdfSaved: saved,
      warning: saved ? undefined : 'A PDF with that name already existed and was NOT overwritten. The Google Doc was created.',
      failedEquations: data.failedEquations,
    }, null, 2));
    if (!saved) process.exit(2);
    return;
  }

  fail('Unknown command: ' + cmd);
}

main();
