import { navigationMenu } from "@/utils/navigation";
import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import { repeat } from "lit/directives/repeat.js";

import { AiOutlineGithub } from "mjo-icons/ai";

import "@/components/lit/theme-toggle";
import "mjo-litui/mjo-icon";
import "mjo-litui/mjo-menu-button";

@customElement("mobile-navigation")
export class MobileNavigation extends LitElement {
    render() {
        return html`
            <mjo-menu-button size="sm"></mjo-menu-button>
            <div class="background"></div>
            <aside class="menu-container">
                <nav>
                    <ul>
                        ${repeat(
                            navigationMenu,
                            (item) => item.href,
                            (item) => html` <li><a href="${item.href}">${item.name}</a></li> `
                        )}
                    </ul>
                </nav>
                <div class="actions">
                    <div>
                        <a
                            href="https://github.com/manujoz/mjo-litui"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub repository"
                            title="View on GitHub"
                        >
                            <mjo-icon src=${AiOutlineGithub}></mjo-icon>
                        </a>
                    </div>
                    <div>
                        <theme-toggle></theme-toggle>
                    </div>
                </div>
            </aside>
        `;
    }

    static styles = [
        css`
            :host {
                display: flex;
                align-items: center;
            }
            mjo-menu-button {
                top: -2px;
                z-index: 1;
            }
            .menu-container {
                position: fixed;
                top: 0;
                left: 0;
                height: 100dvh;
                width: 250px;
                padding: 20px 0 10px;
                box-sizing: border-box;
                display: flex;
                flex-direction: column;
                background-color: var(--color-background);
            }
            .background {
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100dvh;
                background: rgba(0, 0, 0, 0.8);
            }
            nav {
                position: relative;
                flex: 1 1 auto;
            }
            ul {
                position: relative;
                list-style: none;
                padding: 0;
                margin: 0;
            }
            li {
                position: relative;
                padding: 8px 10px;
            }
            a {
                color: var(--color-text);
                text-decoration: none;
            }
            a::before {
                position: absolute;
                inset: 0;
                content: "";
            }
            .actions {
                position: relative;
                flex: 0 1 auto;
                display: flex;
                gap: 8px;
            }
            .actions > div {
                flex: 1 1 0;
                display: flex;
                justify-content: center;
            }
        `,
    ];
}

declare global {
    interface HTMLElementTagNameMap {
        "mobile-navigation": MobileNavigation;
    }
}
