import type { MjoIconClickEvent } from "mjo-litui/types/mjo-icon";
import type { MjoThemeChangeEvent, MjoThemeConfig, MjoThemeModes } from "mjo-litui/types/mjo-theme";

import { LitElement, css, html } from "lit";
import { customElement, state } from "lit/decorators.js";

import { GiPeaceDove } from "mjo-icons/gi";
import { SiLit } from "mjo-icons/si";
import { TbDeviceTvOldFilled } from "mjo-icons/tb";

import { themeConfig } from "@/utils/theme";

import "mjo-litui/mjo-button";
import "mjo-litui/mjo-card";
import "mjo-litui/mjo-chip";
import "mjo-litui/mjo-image";
import "mjo-litui/mjo-textfield";
import "mjo-litui/mjo-theme";

const themeDefault: MjoThemeConfig = {
    ...themeConfig,
    spaceLarge: "0",
};
const themePeace: MjoThemeConfig = {
    primaryColor: "#23BCA0",
    radiusLarge: "5px",
    spaceLarge: "10px",
    spaceMedium: "0px",
    colors: {
        gradient: "linear-gradient(132deg, #303030FF 0%, #0C0C0CFF 100%)",
    },
    light: {
        backgroundColorCard: {
            default: "#faf9f9",
        },
        boxShadow: {
            "1": "0 0 12px #05050533",
        },
    },
    dark: {
        backgroundColorCard: {
            default: "#050505",
        },
        boxShadow: {
            "1": "4px 4px 8px #05050555",
        },
    },
};
const themeRetro: MjoThemeConfig = {
    primaryColor: "#333333",
    fontFamily: "Tahoma, sans-serif",
    radiusLarge: "0px",
    spaceLarge: "0px",
    spaceMedium: "8px",
    colors: {
        gradient: "linear-gradient(135deg, #EFC598 0%, #C2A955 100%)",
    },
    components: {
        mjoCard: {
            border: "1px solid #D78D3D",
        },
    },
    light: {
        foregroundColor: {
            default: "#333333",
        },
        backgroundColorCard: {
            default: "#F4EA95",
        },
        boxShadow: {
            "1": "0px 0px 10px #F4EA95",
            "3": "3px 3px 0px #D78D3D",
        },
    },
    dark: {
        foregroundColor: {
            default: "#333333",
        },
        backgroundColorCard: {
            default: "#F4EA95",
        },
        boxShadow: {
            "1": "0px 0px 10px #F4EA95",
            "3": "3px 3px 0px #D78D3D",
        },
    },
};

@customElement("theming-example")
export class ThemingExample extends LitElement {
    @state() theme: MjoThemeModes = "light";
    @state() themeConfig: "default" | "retro" | "peace" = "default";

    get #computedThemeConfig() {
        switch (this.themeConfig) {
            case "retro":
                return { ...themeRetro };
            case "peace":
                return { ...themePeace };
            default:
                return { ...themeDefault };
        }
    }

    render() {
        return html`
            <div class="selectable">
                <div>
                    <mjo-icon data-selected src=${SiLit} size="large" clickable @mjo-icon:click=${this.#handleTheme} data-theme="default"></mjo-icon>
                    <mjo-icon src=${TbDeviceTvOldFilled} size="large" clickable @mjo-icon:click=${this.#handleTheme} data-theme="retro"></mjo-icon>
                    <mjo-icon src=${GiPeaceDove} size="large" clickable @mjo-icon:click=${this.#handleTheme} data-theme="peace"></mjo-icon>
                </div>
            </div>
            <mjo-theme scope="local" theme=${this.theme} .config=${this.#computedThemeConfig}>
                <mjo-card radius="large" data-themeconfig=${this.themeConfig}>
                    <div class="user">
                        <div class="image">
                            <mjo-image src="/img/users/150.png" alt="Developer John Doe"></mjo-image>
                        </div>
                        <div class="info">
                            <mjo-typography tag="h4" size="heading2" weight="bold">John Doe</mjo-typography>
                            <mjo-typography tag="p" size="body1" weight="regular">
                                Fullstack developer with extensive knowledge in web technologies.
                            </mjo-typography>
                            <div class="skills">
                                <mjo-chip label="React" variant=${this.themeConfig === "retro" ? "solid" : "flat"} color="info"></mjo-chip>
                                <mjo-chip label="PHP" variant=${this.themeConfig === "retro" ? "solid" : "flat"} color="warning"></mjo-chip>
                                <mjo-chip label="Vue" variant=${this.themeConfig === "retro" ? "solid" : "flat"} color="success"></mjo-chip>
                                <mjo-chip label="Angular" variant=${this.themeConfig === "retro" ? "solid" : "flat"} color="error"></mjo-chip>
                            </div>
                        </div>
                    </div>
                </mjo-card>
            </mjo-theme>
        `;
    }

    connectedCallback(): void {
        super.connectedCallback();

        this.theme = this.#getThemeFromCookie() || "dark";

        document.addEventListener("mjo-theme:change", this.#handleThemeToggle);
    }

    disconnectedCallback(): void {
        super.disconnectedCallback();

        document.removeEventListener("mjo-theme:change", this.#handleThemeToggle);
    }

    #getThemeFromCookie(): MjoThemeModes | null {
        const theme = document.cookie
            .split("; ")
            .find((row) => row.startsWith("mjo-theme="))
            ?.split("=")[1] as MjoThemeModes;
        return theme || null;
    }

    #handleThemeToggle = (event: Event) => {
        const theme = (event as MjoThemeChangeEvent).detail.theme;
        if (theme) {
            this.theme = theme;
        }
    };

    #handleTheme = (event: MjoIconClickEvent) => {
        const iconClicked = event.detail.element;
        const theme = iconClicked.dataset.theme as "default" | "retro" | "peace";
        this.themeConfig = theme;

        const icons = this.shadowRoot?.querySelectorAll(".selectable mjo-icon");

        icons?.forEach((icon) => {
            if (icon !== iconClicked) {
                icon.removeAttribute("data-selected");
            }
        });

        iconClicked.setAttribute("data-selected", "");
    };

    static styles = [
        css`
            :host {
                display: block;
            }
            .selectable {
                position: relative;
                display: flex;
                justify-content: flex-end;
                color: var(--mjo-foreground-color-low);
                margin-bottom: 20px;
            }
            .selectable > div {
                background-color: var(--mjo-background-color-card);
                padding: 2px 7px;
                border-radius: var(--mjo-radius-large);
                display: flex;
                gap: 10px;
            }
            .selectable mjo-icon {
                vertical-align: middle;
            }
            .selectable mjo-icon:hover {
                color: var(--mjo-secondary-color);
            }
            .selectable mjo-icon[data-selected] {
                color: var(--mjo-primary-color);
            }
            mjo-theme {
                height: 170px;
            }
            .user {
                position: relative;
                display: flex;
                gap: var(--mjo-space-medium);
            }
            .image {
                position: relative;
                flex: 0 1 150px;
                min-width: 150px;
                margin-bottom: 0px;
            }
            mjo-card {
                color: var(--mjo-foreground-color);
                font-family: var(--mjo-font-family);
                width: 500px;
            }
            [data-themeconfig="default"] mjo-image {
                position: absolute;
                height: 150px;
                width: 150px;
                bottom: 0;
                left: 0;
            }
            mjo-image {
                position: relative;
                height: 150px;
                width: 150px;
                border-radius: var(--mjo-radius-large);
                background-image: var(--mjo-color-gradient);
                box-shadow: var(--mjo-box-shadow-3);
                overflow: hidden;
            }
            .info {
                position: relative;
                flex: 1 1 0;
                min-width: 200px;
                width: 300px;
                max-width: 90vw;
                display: flex;
                flex-flow: column;
                padding: var(--mjo-space-large);
            }
            mjo-typography[tag="h4"] {
                color: var(--mjo-primary-color);
            }
            .skills {
                position: relative;
                display: flex;
                justify-content: flex-end;
                align-items: flex-end;
                flex: 1 1 0;
                gap: var(--mjo-space-small);
                padding-top: 22px;
            }
        `,
    ];
}

declare global {
    interface HTMLElementTagNameMap {
        "theming-example": ThemingExample;
    }
}
