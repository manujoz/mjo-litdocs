import type { MjoTheme } from "mjo-litui/mjo-theme";

import { LitElement, css, html } from "lit";
import { customElement, property, query } from "lit/decorators.js";

import Cookies from "js-cookie";

import { themeConfig } from "@/utils/theme";

import "mjo-litui/mjo-theme";

@customElement("theme-component")
export class ThemeComponent extends LitElement {
    @property({ type: String }) theme: MjoTheme["theme"] = "dark";

    @query("mjo-theme") mjoTheme!: MjoTheme;

    render() {
        return html`<mjo-theme scope="global" theme="${this.theme}" .config=${themeConfig}></mjo-theme>`;
    }

    connectedCallback(): void {
        super.connectedCallback();

        this.theme = (Cookies.get("mjo-theme") as MjoTheme["theme"] | null) || "dark";
    }

    toggleTheme() {
        this.mjoTheme.toggleTheme();
    }

    static styles = [
        css`
            :host {
                display: block;
            }
        `,
    ];
}

declare global {
    interface HTMLElementTagNameMap {
        "theme-component": ThemeComponent;
    }
}
