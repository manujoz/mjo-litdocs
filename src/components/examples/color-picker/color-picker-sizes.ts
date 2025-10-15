import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-color-picker";

@customElement("color-picker-sizes")
export class ColorPickerSizes extends LitElement {
    render() {
        return html`
            <mjo-color-picker label="Small" size="small" value="#ef4444"></mjo-color-picker>
            <mjo-color-picker label="Medium" size="medium" value="#3b82f6"></mjo-color-picker>
            <mjo-color-picker label="Large" size="large" value="#10b981"></mjo-color-picker>
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
