import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-checkbox";

@customElement("checkbox-theme")
export class CheckboxTheme extends LitElement {
    render() {
        return html`
            <div style="display: flex; flex-direction: column; gap: 24px;">
                <h4>Custom Theme Example:</h4>
                <div style="display: flex; flex-direction: column; gap: 16px;">
                    <mjo-checkbox class="custom-theme-1" label="Purple Theme" checked></mjo-checkbox>

                    <mjo-checkbox class="custom-theme-2" label="Orange Theme" checked></mjo-checkbox>

                    <mjo-checkbox class="custom-theme-3" label="Green Gradient Theme" checked></mjo-checkbox>
                </div>
            </div>
        `;
    }

    static styles = [
        css`
            :host {
                display: block;
            }

            .custom-theme-1 {
                --mjo-checkbox-color: #8b5cf6;
                --mjo-checkbox-color-hover: #7c3aed;
                --mjo-checkbox-border-color: #8b5cf6;
                --mjo-checkbox-check-color: white;
            }

            .custom-theme-2 {
                --mjo-checkbox-color: #f97316;
                --mjo-checkbox-color-hover: #ea580c;
                --mjo-checkbox-border-color: #f97316;
                --mjo-checkbox-check-color: white;
                --mjo-checkbox-border-radius: 12px;
            }

            .custom-theme-3 {
                --mjo-checkbox-color: linear-gradient(135deg, #10b981, #059669);
                --mjo-checkbox-border-color: #10b981;
                --mjo-checkbox-check-color: white;
                --mjo-checkbox-border-radius: 50%;
            }
        `,
    ];
}
