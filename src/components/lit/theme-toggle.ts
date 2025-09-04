import type { ThemeToggleEvent } from "@/types/theme";

import { LitElement, css, html, type PropertyValues } from "lit";
import { customElement, property, query, state } from "lit/decorators.js";
import { AiOutlineMoon, AiOutlineSun } from "mjo-icons/ai";

import { themeManager } from "@/utils/theme";

import "mjo-litui/mjo-form";
import "mjo-litui/mjo-icon";
import "mjo-litui/mjo-textfield";

@customElement("theme-toggle")
export class ThemeToggle extends LitElement {
    @property({ type: String }) id = "";

    @state() icon: string = AiOutlineSun;

    @query("span") span!: HTMLSpanElement;

    render() {
        return html`
            <span class="hidden" @click=${this.#handleClick}>
                <mjo-icon src=${this.icon}></mjo-icon>
            </span>
        `;
    }

    connectedCallback(): void {
        super.connectedCallback();

        document.addEventListener("theme-change", this.#handleTheme);
    }

    disconnectedCallback(): void {
        super.disconnectedCallback();

        document.removeEventListener("theme-change", this.#handleTheme);
    }

    firstUpdated(_changedProperties: PropertyValues): void {
        setTimeout(() => {
            this.icon = document.body.classList.contains("dark") ? AiOutlineSun : AiOutlineMoon;
            this.span.classList.remove("hidden");
        }, 50);
    }

    #handleClick = () => {
        themeManager?.toggleTheme();
    };

    #handleTheme = (ev: Event) => {
        const theme = (ev as ThemeToggleEvent).detail;

        if (theme === "dark") {
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
            span {
                padding-left: calc(var(--spacing, 0.25rem) * 3);
                padding-right: calc(var(--spacing, 0.25rem) * 3);
                position: relative;
                display: inline-block;
                cursor: pointer;
                color: currentColor;
                transition: all 0.3s;
                opacity: 1;
            }
            mjo-icon {
                top: -1px;
                vertical-align: middle;
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
