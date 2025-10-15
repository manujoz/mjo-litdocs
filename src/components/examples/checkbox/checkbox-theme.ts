import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-checkbox";

@customElement("checkbox-theme")
export class CheckboxTheme extends LitElement {
    render() {
        return html`
            <mjo-checkbox class="custom-theme-1" label="Purple Theme" checked></mjo-checkbox>
            <mjo-checkbox class="custom-theme-2" label="Orange Theme" checked></mjo-checkbox>
            <mjo-checkbox class="custom-theme-3" label="Green Gradient Theme" checked></mjo-checkbox>
        `;
    }

    static styles = [
        css`
            :host {
                display: flex;
                flex-direction: column;
                gap: var(--mjo-space-medium);
            }

            .custom-theme-1 {
                --mjo-checkbox-checked-color: #8b5cf6;
            }
            .custom-theme-2 {
                --mjo-checkbox-checked-color: #f97316;
            }
            .custom-theme-3 {
                --mjo-checkbox-checked-color: linear-gradient(135deg, #10b981, #059669);
                --mjo-checkbox-border-color: #10b981;
                --mjo-checkbox-checked-border-color: #10b981;
                --mjo-checkbox-border-radius: 50%;
            }
        `,
    ];
}
