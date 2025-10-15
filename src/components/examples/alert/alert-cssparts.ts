import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import { AiFillAlipaySquare, AiOutlineCloud } from "mjo-icons/ai";

import "mjo-litui/mjo-alert";

@customElement("alert-cssparts")
export class AlertCssparts extends LitElement {
    render() {
        return html`
            <mjo-alert type="info" variant="flat" icon=${AiFillAlipaySquare} message="This is an info alert with custom css parts"></mjo-alert>
            <mjo-alert type="success" variant="flat" icon=${AiOutlineCloud} message="This is a success alert with custom css parts"></mjo-alert>
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
            mjo-alert::part(container) {
                border-radius: 50px;
            }
            mjo-alert::part(icon) {
                color: white;
            }
            mjo-alert::part(message) {
                color: white;
                font-weight: normal;
            }
            mjo-alert[type="info"]::part(container) {
                border-left: 4px solid var(--mjo-color-info);
                background-color: color-mix(in srgb, var(--mjo-color-info) 30%, transparent);
            }
            mjo-alert[type="info"]::part(icon-container) {
                background-color: var(--mjo-color-info);
            }
            mjo-alert[type="success"]::part(container) {
                border-left: 4px solid var(--mjo-color-success);
                background-color: color-mix(in srgb, var(--mjo-color-success) 30%, transparent);
            }
            mjo-alert[type="success"]::part(icon-container) {
                background-color: var(--mjo-color-success);
            }
        `,
    ];
}

declare global {
    interface HTMLElementTagNameMap {
        "alert-cssparts": AlertCssparts;
    }
}
