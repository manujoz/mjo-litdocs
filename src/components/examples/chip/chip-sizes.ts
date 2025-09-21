import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-chip";

@customElement("chip-sizes")
export class ChipSizes extends LitElement {
    render() {
        return html`
            <mjo-chip label="Small chip" size="small" color="primary"></mjo-chip>
            <mjo-chip label="Medium chip" size="medium" color="primary"></mjo-chip>
            <mjo-chip label="Large chip" size="large" color="primary"></mjo-chip>
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
