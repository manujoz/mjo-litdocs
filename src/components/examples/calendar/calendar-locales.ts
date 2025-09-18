import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-calendar";

@customElement("calendar-locales")
export class CalendarLocales extends LitElement {
    render() {
        return html`
            <div class="calendar-grid">
                <div class="calendar-item">
                    <h4>English (US)</h4>
                    <mjo-calendar locale="en" mode="single" firstDayOfWeek="sunday"></mjo-calendar>
                </div>
                <div class="calendar-item">
                    <h4>Español</h4>
                    <mjo-calendar locale="es" mode="single" firstDayOfWeek="monday"></mjo-calendar>
                </div>
                <div class="calendar-item">
                    <h4>Français</h4>
                    <mjo-calendar locale="fr" mode="single" firstDayOfWeek="monday"></mjo-calendar>
                </div>
                <div class="calendar-item">
                    <h4>日本語</h4>
                    <mjo-calendar locale="ja" mode="single" firstDayOfWeek="sunday"></mjo-calendar>
                </div>
            </div>
        `;
    }

    static styles = [
        css`
            :host {
                display: block;
            }
            .calendar-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                gap: 24px;
            }
            .calendar-item h4 {
                margin: 0 0 12px 0;
                color: var(--mjo-foreground-color);
                font-size: 1rem;
                font-weight: 600;
            }
        `,
    ];
}
