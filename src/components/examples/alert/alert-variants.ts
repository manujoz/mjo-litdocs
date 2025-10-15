import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-alert";

@customElement("alert-variants")
export class AlertVariants extends LitElement {
    render() {
        return html`
            <mjo-alert type="success" variant="solid" message="This is solid variant"></mjo-alert>
            <mjo-alert type="success" variant="flat" message="This is flat variant"></mjo-alert>
        `;
    }

    static styles = [
        css`
            :host {
                display: block;
                display: flex;
                flex-direction: column;
                gap: 1rem;
            }
        `,
    ];
}

declare global {
    interface HTMLElementTagNameMap {
        "alert-variants": AlertVariants;
    }
}
