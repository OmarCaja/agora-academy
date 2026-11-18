import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import { readdirSync, readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { SITE_URL } from './src/data/site.ts';
import { RENAMED_TOPICS } from './src/data/topics.ts';
import { discoverAllExercises } from './src/utils/discoverExercises.ts';

// Old URLs indexed by Google -> current Spanish paths: root-level topics
// (/<slug>/), the English sections (/theory/, /exercises/, /books/) and renamed
// topics.
const topicSlugs = readdirSync('./src/content/topics')
    .filter((f) => f.endsWith('.json'))
    .map((f) => f.slice(0, -5));
const redirects = {
    '/theory': '/teoria/',
    '/exercises': '/ejercicios/',
    '/books': '/libros/',
};
for (const level of Object.keys(discoverAllExercises())) redirects[`/exercises/${level}`] = `/ejercicios/${level}/`;
for (const slug of topicSlugs) {
    redirects[`/${slug}`] = `/teoria/${slug}/`;
    redirects[`/theory/${slug}`] = `/teoria/${slug}/`;
}
for (const [oldSlug, slug] of Object.entries(RENAMED_TOPICS)) {
    for (const from of [`/${oldSlug}`, `/theory/${oldSlug}`, `/teoria/${oldSlug}`]) redirects[from] = `/teoria/${slug}/`;
}

// Last commit that touched a path, for the sitemap's <lastmod> (CI checks out
// the full history, see deploy.yml). Undefined when git has nothing for it.
const lastCommit = (path) => {
    try {
        return execFileSync('git', ['log', '-1', '--format=%cI', '--', path], { encoding: 'utf8' }).trim() || undefined;
    } catch {
        return undefined;
    }
};
// Which source files a page is built from.
const pageSource = (pathname) => {
    const topic = pathname.match(/^\/teoria\/([^/]+)\/$/);
    if (topic) return `src/content/topics/${topic[1]}.json`;
    if (pathname === '/teoria/') return 'src/content/topics';
    const level = pathname.match(/^\/ejercicios\/(.*)$/);
    if (level) return `public/ejercicios/${level[1]}`;
    if (pathname === '/libros/') return 'scripts/books.json';
};

// KaTeX renders with throwOnError: false, so a broken formula would ship as red
// text. Fail the build instead.
const failOnKatexErrors = {
    name: 'fail-on-katex-errors',
    hooks: {
        'astro:build:done': ({ dir }) => {
            const root = fileURLToPath(dir);
            const broken = readdirSync(root, { recursive: true })
                .filter((f) => f.endsWith('.html') && readFileSync(`${root}/${f}`, 'utf8').includes('katex-error'));
            if (broken.length) throw new Error(`Broken KaTeX formulas in: ${broken.join(', ')}`);
        },
    },
};

// https://astro.build/config
export default defineConfig({
    site: SITE_URL,
    redirects,
    integrations: [
        sitemap({
            // /buscar/ and /mapa/ are empty until their scripts run: nothing to index.
            filter: (page) => !['/buscar/', '/mapa/'].includes(new URL(page).pathname),
            serialize(item) {
                const source = pageSource(new URL(item.url).pathname);
                const lastmod = source && lastCommit(source);
                return lastmod ? { ...item, lastmod } : item;
            },
        }),
        icon(),
        failOnKatexErrors,
    ],
    // 'hover' (the default) never fires on touch, so mobile got zero prefetch
    // lead time before every tap; 'viewport' starts fetching as soon as a
    // link is visible, on every device.
    prefetch: {
        defaultStrategy: 'viewport',
    },
    vite: {
        css: {
            lightningcss: {
                // Ensure modern CSS properties like backdrop-filter are emitted for all modern browsers
                // (without targets, LightningCSS drops the property from scoped component styles)
                targets: {
                    chrome: (100 << 16),
                    firefox: (100 << 16),
                    safari: (15 << 16),
                },
            },
        },
    },
})