import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-date-picker";

@customElement("date-picker-css-vars")
export class DatePickerCssVars extends LitElement {
    render() {
        return html`
            <div class="demo">
                <mjo-date-picker label="Custom Styled" placeholder="Custom CSS variables"></mjo-date-picker>
            </div>
        `;
    }

    static styles = [
        css`
            :host {
                display: block;
                --mjo-textfield-border-color: #f59e0b;
                --mjo-textfield-border-color-focus: #d97706;
                --mjo-textfield-label-color: #92400e;
            }
            .demo {
                max-width: 300px;
            }
        `,
    ];
}

declare global {
    interface HTMLElementTagNameMap {
        "date-picker-css-vars": DatePickerCssVars;
    }
}
