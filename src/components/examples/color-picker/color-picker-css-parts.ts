import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-color-picker";
import type { MjoColorPickerInputEvent } from "mjo-litui/types/mjo-color-picker";
import { getContrastColor } from "mjo-litui/utils/colors";

@customElement("color-picker-css-parts")
export class ColorPickerCssParts extends LitElement {
    render() {
        return html`
            <mjo-color-picker
                label="Custom Parts Styling"
                value="#e74c3c"
                helperText="Styled using CSS Parts"
                showValue
                @mjo-color-picker:input=${this.#handleInput}
            >
            </mjo-color-picker>
        `;
    }

    #handleInput = (event: MjoColorPickerInputEvent) => {
        const color = event.detail.value;

        const contrastColor = getContrastColor({ color });
        this.style.setProperty("--custom-border-color", contrastColor);
    };

    static styles = [
        css`
            :host {
                display: block;
                padding: var(--mjo-space-large) 0;
                --custom-border-color: #ffffff;
            }

            mjo-color-picker::part(container) {
                border: none;
                box-shadow: none !important;
                transition: all 0.3s ease;
            }
            mjo-color-picker::part(container):hover {
                transform: scale(1.2);
            }
            mjo-color-picker::part(color-picker) {
                border: 3px solid #cccccc;
                border-radius: 50%;
            }
            mjo-color-picker::part(value-display) {
                font-family: monospace;
                font-weight: bold;
                background: linear-gradient(45deg, #e74c3c, #2bc037);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }
        `,
    ];
}
