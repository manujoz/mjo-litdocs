import type { MjoBreadcrumbsItems } from "mjo-litui/types/mjo-breadcrumbs";

import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-breadcrumbs";
import "../../lit/title-example";

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
            <div>
                <title-example>Primary</title-example>
                <mjo-breadcrumbs .items=${items} color="primary"></mjo-breadcrumbs>
            </div>
            <div>
                <title-example>Secondary</title-example>
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
            div {
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
            }
        `,
    ];
}
