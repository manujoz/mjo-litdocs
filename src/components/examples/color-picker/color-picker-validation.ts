import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-color-picker";

@customElement("color-picker-validation")
export class ColorPickerValidation extends LitElement {
    render() {
        return html`
            <mjo-color-picker label="Disabled Color Picker" disabled value="#94a3b8"> </mjo-color-picker>
            <mjo-color-picker label="Error State" error errormsg="Invalid color selection" value="#dc2626"> </mjo-color-picker>
            <mjo-color-picker label="Success State" success successmsg="Color saved successfully" value="#16a34a"> </mjo-color-picker>
        `;
    }

    static styles = [
        css`
            :host {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 1rem;
            }
        `,
    ];
}
