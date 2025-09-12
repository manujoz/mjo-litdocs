import type { MjoAlertClosedEvent } from "mjo-litui/types/mjo-alert";

import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-alert";

@customElement("alert-effects")
export class AlertEffects extends LitElement {
    render() {
        return html`
            <mjo-alert
                type="info"
                message="This is an info alert without animation"
                variant="flat"
                animation="none"
                closable
                @mjo-alert:closed=${this.#handleClosed}
            ></mjo-alert>
            <mjo-alert
                type="warning"
                message="This is a warning alert with fade animation"
                variant="flat"
                animation="fade"
                closable
                @mjo-alert:closed=${this.#handleClosed}
            ></mjo-alert>
            <mjo-alert
                type="success"
                message="This is a success alert with scale animation"
                variant="flat"
                animation="scale"
                closable
                @mjo-alert:closed=${this.#handleClosed}
            ></mjo-alert>
            <mjo-alert
                type="error"
                message="This is an error alert with slide animation"
                variant="flat"
                animation="slide"
                closable
                @mjo-alert:closed=${this.#handleClosed}
            ></mjo-alert>
        `;
    }

    #handleClosed(event: MjoAlertClosedEvent) {
        setTimeout(() => {
            event.detail.element.show();
        }, 2000);
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
        "alert-effects": AlertEffects;
    }
}
