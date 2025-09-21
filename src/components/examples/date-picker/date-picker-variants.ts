import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("date-picker-variants")
export class DatePickerVariants extends LitElement {
    render() {
        return html`
            <mjo-date-picker variant="default" label="Default" placeholder="Default variant"></mjo-date-picker>
            <mjo-date-picker variant="flat" label="Flat" placeholder="Flat variant"></mjo-date-picker>
            <mjo-date-picker variant="ghost" label="Ghost" placeholder="Ghost variant"></mjo-date-picker>
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
