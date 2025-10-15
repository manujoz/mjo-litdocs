import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-date-picker";

@customElement("date-picker-validation")
export class DatePickerValidation extends LitElement {
    render() {
        return html`
            <div class="demo">
                <mjo-date-picker required label="Required Date" placeholder="This field is required"></mjo-date-picker>
                <mjo-date-picker dateprevious label="Past Date Only" placeholder="Select a past date"></mjo-date-picker>
                <mjo-date-picker minage="18" label="Minimum Age 18" placeholder="Must be 18+"></mjo-date-picker>
            </div>
        `;
    }

    static styles = [
        css`
            :host {
                display: block;
            }
            .demo {
                display: flex;
                flex-direction: column;
                gap: 1rem;
                max-width: 300px;
            }
        `,
    ];
}

declare global {
    interface HTMLElementTagNameMap {
        "date-picker-validation": DatePickerValidation;
    }
}
