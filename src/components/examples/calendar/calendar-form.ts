import { LitElement, css, html } from "lit";
import { customElement, state } from "lit/decorators.js";

import "mjo-litui/mjo-button";
import "mjo-litui/mjo-calendar";
import "mjo-litui/mjo-form";

@customElement("calendar-form")
export class CalendarForm extends LitElement {
    @state() private formData: any = null;

    private handleSubmit = (event: CustomEvent) => {
        this.formData = event.detail.data;
        console.log("Form submitted with data:", this.formData);
    };

    render() {
        return html`
            <mjo-form @submit=${this.handleSubmit}>
                <div class="form-grid">
                    <div class="form-field">
                        <label for="eventDate">Event Date (required)</label>
                        <mjo-calendar name="eventDate" mode="single" minDate="2025-01-01" required> </mjo-calendar>
                    </div>

                    <div class="form-field">
                        <label for="vacationPeriod">Vacation Period</label>
                        <mjo-calendar name="vacationPeriod" mode="range" minDate="2025-01-01"> </mjo-calendar>
                    </div>

                    <mjo-button type="submit" variant="solid" color="primary"> Submit Dates </mjo-button>
                </div>
            </mjo-form>

            ${this.formData
                ? html`
                      <div class="form-result">
                          <h4>Form Data:</h4>
                          <pre>${JSON.stringify(this.formData, null, 2)}</pre>
                      </div>
                  `
                : ""}
        `;
    }

    static styles = [
        css`
            :host {
                display: block;
            }
            .form-grid {
                display: flex;
                flex-direction: column;
                gap: 24px;
                max-width: 600px;
            }
            .form-field label {
                display: block;
                margin-bottom: 8px;
                font-weight: 600;
                color: var(--mjo-foreground-color);
            }
            .form-result {
                margin-top: 24px;
                padding: 16px;
                background: var(--mjo-background-color-high);
                border-radius: var(--mjo-radius-medium);
                border: 1px solid var(--mjo-border-color);
            }
            .form-result h4 {
                margin: 0 0 12px 0;
                color: var(--mjo-foreground-color);
            }
            .form-result pre {
                margin: 0;
                padding: 12px;
                background: var(--mjo-background-color);
                border-radius: var(--mjo-radius-small);
                font-size: 0.875rem;
                color: var(--mjo-foreground-color-low);
                overflow-x: auto;
            }
        `,
    ];
}
