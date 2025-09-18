import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-calendar";

@customElement("calendar-dual")
export class CalendarDual extends LitElement {
    render() {
        return html`<mjo-calendar mode="range" rangeCalendars="auto"></mjo-calendar>`;
    }

    static styles = [
        css`
            :host {
                display: block;
                width: 100%;
            }
        `,
    ];
}
