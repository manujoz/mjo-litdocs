import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-checkbox";

@customElement("checkbox-cssparts")
export class CheckboxCssParts extends LitElement {
    render() {
        return html`
            <mjo-checkbox class="styled-container" label="Custom Container Style" checked></mjo-checkbox>
            <mjo-checkbox class="styled-input" label="Custom Input Style" checked></mjo-checkbox>
            <mjo-checkbox class="styled-label" label="Custom Label Style" checked></mjo-checkbox>
            <mjo-checkbox class="styled-helper" label="Custom Helper Text" helperText="This has custom helper styling" checked></mjo-checkbox>
        `;
    }

    static styles = [
        css`
            :host {
                display: flex;
                flex-direction: column;
                gap: var(--mjo-space-medium);
                align-items: flex-start;
            }

            .styled-container::part(container) {
                padding: 12px;
                border: 2px dashed #e5e7eb;
                border-radius: 8px;
            }
            .styled-input::part(checkbox) {
                width: 2rem;
                height: 2rem;
            }
            .styled-input[checked]::part(checkbox) {
                border-color: #f97316;
            }
            .styled-input::part(checkbox-inner) {
                background: linear-gradient(135deg, #fbbf24, #f97316);
            }
            .styled-input::part(checkbox-icon) {
                color: #ef4444;
            }
            .styled-label::part(label-text) {
                font-weight: bold;
                color: #1f2937;
                text-transform: uppercase;
                letter-spacing: 0.05em;
            }
            .styled-helper::part(helper-text-typography) {
                color: #6366f1;
                font-style: italic;
                font-weight: 500;
            }
        `,
    ];
}
