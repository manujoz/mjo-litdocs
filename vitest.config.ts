/// <reference types="vitest" />
import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        globals: true,
        environment: "node",
        include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}", "tests/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
        exclude: [
            "**/node_modules/**",
            "**/dist/**",
            "**/cypress/**",
            "**/.{idea,git,cache,output,temp}/**",
            "**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build,eslint,prettier}.config.*",
        ],
        coverage: {
            reporter: ["text", "json", "html"],
            exclude: ["node_modules/", "test/", "tests/", "**/*.d.ts", "**/*.test.{js,ts}", "**/*.spec.{js,ts}", "**/dist/**", "**/coverage/**"],
        },
        // Configure server deps for prismjs
        deps: {
            inline: ["prismjs"],
        },
    },
});
