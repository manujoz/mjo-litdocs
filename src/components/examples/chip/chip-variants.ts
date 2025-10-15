import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-chip";

@customElement("chip-variants")
export class ChipVariants extends LitElement {
    render() {
        return html`
            <mjo-chip label="Solid" color="primary" variant="solid"></mjo-chip>
            <mjo-chip label="Bordered" color="primary" variant="bordered"></mjo-chip>
            <mjo-chip label="Flat" color="primary" variant="flat"></mjo-chip>
            <mjo-chip label="Faded" color="primary" variant="faded"></mjo-chip>
            <mjo-chip label="Light" color="primary" variant="light"></mjo-chip>
            <mjo-chip label="Shadow" color="primary" variant="shadow"></mjo-chip>
            <mjo-chip label="Dot" color="primary" variant="dot"></mjo-chip>
        `;
    }

    static styles = [
        css`
            :host {
                display: flex;
                flex-flow: row wrap;
                padding: var(--mjo-space-large) 0;
                gap: var(--mjo-space-medium);
            }
        `,
    ];
}
