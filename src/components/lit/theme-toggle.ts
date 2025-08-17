import { LitElement, css, html, type PropertyValues } from "lit";
import { customElement, query, state } from "lit/decorators.js";
import { AiOutlineMoon, AiOutlineSun } from "mjo-icons/ai";

import { themeManager } from "@/utils/theme";

import "mjo-litui/mjo-form";
import "mjo-litui/mjo-icon";
import "mjo-litui/mjo-textfield";

@customElement("theme-toggle")
export class ThemeToggle extends LitElement {
    @state() icon: string = AiOutlineSun;

    @query("button") button!: HTMLButtonElement;

    render() {
        return html`
            <button class="hidden" @click=${this.#handleClick}>
                <mjo-icon src=${this.icon}></mjo-icon>
            </button>
        `;
    }

    connectedCallback(): void {
        super.connectedCallback();

        console.log(document.body.classList.contains("dark"));
        setTimeout(() => {
            this.icon = document.body.classList.contains("dark") ? AiOutlineSun : AiOutlineMoon;
        }, 50);
    }

    firstUpdated(_changedProperties: PropertyValues): void {
        setTimeout(() => {
            this.button.classList.remove("hidden");
        }, 50);
    }

    #handleClick = () => {
        themeManager?.toggleTheme();

        if (themeManager?.isDark()) {
            this.icon = AiOutlineSun;
        } else {
            this.icon = AiOutlineMoon;
        }
    };

    static styles = [
        css`
            :host {
                display: block;
            }
            button {
                background: none;
                border: none;
                cursor: pointer;
                color: currentColor;
                transition: all 0.3s;
                opacity: 1;
            }
            .hidden {
                opacity: 0;
                transform: translate(-10px, 5px) rotate(-180deg);
            }
        `,
    ];
}

declare global {
    interface HTMLElementTagNameMap {
        "theme-toggle": ThemeToggle;
    }
}
