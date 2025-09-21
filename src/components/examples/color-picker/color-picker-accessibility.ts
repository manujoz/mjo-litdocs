import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-color-picker";

@customElement("color-picker-accessibility")
export class ColorPickerAccessibility extends LitElement {
    render() {
        return html`
            <div class="container">
                <mjo-color-picker
                    label="Accessible Color Picker"
                    aria-label="Choose background color for your theme"
                    aria-describedby="color-description"
                    value="#3b82f6"
                    helperText="Use arrow keys to navigate color options"
                >
                </mjo-color-picker>

                <div id="color-description" class="sr-only">
                    This color picker allows you to select a color using keyboard navigation. Press Enter or Space to open the color picker, use arrow keys to
                    navigate, and press Enter to select a color.
                </div>

                <mjo-color-picker label="High Contrast Color Picker" value="#000000" helperText="Optimized for high contrast mode"> </mjo-color-picker>
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
                flex-direction: column;
                gap: 1rem;
            }
            .sr-only {
                position: absolute;
                width: 1px;
                height: 1px;
                padding: 0;
                margin: -1px;
                overflow: hidden;
                clip: rect(0, 0, 0, 0);
                white-space: nowrap;
                border: 0;
            }
        `,
    ];
}
