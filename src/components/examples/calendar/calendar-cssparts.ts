import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-calendar";

@customElement("calendar-cssparts")
export class CalendarCssparts extends LitElement {
    render() {
        return html` <mjo-calendar mode="single"></mjo-calendar> `;
    }

    static styles = [
        css`
            :host {
                display: block;
            }

            mjo-calendar::part(calendar) {
                background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%);
                border-radius: 20px;
                box-shadow: 0 15px 35px rgba(255, 154, 158, 0.2);
                padding: 24px;
            }

            mjo-calendar::part(header) {
                margin-bottom: 16px;
            }

            mjo-calendar::part(navigation-button) {
                background: rgba(255, 255, 255, 0.2);
                color: #6b46c1;
                border-radius: 12px;
                font-weight: 600;
                transition: all 0.2s ease;
            }

            mjo-calendar::part(navigation-button):hover {
                background: rgba(255, 255, 255, 0.3);
                transform: translateY(-1px);
            }

            mjo-calendar::part(week-day) {
                color: #6b46c1;
                font-weight: 700;
                font-size: 0.75rem;
                text-transform: uppercase;
                letter-spacing: 0.5px;
            }

            mjo-calendar::part(day) {
                color: #4c1d95;
                font-weight: 500;
                border-radius: 10px;
                transition: all 0.2s ease;
            }

            mjo-calendar::part(day):hover {
                background: rgba(255, 255, 255, 0.4);
                transform: scale(1.05);
            }

            mjo-calendar::part(day-today) {
                background: #8b5cf6;
                color: white;
                font-weight: 700;
            }

            mjo-calendar::part(day-selected) {
                background: #6b46c1;
                color: white;
                font-weight: 700;
                box-shadow: 0 4px 12px rgba(107, 70, 193, 0.3);
            }

            mjo-calendar::part(day-disabled) {
                color: #d1d5db;
                background: transparent;
            }
        `,
    ];
}
