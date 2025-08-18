import type { ThemeToggleEvent } from "@/types/theme";

export class ThemeManager {
    private static instance: ThemeManager;
    private currentTheme: "light" | "dark" = "dark";

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
        const savedTheme = localStorage.getItem("theme") as "light" | "dark";
        this.currentTheme = savedTheme || "dark";
        this.applyTheme();
    }

    setTheme(theme: "light" | "dark"): void {
        this.currentTheme = theme;
        localStorage.setItem("theme", theme);
        this.applyTheme();

        document.dispatchEvent(new CustomEvent("theme-change", { detail: this.currentTheme }));
    }

    getTheme(): "light" | "dark" {
        return this.currentTheme;
    }

    private applyTheme(): void {
        const html = document.querySelector("html");
        const body = document.body;

        if (this.currentTheme === "dark") {
            if (html) html.classList.add("dark");
            if (body) body.classList.add("dark");
        } else {
            if (html) html.classList.remove("dark");
            if (body) body.classList.remove("dark");
        }
    }

    toggleTheme(): void {
        if (this.currentTheme === "light") {
            this.setTheme("dark");
        } else {
            this.setTheme("light");
        }
    }

    isDark(): boolean {
        if (this.currentTheme === "dark") return true;
        return false;
    }
}

export const themeManager = ThemeManager.getInstance();

declare global {
    interface HTMLElementEventMap {
        "theme-change": ThemeToggleEvent;
    }
}
