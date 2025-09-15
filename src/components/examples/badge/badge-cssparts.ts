import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-badge";

@customElement("badge-cssparts")
export class BadgeCssparts extends LitElement {
    render() {
        return html`
            <div style="display: flex; gap: 2rem; align-items: center;">
                <mjo-badge label="Custom" show class="custom-badge">
                    <button>Custom Styled</button>
                </mjo-badge>

                <mjo-badge label="Themed" color="success" show class="themed-badge">
                    <button>Themed Badge</button>
                </mjo-badge>
            </div>
        `;
    }

    static styles = [
        css`
            button {
                padding: 0.5rem 1rem;
                border: 1px solid #ccc;
                border-radius: 0.25rem;
                background: white;
                cursor: pointer;
                font-size: 0.875rem;
            }

            button:hover {
                background: #f5f5f5;
            }

            .custom-badge::part(container) {
                background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
                color: white;
                border: 2px solid #fff;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
                transform: scale(1.1);
            }

            .themed-badge::part(label) {
                font-weight: bold;
                text-transform: uppercase;
                letter-spacing: 0.5px;
            }

            .themed-badge::part(container) {
                animation: pulse 2s infinite;
            }

            @keyframes pulse {
                0%,
                100% {
                    transform: scale(1);
                }
                50% {
                    transform: scale(1.05);
                }
            }
        `,
    ];
}
