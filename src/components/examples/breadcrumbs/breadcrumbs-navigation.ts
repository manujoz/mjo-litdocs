import type { MjoBreadcrumbsItems, MjoBreadcrumbsNavigateEvent } from "mjo-litui/types/mjo-breadcrumbs";

import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import { printLog } from "@/lib/logger";

import "mjo-litui/mjo-breadcrumbs";

const items: MjoBreadcrumbsItems = [
    { label: "Home", href: "#navigation" },
    { label: "Docs", href: "#navigation" },
    { label: "Components", href: "#navigation" },
    { label: "Breadcrumbs", active: true },
];

@customElement("breadcrumbs-navigation")
export class BreadcrumbsNavigation extends LitElement {
    render() {
        return html` <mjo-breadcrumbs .items=${items} @mjo-breadcrumbs:navigate=${this.#handleNavigate} preventDefault></mjo-breadcrumbs> `;
    }

    #handleNavigate(event: MjoBreadcrumbsNavigateEvent) {
        console.log(event);
        printLog({
            id: "breadcrumbs-navigation-logger",
            message: `Navigated to: ${event.detail.item.label} (index: ${event.detail.index})`,
            event,
        });
    }

    static styles = [
        css`
            :host {
                display: block;
            }
        `,
    ];
}
