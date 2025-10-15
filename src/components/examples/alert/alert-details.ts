import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-alert";

@customElement("alert-details")
export class AlertDetails extends LitElement {
    render() {
        return html`
            <mjo-alert type="info" message="This is an info alert" details="Additional information details string"></mjo-alert>
            <mjo-alert
                type="info"
                message="This is an info alert"
                .details=${html`
                    Additional information with HTML template or other component:
                    <ul>
                        <li>Detail 1</li>
                        <li>Detail 2</li>
                        <li>Detail 3</li>
                    </ul>
                `}
            ></mjo-alert>
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
        "alert-details": AlertDetails;
    }
}
