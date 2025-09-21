import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-date-picker";

@customElement("date-picker-usage")
export class DatePickerUsage extends LitElement {
    render() {
        return html`<mjo-date-picker label="Select Date" placeholder="Choose a date"></mjo-date-picker>`;
    }

    static styles = [
        css`
            :host {
                display: block;
            }
        `,
    ];
}
