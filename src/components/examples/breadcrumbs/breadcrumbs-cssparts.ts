import type { MjoBreadcrumbsItems } from "mjo-litui/types/mjo-breadcrumbs";

import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import { AiOutlineBars, AiOutlineFolder, AiOutlineHome } from "mjo-icons/ai";

import "mjo-litui/mjo-breadcrumbs";

const items: MjoBreadcrumbsItems = [
    { label: "Home", href: "#navigation", icon: AiOutlineHome },
    { label: "Docs", href: "#navigation", icon: AiOutlineFolder },
    { label: "Components", href: "#navigation", icon: AiOutlineBars },
    { label: "Breadcrumbs", active: true },
];

@customElement("breadcrumbs-cssparts")
export class BreadcrumbsCssparts extends LitElement {
    render() {
        return html` <mjo-breadcrumbs .items=${items} class="custom-breadcrumbs"></mjo-breadcrumbs> `;
    }

    static styles = [
        css`
            :host {
                display: block;
            }
            .custom-breadcrumbs::part(container) {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                padding: 1rem;
                border-radius: 12px;
            }
            .custom-breadcrumbs::part(list-item) {
                padding: 0;
                border-radius: 6px;
                transition: background-color 0.2s ease;
            }
            .custom-breadcrumbs::part(link) {
                padding: 2px 4px;
                border-radius: 6px;
                transition: background-color 0.2s ease;
            }
            .custom-breadcrumbs::part(link):hover {
                background: rgba(255, 255, 255, 0.1);
            }
            .custom-breadcrumbs::part(link-text) {
                color: white;
                font-weight: 500;
            }
            .custom-breadcrumbs::part(active-text) {
                color: #ffd700;
                font-weight: 700;
            }
            .custom-breadcrumbs::part(icon) {
                color: white;
            }
            .custom-breadcrumbs::part(active-icon) {
                color: #ffd700;
            }
            .custom-breadcrumbs::part(icon-separator) {
                color: rgba(255, 255, 255, 0.7);
            }
        `,
    ];
}
