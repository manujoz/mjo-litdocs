import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-date-picker";

@customElement("date-picker-disabled")
export class DatePickerDisabled extends LitElement {
    render() {
        return html`<mjo-date-picker disabled label="Disabled" placeholder="Cannot interact"></mjo-date-picker>`;
    }

    static styles = [
        css`
            :host {
                display: block;
            }
        `,
    ];
}
