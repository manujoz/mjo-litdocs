import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import { FaDownload } from "mjo-icons/fa6";

import "mjo-litui/mjo-button";

@customElement("button-cssparts")
export class ButtonCssparts extends LitElement {
    render() {
        return html`
            <mjo-button color="primary" startIcon=${FaDownload}>Styled Button</mjo-button>
            <mjo-button color="secondary" loading>Loading Styled</mjo-button>
        `;
    }

    static styles = [
        css`
            :host {
                display: flex;
                flex-wrap: wrap;
                gap: 1rem;
                align-items: center;
            }

            mjo-button::part(button) {
                border: 2px solid #764ba2;
                color: white;
                font-weight: bold;
                text-transform: uppercase;
                letter-spacing: 1px;
                transition: all 0.3s ease;
            }
            mjo-button[loading]::part(button) {
                color: #999999;
            }
            mjo-button:not([loading])::part(button) {
                background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
            }
            mjo-button::part(button):hover {
                transform: translateY(-2px);
                box-shadow: 0 8px 25px rgba(118, 75, 162, 0.3);
            }
            mjo-button::part(loading) {
                background: linear-gradient(90deg, #667eea, #764ba2, #667eea);
            }
            mjo-button::part(start-icon),
            mjo-button::part(end-icon) {
                color: #ffd700;
                filter: drop-shadow(0 0 4px rgba(255, 215, 0, 0.6));
            }
            mjo-button::part(text) {
                text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
            }
        `,
    ];
}
