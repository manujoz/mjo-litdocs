import type { MjoCalendarTheme } from "mjo-litui/types/mjo-theme";

import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-calendar";

@customElement("calendar-theme")
export class CalendarTheme extends LitElement {
    private calendarTheme: MjoCalendarTheme = {
        background: "var(--custom-calendar-background)",
        border: "1px solid var(--custom-calendar-highlight)",
        borderRadius: "16px",
        shadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4)",
        padding: "20px",
        weekDayColor: "var(--custom-calendar-color-low)",
        weekDayFontWeight: "400",
        dayBorderRadius: "8px",
        dayHoverBackground: "var(--custom-calendar-highlight)",
        focusOutline: "var(--custom-calendar-selected-background)",
        todayBackground: "var(--custom-calendar-today-color)",
        todayColor: "var(--custom-calendar-color)",
        selectedBackground: "var(--custom-calendar-selected-background)",
        selectedColor: "var(--custom-calendar-color)",
        selectorButtonHighlightColor: "var(--custom-calendar-highlight)",
        navButtonColor: "var(--custom-calendar-color)",
        navButtonBorder: "none",
        navHoverBackground: "var(--custom-calendar-highlight)",
        navHoverBorder: "none",
        pickerBackground: "var(--custom-calendar-background)",
        pickerRadius: "16px",
        pickerButtonColor: "var(--custom-calendar-color)",
        pickerButtonSelectedBackground: "var(--custom-calendar-selected-background)",
        pickerButtonSelectedColor: "var(--custom-calendar-color)",
        pickerButtonBorder: "none",
        pickerButtonHoverBackground: "var(--custom-calendar-highlight)",
        pickerButtonHoverBorder: "none",
    };

    render() {
        return html` <mjo-calendar mode="single" .theme=${this.calendarTheme}> </mjo-calendar> `;
    }

    static styles = [
        css`
            :host {
                display: block;
                --custom-calendar-color: #ffffff;
                --custom-calendar-color-low: #9ca3af;
                --custom-calendar-background: #1f2937;
                --custom-calendar-highlight: #374151;
                --custom-calendar-today-color: #1e40af;
                --custom-calendar-selected-background: #8b5cf6;
            }
        `,
    ];
}
