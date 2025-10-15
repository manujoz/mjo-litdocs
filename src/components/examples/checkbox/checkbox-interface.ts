import type { MjoCheckboxTheme } from "mjo-litui/types/mjo-theme";

import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("checkbox-interface")
export class CheckboxInterface extends LitElement {
    theme: MjoCheckboxTheme = {
        borderColor: "#10b981",
        checkedBorderColor: "#10b981",
        checkedColor: "linear-gradient(135deg, #10b981, #059669)",
        borderRadius: "10px",
    };

    render() {
        return html` <mjo-checkbox class="custom-theme-3" .theme=${this.theme} label="Green Gradient Theme" checked></mjo-checkbox> `;
    }

    static styles = [
        css`
            :host {
                display: inline-block;
                padding: var(--mjo-space-large) 0;
            }
        `,
    ];
}
