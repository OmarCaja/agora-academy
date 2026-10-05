import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import { readdirSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { SITE_URL } from './src/data/site.ts';

// Old root-level topic URLs (/<slug>/) indexed by Google -> /theory/<slug>/
const topicRedirects = Object.fromEntries(
    readdirSync('./src/content/topics')
        .filter((f) => f.endsWith('.json'))
        .map((f) => f.slice(0, -5))
        .map((slug) => [`/${slug}`, `/theory/${slug}/`]),
);

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
    redirects: topicRedirects,
    integrations: [sitemap(), icon(), failOnKatexErrors],
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