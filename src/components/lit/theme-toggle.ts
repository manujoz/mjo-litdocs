import type { MjoThemeChangeEvent } from "mjo-litui/types/mjo-theme";

import { LitElement, css, html, type PropertyValues } from "lit";
import { customElement, property, query, state } from "lit/decorators.js";
import { AiOutlineMoon, AiOutlineSun } from "mjo-icons/ai";

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

        document.addEventListener("mjo-theme:change", this.#handleTheme);
    }

    disconnectedCallback(): void {
        super.disconnectedCallback();

        document.removeEventListener("mjo-theme:change", this.#handleTheme);
    }

    firstUpdated(_changedProperties: PropertyValues): void {
        setTimeout(() => {
            this.icon = document.body.classList.contains("dark") ? AiOutlineSun : AiOutlineMoon;
            this.span.classList.remove("hidden");
        }, 50);
    }

    #handleClick = () => {
        const themeComponent = document.querySelector("theme-component");

        if (!themeComponent) {
            console.error("Theme component not found");
            return;
        }

        themeComponent.toggleTheme();

        const theme = themeComponent.theme;
        console.log(theme);
        if (theme === "dark") {
            document.querySelector("html")?.classList.remove("light");
            document.querySelector("html")?.classList.add("dark");
            document.body.classList.add("dark");
            document.body.classList.remove("light");
        } else {
            document.querySelector("html")?.classList.remove("dark");
            document.querySelector("html")?.classList.add("light");
            document.body.classList.add("light");
            document.body.classList.remove("dark");
        }
    };

    #handleTheme = (ev: Event) => {
        const theme = (ev as MjoThemeChangeEvent).detail.theme;

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
