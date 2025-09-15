import type { MjoBreadcrumbsItems } from "mjo-litui/types/mjo-breadcrumbs";
import type { MjoThemeConfig } from "mjo-litui/types/mjo-theme";

import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import { AiOutlineBars, AiOutlineFolder, AiOutlineHome } from "mjo-icons/ai";

import "mjo-litui/mjo-breadcrumbs";
import "mjo-litui/mjo-theme";

const breadcrumbsTheme: MjoThemeConfig = {
    components: {
        mjoBreadcrumbs: {
            borderColor: "var(--mjo-primary-color)",
            fontFamily: "'Courier New', Courier, monospace",
            separatorColor: "var(--mjo-secondary-color)",
            borderRadius: "20px",
        },
    },
};

const items: MjoBreadcrumbsItems = [
    { label: "Home", href: "#navigation", icon: AiOutlineHome },
    { label: "Docs", href: "#navigation", icon: AiOutlineFolder },
    { label: "Components", href: "#navigation", icon: AiOutlineBars },
    { label: "Breadcrumbs", active: true },
];

@customElement("breadcrumbs-theme")
export class BreadcrumbsTheme extends LitElement {
    render() {
        return html`
            <mjo-theme .config=${breadcrumbsTheme} scope="local">
                <mjo-breadcrumbs .items=${items} variant="bordered"></mjo-breadcrumbs>
            </mjo-theme>
        `;
    }

    static styles = [
        css`
            :host {
                display: block;
            }
        `,
    ];
}
