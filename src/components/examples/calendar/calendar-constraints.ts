import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-calendar";

@customElement("calendar-constraints")
export class CalendarConstraints extends LitElement {
    #year = new Date().getFullYear();
    #disabledDates = [`${this.#year}-02-14`, `${this.#year}-07-04`, `${this.#year}-12-25`];

    render() {
        return html`
            <mjo-calendar allowCompact minDate="${this.#year}-01-01" maxDate="${this.#year}-12-31" .disabledDates=${this.#disabledDates}> </mjo-calendar>
        `;
    }

    static styles = [
        css`
            :host {
                display: block;
            }
        `,
    ];
}
