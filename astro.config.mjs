// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import lit from "@astrojs/lit";

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
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
