import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import type { MjoFormSubmitEvent } from "mjo-litui/types/mjo-form";

import { printLog } from "@/lib/logger";

import "mjo-litui/mjo-button";
import "mjo-litui/mjo-date-picker";
import "mjo-litui/mjo-form";

@customElement("date-picker-form-integration")
export class DatePickerFormIntegration extends LitElement {
    render() {
        return html`
            <mjo-form @submit=${this.#handleSubmit}>
                <div class="container">
                    <mjo-date-picker name="eventDate" label="Event Date" placeholder="Select event date" required fullwidth></mjo-date-picker>
                    <mjo-date-picker name="eventPeriod" label="Event Period" placeholder="Select event period" isRange required fullwidth></mjo-date-picker>
                    <mjo-button type="submit" color="primary" class="submit-btn" fullwidth>Submit Form</mjo-button>
                </div>
            </mjo-form>
        `;
    }

    #handleSubmit = (event: MjoFormSubmitEvent) => {
        const button = event.detail.response.submitButton;

        if (button) button.loading = false;

        printLog({
            id: "form-submit",
            message: JSON.stringify(event.detail.response.data),
            event,
        });
    };

    static styles = [
        css`
            :host {
                display: block;
            }
            .container {
                display: flex;
                flex-direction: column;
                max-width: 300px;
                gap: var(--mjo-space-medium);
            }
        `,
    ];
}
