import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-date-picker";

@customElement("date-picker-display-modes")
export class DatePickerDisplayModes extends LitElement {
    render() {
        return html`
            <mjo-date-picker displayMode="numeric" label="Numeric Mode" value="2025-03-15" placeholder="Numeric format"> </mjo-date-picker>
            <mjo-date-picker displayMode="iso" label="ISO Mode" value="2025-03-15" placeholder="ISO format"> </mjo-date-picker>
            <mjo-date-picker displayMode="localized" label="Localized Mode" value="2025-03-15" placeholder="Localized format"> </mjo-date-picker>
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
