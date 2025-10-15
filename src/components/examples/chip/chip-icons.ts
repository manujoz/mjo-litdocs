import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import { AiOutlineDownload, AiOutlineSetting, AiOutlineUser } from "mjo-icons/ai";

import "mjo-litui/mjo-chip";

@customElement("chip-icons")
export class ChipIcons extends LitElement {
    render() {
        return html`
            <mjo-chip label="User" color="primary" startIcon=${AiOutlineUser}></mjo-chip>
            <mjo-chip label="Download" color="success" endIcon=${AiOutlineDownload}></mjo-chip>
            <mjo-chip label="Settings" color="warning" startIcon=${AiOutlineSetting}></mjo-chip>
        `;
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
