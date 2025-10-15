import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("chip-radius")
export class ChipRadius extends LitElement {
    render() {
        return html`
            <mjo-chip label="Without radius" radius="none" color="primary"></mjo-chip>
            <mjo-chip label="Small chip" radius="small" color="primary"></mjo-chip>
            <mjo-chip label="Medium chip" radius="medium" color="primary"></mjo-chip>
            <mjo-chip label="Large chip" radius="large" color="primary"></mjo-chip>
            <mjo-chip label="Full chip" radius="full" color="primary"></mjo-chip>
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

declare global {
    interface HTMLElementTagNameMap {
        "chip-radius": ChipRadius;
    }
}
