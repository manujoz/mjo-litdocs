import type { MjoColorPickerInputEvent } from "mjo-litui/types/mjo-color-picker";

import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-color-picker";

@customElement("color-picker-css-custom")
export class ColorPickerCssCustom extends LitElement {
    render() {
        return html`<mjo-color-picker label="Custom Styled" value="#ff6b6b" @mjo-color-picker:input=${this.#handleInput}></mjo-color-picker>`;
    }

    #handleInput = (event: MjoColorPickerInputEvent) => {
        const color = event.detail.value;

        this.style.setProperty("--mjo-color-picker-border-color", color);
        this.style.setProperty("--mjo-color-picker-border-color-focus", color);
        this.style.setProperty("--mjo-color-picker-box-shadow-focus", `0 0 0 10px color-mix(in srgb, ${color} 20%, transparent)`);
    };

    static styles = [
        css`
            :host {
                display: block;
                padding: var(--mjo-space-large) 0;
                --mjo-color-picker-border-radius: 0px;
                --mjo-color-picker-border-width: 3px;
                --mjo-color-picker-border-color: #ff6b6b;
                --mjo-color-picker-border-color-focus: #ff5252;
                --mjo-color-picker-box-shadow-focus: ;
                --mjo-color-picker-size-medium: 40px;
            }
        `,
    ];
}
