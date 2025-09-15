import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-badge";

@customElement("badge-colors")
export class BadgeColors extends LitElement {
    render() {
        return html`
            <div style="display: flex; gap: 2rem; align-items: center; flex-wrap: wrap;">
                <mjo-badge label="3" color="primary" show>
                    <button>Primary</button>
                </mjo-badge>

                <mjo-badge label="7" color="secondary" show>
                    <button>Secondary</button>
                </mjo-badge>

                <mjo-badge label="5" color="success" show>
                    <button>Success</button>
                </mjo-badge>

                <mjo-badge label="2" color="warning" show>
                    <button>Warning</button>
                </mjo-badge>

                <mjo-badge label="!" color="error" show>
                    <button>Error</button>
                </mjo-badge>

                <mjo-badge label="8" color="info" show>
                    <button>Info</button>
                </mjo-badge>

                <mjo-badge label="1" color="default" show>
                    <button>Default</button>
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
