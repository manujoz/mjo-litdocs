import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-calendar";

@customElement("calendar-cssparts")
export class CalendarCssparts extends LitElement {
    render() {
        return html`<mjo-calendar></mjo-calendar>`;
    }

    static styles = [
        css`
            :host {
                display: block;
                --custom-lighthight-color: rgba(255, 255, 255, 0.3);
                --custom-accent-color: #6b46c1;
                --custom-accent-foreground-color: white;
            }
            mjo-calendar::part(calendar),
            mjo-calendar::part(year-picker-container) {
                background: linear-gradient(135deg, #fab1db 0%, #cfd8fe 50%, #fecfef 100%);
                border-radius: 20px;
                box-shadow: 0 15px 35px rgba(255, 154, 158, 0.2);
                padding: 24px;
            }
            mjo-calendar::part(month-picker-container),
            mjo-calendar::part(year-picker-container) {
                border-radius: 20px;
                background: linear-gradient(135deg, #fab1db 0%, #cfd8fe 50%, #fecfef 100%);
            }
            mjo-calendar::part(month-picker-button),
            mjo-calendar::part(year-picker-button),
            mjo-calendar::part(year-picker-nav-button) {
                font-size: 0.75rem;
                color: var(--custom-accent-color);
                border: none;
            }
            mjo-calendar::part(header) {
                margin-bottom: 0px;
            }
            mjo-calendar::part(nav-button),
            mjo-calendar::part(selector-button) {
                color: var(--custom-accent-color);
                border-radius: 12px;
                font-weight: 600;
                border: none;
                transition: all 0.2s ease;
            }
            mjo-calendar::part(nav-button):hover,
            mjo-calendar::part(selector-button):hover,
            mjo-calendar::part(month-picker-button):hover,
            mjo-calendar::part(year-picker-button):hover,
            mjo-calendar::part(year-picker-nav-button):hover {
                background: var(--custom-lighthight-color);
            }
            mjo-calendar::part(week-day) {
                color: color-mix(in srgb, var(--custom-accent-color) 70%, transparent);
                font-weight: 600;
                font-size: 0.75rem;
                text-transform: uppercase;
                letter-spacing: 0.5px;
            }
            mjo-calendar::part(day) {
                color: var(--custom-accent-color);
                font-weight: 500;
                border-radius: 10px;
                transition: all 0.15s ease;
            }
            mjo-calendar::part(day):hover {
                background: var(--custom-lighthight-color);
                transform: scale(1.07);
            }
            mjo-calendar::part(day-today) {
                border: 1px solid #d090d8;
                font-weight: 700;
            }
            mjo-calendar::part(day-selected),
            mjo-calendar::part(month-picker-button-selected),
            mjo-calendar::part(year-picker-button-selected) {
                background: var(--custom-accent-color);
                color: var(--custom-accent-foreground-color);
                font-weight: 700;
                box-shadow: 0 4px 12px var(--custom-lighthight-color);
            }
            mjo-calendar::part(day-today):hover,
            mjo-calendar::part(day-selected):hover,
            mjo-calendar::part(month-picker-button-selected):hover,
            mjo-calendar::part(year-picker-button-selected):hover {
                background: var(--custom-accent-color);
                color: var(--custom-accent-foreground-color);
            }
            mjo-calendar::part(year-picker-decade-label) {
                color: var(--custom-accent-color);
                font-weight: 600;
                font-size: 0.875rem;
            }
        `,
    ];
}
