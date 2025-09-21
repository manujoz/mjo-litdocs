import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-date-picker";

@customElement("date-picker-sizes")
export class DatePickerSizes extends LitElement {
    render() {
        return html`
            <mjo-date-picker size="small" label="Small" placeholder="Small size"></mjo-date-picker>
            <mjo-date-picker size="medium" label="Medium" placeholder="Medium size"></mjo-date-picker>
            <mjo-date-picker size="large" label="Large" placeholder="Large size"></mjo-date-picker>
        `;
    }

    static styles = [
        css`
            :host {
                display: flex;
                flex-direction: column;
                gap: var(--mjo-space-large);
            }
        `,
    ];
}
