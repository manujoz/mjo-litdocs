import type { MjoButtonToggleEvent } from "mjo-litui/types/mjo-button";

import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-button";

@customElement("button-toggle")
export class ButtonToggle extends LitElement {
    render() {
        return html`
            <mjo-button color="primary" toggleable button-label="Toggle notifications" @mjo-button:toggle=${this.#handleToggle}>Notifications</mjo-button>
        `;
    }

    #handleToggle(e: MjoButtonToggleEvent) {
        console.log("Toggle state:", e.detail.pressed);
    }

    static styles = [
        css`
            :host {
                display: flex;
                flex-wrap: wrap;
                gap: 1rem;
                align-items: center;
            }
        `,
    ];
}
