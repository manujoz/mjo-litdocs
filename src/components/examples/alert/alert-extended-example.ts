import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import type { MjoAlertClosedEvent } from "mjo-litui/types/mjo-alert";
import "./alert-extended";

@customElement("alert-extended-example")
export class AlertExtendedExample extends LitElement {
    render() {
        return html`
            <alert-extended closable @mjo-alert:closed=${this.#handleAlertClosed}>This is a slotted message</alert-extended>
            <alert-extended type="success" closable @mjo-alert:closed=${this.#handleAlertClosed}>This is a slotted message</alert-extended>
            <alert-extended type="warning" closable @mjo-alert:closed=${this.#handleAlertClosed}>This is a slotted message</alert-extended>
            <alert-extended type="error" closable @mjo-alert:closed=${this.#handleAlertClosed}>This is a slotted message</alert-extended>
        `;
    }

    #handleAlertClosed = (event: MjoAlertClosedEvent) => {
        setTimeout(() => {
            event.detail.element.show();
        }, 2000);
    };

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
        "alert-extended-example": AlertExtendedExample;
    }
}
