import type { MjoAlertClosedEvent } from "mjo-litui/types/mjo-alert";

import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-alert";

@customElement("alert-closable")
export class AlertClosable extends LitElement {
    render() {
        return html`<mjo-alert type="info" message="This is an info alert" variant="flat" closable @mjo-alert:closed=${this.#handleClosed}></mjo-alert>`;
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
            }
        `,
    ];
}

declare global {
    interface HTMLElementTagNameMap {
        "alert-closable": AlertClosable;
    }
}
