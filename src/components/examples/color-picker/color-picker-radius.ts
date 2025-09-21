import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("color-picker-radius")
export class ColorPickerRadius extends LitElement {
    render() {
        return html`<mjo-color-picker label="Rounded" rounded value="#ef4444"></mjo-color-picker>`;
    }

    static styles = [
        css`
            :host {
                display: block;
            }
        `,
    ];
}
