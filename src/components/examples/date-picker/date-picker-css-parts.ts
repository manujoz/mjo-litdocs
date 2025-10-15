import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-date-picker";

@customElement("date-picker-css-parts")
export class DatePickerCssParts extends LitElement {
    render() {
        return html`
            <div class="demo">
                <mjo-date-picker label="Styled with CSS Parts" placeholder="CSS parts styling"></mjo-date-picker>
            </div>
        `;
    }

    static styles = [
        css`
            :host {
                display: block;
            }
            .demo {
                max-width: 300px;
            }

            mjo-date-picker::part(textfield-container) {
                border-radius: 20px;
            }

            mjo-date-picker::part(textfield-input) {
                background: linear-gradient(45deg, #f0f9ff, #e0f2fe);
            }

            mjo-date-picker::part(textfield-label-container) {
                color: #0369a1;
                font-weight: bold;
            }
        `,
    ];
}

declare global {
    interface HTMLElementTagNameMap {
        "date-picker-css-parts": DatePickerCssParts;
    }
}
