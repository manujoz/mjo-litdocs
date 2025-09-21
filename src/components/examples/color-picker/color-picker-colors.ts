import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-color-picker";

@customElement("color-picker-colors")
export class ColorPickerColors extends LitElement {
    render() {
        return html`
            <div class="container">
                <mjo-color-picker label="Primary Color" color="primary" value="#3b82f6"></mjo-color-picker>
                <mjo-color-picker label="Secondary Color" color="secondary" value="#8b5cf6"></mjo-color-picker>
            </div>
        `;
    }

    static styles = [
        css`
            :host {
                display: block;
                width: 100%;
            }
            .container {
                display: flex;
                gap: 1rem;
                align-items: end;
            }
        `,
    ];
}
