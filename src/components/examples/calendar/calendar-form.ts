import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import type { MjoFormSubmitEvent } from "mjo-litui/types/mjo-form";

import { printLog } from "@/lib/logger";

import "mjo-litui/mjo-button";
import "mjo-litui/mjo-calendar";
import "mjo-litui/mjo-form";

@customElement("calendar-form")
export class CalendarForm extends LitElement {
    render() {
        return html`
            <mjo-form @submit=${this.#handleSubmit}>
                <mjo-calendar name="eventDate" mode="single" minDate="2025-01-01"></mjo-calendar>
                <mjo-button type="submit" fullwidth>Submit Date</mjo-button>
            </mjo-form>
        `;
    }

    #handleSubmit = (event: MjoFormSubmitEvent) => {
        const eventDate = event.detail.response.data.eventDate;
        printLog({
            id: "calendar-form",
            message: `Event Date: ${eventDate || "not selected"}`,
            event,
        });

        setTimeout(() => {
            const button = event.detail.response.submitButton;
            if (button) {
                button.loading = false;
            }
        }, 1000);
    };

    static styles = [
        css`
            :host {
                display: block;
            }
            mjo-form {
                max-width: min-content;
            }
            label {
                display: block;
                margin-bottom: var(--mjo-space-small);
                font-weight: 600;
                color: var(--mjo-foreground-color);
            }
            mjo-button {
                margin-top: var(--mjo-space-medium);
            }
        `,
    ];
}
