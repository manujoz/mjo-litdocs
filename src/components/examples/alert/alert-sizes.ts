import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-alert";

@customElement("alert-sizes")
export class AlertSizes extends LitElement {
    render() {
        return html`
            <mjo-alert type="warning" size="small" message="This is a small size warning alert"></mjo-alert>
            <mjo-alert type="warning" size="medium" message="This is a medium size warning alert"></mjo-alert>
            <mjo-alert type="warning" size="large" message="This is a large size warning alert"></mjo-alert>
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
        "alert-sizes": AlertSizes;
    }
}
