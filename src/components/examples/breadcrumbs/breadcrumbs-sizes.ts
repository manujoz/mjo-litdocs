import type { MjoBreadcrumbsItems } from "mjo-litui/types/mjo-breadcrumbs";

import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-breadcrumbs";

const items: MjoBreadcrumbsItems = [
    { label: "Home", href: "#" },
    { label: "Docs", href: "#" },
    { label: "Components", href: "#" },
    { label: "Breadcrumbs", href: "#", active: true },
];

@customElement("breadcrumbs-sizes")
export class BreadcrumbsSizes extends LitElement {
    render() {
        return html`
            <div class="size-section">
                <h4>Small</h4>
                <mjo-breadcrumbs .items=${items} size="small"></mjo-breadcrumbs>
            </div>
            <div class="size-section">
                <h4>Medium</h4>
                <mjo-breadcrumbs .items=${items} size="medium"></mjo-breadcrumbs>
            </div>
            <div class="size-section">
                <h4>Large</h4>
                <mjo-breadcrumbs .items=${items} size="large"></mjo-breadcrumbs>
            </div>
        `;
    }

    static styles = [
        css`
            :host {
                display: flex;
                flex-direction: column;
                gap: 1.5rem;
            }

            .size-section {
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
            }

            h4 {
                margin: 0;
                font-size: 0.875rem;
                font-weight: 600;
                color: var(--mjo-foreground-color-secondary);
            }
        `,
    ];
}
