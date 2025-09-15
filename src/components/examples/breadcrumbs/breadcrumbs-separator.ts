import type { MjoBreadcrumbsItems } from "mjo-litui/types/mjo-breadcrumbs";

import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import { AiOutlineDoubleRight } from "mjo-icons/ai";

import "mjo-litui/mjo-breadcrumbs";

const items: MjoBreadcrumbsItems = [
    { label: "Home", href: "#" },
    { label: "Docs", href: "#" },
    { label: "Components", href: "#" },
    { label: "Breadcrumbs", href: "#", active: true },
];

@customElement("breadcrumbs-separator")
export class BreadcrumbsSeparator extends LitElement {
    render() {
        return html`<mjo-breadcrumbs .items=${items} separator=${AiOutlineDoubleRight}></mjo-breadcrumbs>`;
    }

    static styles = [
        css`
            :host {
                display: block;
                width: 100%;
            }
        `,
    ];
}
