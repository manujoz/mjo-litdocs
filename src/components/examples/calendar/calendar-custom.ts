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
                --mjo-calendar-foreground-color: #ffffff;
                --mjo-calendar-foreground-color-low: #d4e6cf;
                --mjo-calendar-background: linear-gradient(135deg, #41db7c 0%, #07835a 100%);
                --mjo-calendar-border-radius: 16px;
                --mjo-calendar-shadow: 0 10px 20px rgba(20, 20, 20, 0.8);
                --mjo-calendar-week-day-color: var(--mjo-calendar-foreground-color-low);
                --mjo-calendar-week-day-font-weight: 600;
                --mjo-calendar-day-color: var(--mjo-calendar-foreground-color);
                --mjo-calendar-day-hover-background: rgba(255, 255, 255, 0.2);
                --mjo-calendar-today-background: var(--mjo-calendar-day-hover-background);
                --mjo-calendar-today-color: var(--mjo-calendar-foreground-color);
                --mjo-calendar-selected-background: #ffba08;
                --mjo-calendar-selected-color: #000000;
                --mjo-calendar-nav-button-color: var(--mjo-calendar-foreground-color);
                --mjo-calendar-nav-button-border: none;
                --mjo-calendar-nav-border: var(--mjo-calendar-nav-button-border);
                --mjo-calendar-nav-hover-background: var(--mjo-calendar-day-hover-background);
                --mjo-calendar-nav-hover-border: var(--mjo-calendar-nav-button-border);
                --mjo-calendar-selector-button-highlight-color: var(--mjo-calendar-day-hover-background);
                --mjo-calendar-picker-background: var(--mjo-calendar-background);
                --mjo-calendar-picker-radius: var(--mjo-calendar-border-radius);
                --mjo-calendar-picker-button-color: var(--mjo-calendar-nav-button-color);
                --mjo-calendar-picker-button-selected-background: var(--mjo-calendar-selected-background);
                --mjo-calendar-picker-button-selected-color: var(--mjo-calendar-selected-color);
                --mjo-calendar-picker-button-border: var(--mjo-calendar-nav-button-border);
                --mjo-calendar-picker-button-hover-background: var(--mjo-calendar-day-hover-background);
                --mjo-calendar-picker-button-hover-border: var(--mjo-calendar-nav-button-border);
            }
        `,
    ];
}
