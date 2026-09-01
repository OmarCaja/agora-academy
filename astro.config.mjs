import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://www.agoraacademy.es',
    integrations: [sitemap()],
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