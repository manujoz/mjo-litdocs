import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-badge";

@customElement("badge-usage")
export class BadgeUsage extends LitElement {
    render() {
        return html`
            <div style="display: flex; gap: 2rem; align-items: center;">
                <mjo-badge label="5" show>
                    <button>Messages</button>
                </mjo-badge>

                <mjo-badge label="New" color="success" show>
                    <button>Features</button>
                </mjo-badge>

                <mjo-badge label="!" color="error" show>
                    <button>Alerts</button>
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
        `,
    ];
}
