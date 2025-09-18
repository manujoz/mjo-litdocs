import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-calendar";

@customElement("calendar-constraints")
export class CalendarConstraints extends LitElement {
    private disabledDates = ["2025-02-14", "2025-07-04", "2025-12-25"];

    render() {
        return html`
            <div class="constraints-info">
                <p>This calendar has constraints:</p>
                <ul>
                    <li>Min date: January 1, 2025</li>
                    <li>Max date: December 31, 2025</li>
                    <li>Disabled dates: Valentine's Day, Independence Day, Christmas</li>
                </ul>
            </div>
            <mjo-calendar mode="single" minDate="2025-01-01" maxDate="2025-12-31" .disabledDates=${this.disabledDates}> </mjo-calendar>
        `;
    }

    static styles = [
        css`
            :host {
                display: block;
            }
            .constraints-info {
                margin-bottom: 16px;
                padding: 16px;
                background: var(--mjo-background-color-high);
                border-radius: var(--mjo-radius-medium);
                border-left: 4px solid var(--mjo-primary-color);
            }
            .constraints-info p {
                margin: 0 0 8px 0;
                font-weight: 600;
                color: var(--mjo-foreground-color);
            }
            .constraints-info ul {
                margin: 0;
                padding-left: 20px;
                color: var(--mjo-foreground-color-low);
            }
            .constraints-info li {
                margin: 4px 0;
            }
        `,
    ];
}
