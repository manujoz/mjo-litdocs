import type { MjoBreadcrumbsItems } from "mjo-litui/types/mjo-breadcrumbs";

import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-breadcrumbs";

const items: MjoBreadcrumbsItems = [
    { label: "Home", href: "#" },
    { label: "Components", href: "#" },
    { label: "Navigation", href: "#" },
    { label: "Breadcrumbs", href: "#" },
    { label: "Examples", href: "#" },
    { label: "Horizontal Scroll", href: "#" },
    { label: "Long Content Example", href: "#" },
    { label: "Current Page", active: true },
];

@customElement("breadcrumbs-scroll")
export class BreadcrumbsScroll extends LitElement {
    render() {
        return html`
            <div class="container">
                <mjo-breadcrumbs .items=${items}></mjo-breadcrumbs>
            </div>
        `;
    }

    static styles = [
        css`
            :host {
                display: block;
                width: 100%;
            }

            .container {
                max-width: 400px;
                border: 1px solid var(--mjo-border-color);
                border-radius: 8px;
                padding: 1rem;
                background: var(--mjo-background-color-card);
            }
        `,
    ];
}
