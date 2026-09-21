import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import { readdirSync } from 'node:fs';

// Old root-level topic URLs (/<slug>/) indexed by Google -> /theory/<slug>/
const topicRedirects = Object.fromEntries(
    readdirSync('./src/content/topics')
        .filter((f) => f.endsWith('.json'))
        .map((f) => f.slice(0, -5))
        .map((slug) => [`/${slug}`, `/theory/${slug}/`]),
);

// https://astro.build/config
export default defineConfig({
    site: 'https://www.agoraacademy.es',
    redirects: topicRedirects,
    integrations: [sitemap(), icon()],
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