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

@customElement("breadcrumbs-sizes")
export class BreadcrumbsSizes extends LitElement {
    render() {
        return html`
            <div>
                <title-example>Small</title-example>
                <mjo-breadcrumbs .items=${items} size="small"></mjo-breadcrumbs>
            </div>
            <div>
                <title-example>Medium</title-example>
                <mjo-breadcrumbs .items=${items} size="medium"></mjo-breadcrumbs>
            </div>
            <div>
                <title-example>Large</title-example>
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
            div {
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
            }
        `,
    ];
}
