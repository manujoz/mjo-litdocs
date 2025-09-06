import type { MjoThemeConfig } from "mjo-litui/types/mjo-theme";

export const themeConfig: MjoThemeConfig = {
    light: {
        borderColor: {
            low: "#dddddd",
            default: "#cccccc",
            high: "#aaaaaa",
        },
        backgroundColor: {
            low: "#f0f0f0",
            default: "#eeeded",
            high: "#dddddd",
        },
        foregroundColor: {
            low: "#333333",
            default: "#111111",
            high: "#000000",
        },
        backgroundColorCard: {
            low: "#ffffff",
            default: "#faf9f9",
            high: "#eaeaea",
        },
    },
    dark: {
        borderColor: {
            low: "#181818",
            default: "#333333",
            high: "#555555",
        },
        backgroundColor: {
            low: "#000000",
            default: "#080808",
            high: "#181818",
        },
        foregroundColor: {
            low: "#bbbbbb",
            default: "#f7f9fa",
            high: "#ffffff",
        },
        backgroundColorCard: {
            low: "#111111",
            default: "#161616",
            high: "#252525",
        },
    },
};
