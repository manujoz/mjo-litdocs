import type { MjoBreadcrumbsItems } from "mjo-litui/types/mjo-breadcrumbs";

import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import { AiFillAlert, AiOutlineFolder, AiOutlineHome, AiOutlineUser } from "mjo-icons/ai";

import "mjo-litui/mjo-breadcrumbs";

const items: MjoBreadcrumbsItems = [
    { label: "Home", href: "#", icon: AiOutlineHome },
    { label: "Docs", href: "#", icon: AiOutlineFolder },
    { label: "Components", href: "#", icon: AiOutlineUser },
    { label: "Breadcrumbs", href: "#", active: true, icon: AiFillAlert },
];

@customElement("breadcrumbs-icons")
export class BreadcrumbsIcons extends LitElement {
    render() {
        return html` <mjo-breadcrumbs .items=${items}></mjo-breadcrumbs> `;
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
