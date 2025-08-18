import type { ThemeToggleEvent } from "@/types/theme";
import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

import "mjo-litui/mjo-theme";
import type { MjoTheme } from "mjo-litui/mjo-theme";

@customElement("theme-component")
export class ThemeComponent extends LitElement {
    @property({ type: String }) theme: MjoTheme["theme"] = "dark";
    render() {
        return html`<mjo-theme scope="global" theme="${this.theme}"></mjo-theme>`;
    }

    connectedCallback(): void {
        super.connectedCallback();

        document.addEventListener("theme-change", this.#handleTheme);
    }

    disconnectedCallback(): void {
        super.disconnectedCallback();

        document.removeEventListener("theme-change", this.#handleTheme);
    }

    #handleTheme = (ev: Event) => {
        this.theme = (ev as ThemeToggleEvent).detail;
    };

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
