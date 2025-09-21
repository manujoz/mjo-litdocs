// @ts-check
import node from "@astrojs/node";
import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders } from "astro/config";

import lit from "mjo-astro-lit";

// https://astro.build/config
export default defineConfig({
    site: "https://mjo-litui.dev",
    output: "server",
    adapter: node({
        mode: "standalone",
    }),
    markdown: {
        syntaxHighlight: "shiki",
        shikiConfig: {
            themes: {
                light: "github-light",
                dark: "github-dark",
            },
            defaultColor: false, // Use CSS variables instead of inline styles
            wrap: true,
        },
    },
    vite: {
        resolve: {
            alias: {
                "@astrojs/lit": "mjo-astro-lit",
                "@": new URL("./src", import.meta.url).pathname,
                "@/components": new URL("./src/components", import.meta.url).pathname,
                "@/layouts": new URL("./src/layouts", import.meta.url).pathname,
                "@/utils": new URL("./src/utils", import.meta.url).pathname,
                "@/styles": new URL("./src/styles", import.meta.url).pathname,
                "@/icons": new URL("./src/assets/icons", import.meta.url).pathname,
                "@/assets": new URL("./src/assets", import.meta.url).pathname,
                "@/types": new URL("./src/types", import.meta.url).pathname,
                "@/scripts": new URL("./src/scripts", import.meta.url).pathname,
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
                name: "Inter",
                cssVariable: "--font-inter",
            },
        ],
    },
});
