import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-date-picker";

const year = new Date().getFullYear();
const month = (new Date().getMonth() + 1).toString().padStart(2, "0");

@customElement("date-picker-constraints")
export class DatePickerConstraints extends LitElement {
    render() {
        return html`
            <mjo-date-picker label="Limited Range" minDate=${`${year}-01-01`} maxDate=${`${year}-12-31`} placeholder=${`Only ${year} dates`}> </mjo-date-picker>
            <mjo-date-picker
                label="Dates Disabled"
                placeholder=${`Disabled 10, 11, 12 of this month`}
                .disabledDates=${[`${year}-${month}-10`, `${year}-${month}-11`, `${year}-${month}-12`]}
            >
            </mjo-date-picker>
        `;
    }

    static styles = [
        css`
            :host {
                display: flex;
                flex-direction: column;
                gap: var(--mjo-space-large);
            }
        `,
    ];
}
