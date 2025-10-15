import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-date-picker";

@customElement("date-picker-localization")
export class DatePickerLocalization extends LitElement {
    render() {
        return html`
            <mjo-date-picker locale="en" label="English (US)" placeholder="Select date" value="2025-03-15"> </mjo-date-picker>
            <mjo-date-picker locale="es" label="Spanish" placeholder="Seleccionar fecha" value="2025-03-15"> </mjo-date-picker>
            <mjo-date-picker locale="fr" label="French" placeholder="Sélectionner une date" value="2025-03-15"> </mjo-date-picker>
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
