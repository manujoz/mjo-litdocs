// Theme management utilities
export class ThemeManager {
    private static instance: ThemeManager;
    private currentTheme: "light" | "dark" | "auto" = "auto";

    static getInstance(): ThemeManager {
        if (!ThemeManager.instance) {
            ThemeManager.instance = new ThemeManager();
        }
        return ThemeManager.instance;
    }

    constructor() {
        if (typeof window !== "undefined") {
            this.init();
        }
    }

    private init(): void {
        // Get saved theme from localStorage or default to auto
        const savedTheme = localStorage.getItem("theme") as "light" | "dark" | "auto";
        this.currentTheme = savedTheme || "auto";
        this.applyTheme();

        // Listen for system theme changes
        window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
            if (this.currentTheme === "auto") {
                this.applyTheme();
            }
        });
    }

    setTheme(theme: "light" | "dark" | "auto"): void {
        this.currentTheme = theme;
        localStorage.setItem("theme", theme);
        this.applyTheme();
    }

    getTheme(): "light" | "dark" | "auto" {
        return this.currentTheme;
    }

    private applyTheme(): void {
        const html = document.documentElement;

        if (this.currentTheme === "dark") {
            html.classList.add("dark");
        } else if (this.currentTheme === "light") {
            html.classList.remove("dark");
        } else {
            // Auto mode - follow system preference
            const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
            if (isDarkMode) {
                html.classList.add("dark");
            } else {
                html.classList.remove("dark");
            }
        }
    }

    toggleTheme(): void {
        if (this.currentTheme === "light") {
            this.setTheme("dark");
        } else if (this.currentTheme === "dark") {
            this.setTheme("auto");
        } else {
            this.setTheme("light");
        }
    }

    isDark(): boolean {
        if (this.currentTheme === "dark") return true;
        if (this.currentTheme === "light") return false;
        // Auto mode - check system preference
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
}

export const themeManager = ThemeManager.getInstance();
