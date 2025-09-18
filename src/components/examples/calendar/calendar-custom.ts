import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-calendar";

@customElement("calendar-custom")
export class CalendarCustom extends LitElement {
    render() {
        return html` <mjo-calendar mode="single"></mjo-calendar> `;
    }

    static styles = [
        css`
            :host {
                display: block;
                --mjo-calendar-background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                --mjo-calendar-border-radius: 16px;
                --mjo-calendar-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
                --mjo-calendar-week-day-color: #ffffff;
                --mjo-calendar-week-day-font-weight: 600;
                --mjo-calendar-day-color: #ffffff;
                --mjo-calendar-day-hover-background: rgba(255, 255, 255, 0.1);
                --mjo-calendar-selected-background: #ffba08;
                --mjo-calendar-selected-color: #000000;
                --mjo-calendar-today-background: rgba(255, 255, 255, 0.2);
                --mjo-calendar-today-color: #ffffff;
                --mjo-calendar-navigation-color: #ffffff;
                --mjo-calendar-navigation-hover-background: rgba(255, 255, 255, 0.1);
            }
        `,
    ];
}
