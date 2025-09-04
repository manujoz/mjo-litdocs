// @ts-check
import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders } from "astro/config";

import lit from "mjo-astro-lit";

// https://astro.build/config
export default defineConfig({
    site: "https://mjo-litui.dev",
    output: "server",
    vite: {
        resolve: {
            alias: {
                "@astrojs/lit": "mjo-astro-lit",
            },
        },
    },

    integrations: [
        lit(),
        sitemap({
            changefreq: "weekly",
            priority: 0.7,
            lastmod: new Date(),
        }),
    ],
    experimental: {
        fonts: [
            {
                provider: fontProviders.google(),
                name: "Montserrat",
                cssVariable: "--font-montserrat",
            },
        ],
    },
});
