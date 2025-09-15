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

@customElement("breadcrumbs-colors")
export class BreadcrumbsColors extends LitElement {
    render() {
        return html`
            <div class="color-section">
                <h4>Primary</h4>
                <mjo-breadcrumbs .items=${items} color="primary"></mjo-breadcrumbs>
            </div>
            <div class="color-section">
                <h4>Secondary</h4>
                <mjo-breadcrumbs .items=${items} color="secondary"></mjo-breadcrumbs>
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

            .color-section {
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
