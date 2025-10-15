import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-alert";

@customElement("alert-usage")
export class AlertUsage extends LitElement {
    render() {
        return html`
            <mjo-alert type="default" message="This is a default alert"></mjo-alert>
            <mjo-alert type="primary" message="This is a primary alert"></mjo-alert>
            <mjo-alert type="secondary" message="This is a secondary alert"></mjo-alert>
            <mjo-alert type="info" message="This is a info alert"></mjo-alert>
            <mjo-alert type="success" message="This is a success alert"></mjo-alert>
            <mjo-alert type="warning" message="This is a warning alert"></mjo-alert>
            <mjo-alert type="error" message="This is a error alert"></mjo-alert>
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
        "alert-usage": AlertUsage;
    }
}
