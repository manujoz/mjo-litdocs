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

@customElement("breadcrumbs-cssvars")
export class BreadcrumbsCssvars extends LitElement {
    render() {
        return html`<mjo-breadcrumbs .items=${items} variant="solid"></mjo-breadcrumbs>`;
    }

    static styles = [
        css`
            :host {
                display: block;
                --mjo-breadcrumbs-border-radius: 30px;
                --mjo-breadcrumbs-padding: 8px 14px;
                --mjo-breadcrumbs-background-color: color-mix(in srgb, var(--mjo-primary-color) 15%, transparent);
            }
        `,
    ];
}

declare global {
    interface HTMLElementTagNameMap {
        "breadcrumbs-cssvars": BreadcrumbsCssvars;
    }
}
