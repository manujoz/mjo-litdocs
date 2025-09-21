import type { MjoColorPickerTheme } from "mjo-litui/types/mjo-theme";

import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-color-picker";
import "mjo-litui/mjo-theme";

const colorPickerTheme: MjoColorPickerTheme = {
    borderRadius: "12px",
    borderWidth: "2px",
    borderColor: "var(--mjo-primary-color)",
    borderColorFocus: "var(--mjo-secondary-color)",
    boxShadowFocus: "0 0 10px 5px color-mix(in srgb, var(--mjo-primary-color) 30%, transparent)",
    labelColor: "var(--mjo-primary-color)",
    labelFontWeight: "600",
};

@customElement("color-picker-theme")
export class ColorPickerTheme extends LitElement {
    render() {
        return html`<mjo-color-picker label="Themed Small" value="#3b82f6" .theme=${colorPickerTheme}></mjo-color-picker>`;
    }

    static styles = [
        css`
            :host {
                display: block;
                padding: var(--mjo-space-large) 0;
            }
        `,
    ];
}
