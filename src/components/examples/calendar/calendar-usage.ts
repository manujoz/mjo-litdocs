import { printLog } from "@/lib/logger";
import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-calendar";

@customElement("calendar-usage")
export class CalendarUsage extends LitElement {
    render() {
        return html` <mjo-calendar @mjo-calendar:date-selected=${this.#handleDateSelected}></mjo-calendar> `;
    }

    #handleDateSelected(event: CustomEvent) {
        printLog({
            id: "calendar-usage",
            message: event.detail.value,
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
