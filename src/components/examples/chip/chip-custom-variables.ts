import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import { AiOutlineDownload } from "mjo-icons/ai";

import "mjo-litui/mjo-chip";

@customElement("chip-custom-variables")
export class ChipCustomVariables extends LitElement {
    render() {
        return html`<mjo-chip label="CSS Variables" color="secondary" size="large" startIcon=${AiOutlineDownload} clickable variant="bordered"></mjo-chip>`;
    }

    static styles = [
        css`
            :host {
                display: flex;
                flex-flow: row wrap;
                padding: var(--mjo-space-large) 0;
                gap: var(--mjo-space-large);
                align-items: center;
                --mjo-chip-padding: 5px 30px;
                --mjo-chip-border-width-size-large: 5px;
            }
        `,
    ];
}
