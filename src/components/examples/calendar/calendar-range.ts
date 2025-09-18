import { printLog } from "@/lib/logger";
import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-calendar";

@customElement("calendar-range")
export class CalendarRange extends LitElement {
    render() {
        return html`<div><mjo-calendar mode="range" @mjo-calendar:range-selected=${this.#handleDateSelected}></mjo-calendar></div>`;
    }

    #handleDateSelected(event: CustomEvent) {
        printLog({
            id: "calendar-range",
            message: event.detail.startDateValue + " to " + event.detail.endDateValue,
            event,
        });
    }

    static styles = [
        css`
            :host {
                display: block;
            }
        `,
    ];
}
