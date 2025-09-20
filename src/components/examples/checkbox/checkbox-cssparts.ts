import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-checkbox";

@customElement("checkbox-cssparts")
export class CheckboxCssParts extends LitElement {
    render() {
        return html`
            <div style="display: flex; flex-direction: column; gap: 24px;">
                <h4>CSS Parts Styling:</h4>
                <div style="display: flex; flex-direction: column; gap: 16px;">
                    <mjo-checkbox class="styled-container" label="Custom Container Style" checked></mjo-checkbox>

                    <mjo-checkbox class="styled-input" label="Custom Input Style" checked></mjo-checkbox>

                    <mjo-checkbox class="styled-label" label="Custom Label Style" checked></mjo-checkbox>

                    <mjo-checkbox class="styled-helper" label="Custom Helper Text" helper="This has custom helper styling" checked></mjo-checkbox>
                </div>
            </div>
        `;
    }

    static styles = [
        css`
            :host {
                display: block;
            }

            .styled-container::part(container) {
                padding: 12px;
                border: 2px dashed #e5e7eb;
                border-radius: 8px;
                background: #f9fafb;
            }

            .styled-input::part(input) {
                border: 3px solid #3b82f6;
                border-radius: 8px;
                transform: scale(1.2);
            }

            .styled-label::part(label) {
                font-weight: bold;
                color: #1f2937;
                text-transform: uppercase;
                letter-spacing: 0.05em;
            }

            .styled-helper::part(helper) {
                color: #6366f1;
                font-style: italic;
                font-weight: 500;
            }
        `,
    ];
}
