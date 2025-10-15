import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-chip";

@customElement("chip-usage")
export class ChipUsage extends LitElement {
    render() {
        return html`
            <mjo-chip label="Default Chip"></mjo-chip>
            <mjo-chip label="Primary" color="primary"></mjo-chip>
            <mjo-chip label="Secondary" color="secondary"></mjo-chip>
            <mjo-chip label="Success" color="success"></mjo-chip>
            <mjo-chip label="Warning" color="warning"></mjo-chip>
            <mjo-chip label="Info" color="info"></mjo-chip>
            <mjo-chip label="Error" color="error"></mjo-chip>
        `;
    }

    static styles = [
        css`
            :host {
                display: flex;
                padding: var(--mjo-space-large) 0;
                gap: var(--mjo-space-medium);
                flex-flow: row wrap;
                flex-wrap: wrap;
            }
        `,
    ];
}
