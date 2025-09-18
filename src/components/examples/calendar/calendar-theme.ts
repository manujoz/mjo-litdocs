import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-calendar";

@customElement("calendar-theme")
export class CalendarTheme extends LitElement {
    private calendarTheme: Record<string, string> = {
        background: "#1f2937",
        border: "1px solid #374151",
        borderRadius: "16px",
        shadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4)",
        padding: "20px",
        weekDayColor: "#9ca3af",
        weekDayFontWeight: "500",
        dayBorderRadius: "8px",
        dayHoverBackground: "#374151",
        focusOutline: "#60a5fa",
        todayBackground: "#1e40af",
        todayColor: "#ffffff",
        selectedBackground: "#8b5cf6",
        selectedColor: "#ffffff",
        navigationColor: "#f3f4f6",
        navigationHoverBackground: "#374151",
    };

    render() {
        return html` <mjo-calendar mode="single" .theme=${this.calendarTheme}> </mjo-calendar> `;
    }

    static styles = [
        css`
            :host {
                display: block;
            }
        `,
    ];
}
