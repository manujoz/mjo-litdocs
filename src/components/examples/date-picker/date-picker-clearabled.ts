import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-date-picker";

const year = new Date().getFullYear();
const month = (new Date().getMonth() + 1).toString().padStart(2, "0");

@customElement("date-picker-clearabled")
export class DatePickerClearabled extends LitElement {
    render() {
        return html`<mjo-date-picker clearabled label="With Clear Button" value=${`${year}-${month}-15`} placeholder="Has clear button"> </mjo-date-picker>`;
    }

    static styles = [
        css`
            :host {
                display: block;
            }
        `,
    ];
}
