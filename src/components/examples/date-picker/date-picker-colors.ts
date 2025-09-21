import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-date-picker";

@customElement("date-picker-colors")
export class DatePickerColors extends LitElement {
    render() {
        return html`
            <mjo-date-picker color="primary" label="Primary" placeholder="Primary color"></mjo-date-picker>
            <mjo-date-picker color="secondary" label="Secondary" placeholder="Secondary color"></mjo-date-picker>
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
