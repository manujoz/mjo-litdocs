import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-date-picker";
import "mjo-litui/mjo-theme";

const customTheme = {
    components: {
        mjoTextField: {
            borderColor: "#9333ea",
            borderColorFocus: "#7c3aed",
        },
    },
};

@customElement("date-picker-custom-theme")
export class DatePickerCustomTheme extends LitElement {
    render() {
        return html`
            <mjo-theme .config=${customTheme} scope="local">
                <mjo-date-picker label="Custom Theme" placeholder="Purple themed"></mjo-date-picker>
            </mjo-theme>
        `;
    }

    static styles = [
        css`
            :host {
                display: block;
            }
        `,
    ];
}

declare global {
    interface HTMLElementTagNameMap {
        "date-picker-custom-theme": DatePickerCustomTheme;
    }
}
