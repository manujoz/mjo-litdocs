import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-badge";

@customElement("badge-sizes")
export class BadgeSizes extends LitElement {
    render() {
        return html`
            <div style="display: flex; gap: 2rem; align-items: center;">
                <mjo-badge label="S" size="small" show>
                    <button>Small</button>
                </mjo-badge>

                <mjo-badge label="M" size="medium" show>
                    <button>Medium</button>
                </mjo-badge>

                <mjo-badge label="L" size="large" show>
                    <button>Large</button>
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
