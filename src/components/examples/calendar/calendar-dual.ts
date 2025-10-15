import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-calendar";
import "../../lit/title-example";

@customElement("calendar-dual")
export class CalendarDual extends LitElement {
    render() {
        return html`
            <div>
                <title-example>Force Single Calendar</title-example>
                <mjo-calendar mode="range" rangeCalendars="1" allowCompact></mjo-calendar>
            </div>
            <div>
                <title-example>Force Dual Calendar</title-example>
                <mjo-calendar mode="range" rangeCalendars="2" allowCompact></mjo-calendar>
            </div>
        `;
    }

    static styles = [
        css`
            :host {
                display: flex;
                flex-direction: column;
                gap: 1rem;
                width: 100%;
            }
        `,
    ];
}
