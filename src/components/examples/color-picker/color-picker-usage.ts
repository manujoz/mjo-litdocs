import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-color-picker";

@customElement("color-picker-usage")
export class ColorPickerUsage extends LitElement {
    render() {
        return html`<mjo-color-picker label="Choose Color" name="color" value="#3b82f6"></mjo-color-picker>`;
    }

    static styles = [
        css`
            :host {
                display: block;
            }
        `,
    ];
}
