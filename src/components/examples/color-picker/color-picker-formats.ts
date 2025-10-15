import type { MjoColorPickerChangeEvent } from "mjo-litui/types/mjo-color-picker";

import { LitElement, css, html } from "lit";
import { customElement, state } from "lit/decorators.js";

import "mjo-litui/mjo-color-picker";

@customElement("color-picker-formats")
export class ColorPickerFormats extends LitElement {
    @state() private color = "#3b82f6";

    render() {
        return html`
            <mjo-color-picker label="Hex Format" format="hex" showValue value=${this.color} @mjo-color-picker:change=${this.#handleColorChange}>
            </mjo-color-picker>
            <mjo-color-picker label="RGB Format" format="rgb" showValue value=${this.color} @mjo-color-picker:change=${this.#handleColorChange}>
            </mjo-color-picker>
            <mjo-color-picker label="HSL Format" format="hsl" showValue value=${this.color} @mjo-color-picker:change=${this.#handleColorChange}>
            </mjo-color-picker>
            <mjo-color-picker label="HWB Format" format="hwb" showValue value=${this.color} @mjo-color-picker:change=${this.#handleColorChange}>
            </mjo-color-picker>
        `;
    }

    #handleColorChange(event: MjoColorPickerChangeEvent) {
        this.color = event.detail.value;
    }

    static styles = [
        css`
            :host {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(min(250px, 100%), 1fr));
                gap: 1rem;
            }
        `,
    ];
}
