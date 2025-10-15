import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import { AiOutlineDownload } from "mjo-icons/ai";

import "mjo-litui/mjo-chip";
import type { MjoChipTheme } from "mjo-litui/types/mjo-theme";

@customElement("chip-themed")
export class ChipThemed extends LitElement {
    theme: MjoChipTheme = {
        gap: "20px",
        borderColor: "var(--mjo-primary-color)",
        backgroundColor: "color-mix(in srgb, var(--mjo-primary-color) 15%, var(--mjo-background-color))",
    };

    render() {
        return html`<mjo-chip label="Theme interface" color="primary" .theme=${this.theme} endIcon=${AiOutlineDownload} clickable variant="dot"></mjo-chip>`;
    }

    static styles = [
        css`
            :host {
                display: flex;
                flex-flow: row wrap;
                padding: var(--mjo-space-large) 0;
                gap: var(--mjo-space-large);
                align-items: center;
            }
        `,
    ];
}
