import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import { AiOutlineAlert, AiOutlineCheck, AiOutlineInfo, AiOutlineWarning } from "mjo-icons/ai";

import "mjo-litui/mjo-alert";

@customElement("alert-customicon")
export class AlertCustomicon extends LitElement {
    render() {
        return html`
            <mjo-alert type="info" variant="flat" icon=${AiOutlineInfo} message="This is an info alert with custom icon"></mjo-alert>
            <mjo-alert type="success" variant="flat" icon=${AiOutlineCheck} message="This is a success alert with custom icon"></mjo-alert>
            <mjo-alert type="warning" variant="flat" icon=${AiOutlineWarning} message="This is a warning alert with custom icon"></mjo-alert>
            <mjo-alert type="error" variant="flat" icon=${AiOutlineAlert} message="This is an error alert with custom icon"></mjo-alert>
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
        "alert-customicon": AlertCustomicon;
    }
}
