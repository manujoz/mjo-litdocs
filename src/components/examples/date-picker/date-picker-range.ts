import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-date-picker";

@customElement("date-picker-range")
export class DatePickerRange extends LitElement {
    render() {
        return html`<mjo-date-picker isRange label="Select Date Range" placeholder="Choose start and end dates"></mjo-date-picker> `;
    }

    static styles = [
        css`
            :host {
                display: block;
            }
        `,
    ];
}
