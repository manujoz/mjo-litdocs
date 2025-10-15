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

@customElement("breadcrumbs-variants")
export class BreadcrumbsVariants extends LitElement {
    render() {
        return html`
            <div class="variant-section">
                <h4>Default</h4>
                <mjo-breadcrumbs .items=${items} variant="default"></mjo-breadcrumbs>
            </div>
            <div class="variant-section">
                <h4>Solid</h4>
                <mjo-breadcrumbs .items=${items} variant="solid"></mjo-breadcrumbs>
            </div>
            <div class="variant-section">
                <h4>Bordered</h4>
                <mjo-breadcrumbs .items=${items} variant="bordered"></mjo-breadcrumbs>
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

            .variant-section {
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
