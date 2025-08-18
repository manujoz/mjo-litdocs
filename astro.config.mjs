// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import lit from "mjo-astro-lit";

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
        resolve: {
            alias: {
                "@astrojs/lit": "mjo-astro-lit",
            },
        },
    },

    integrations: [lit()],
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
