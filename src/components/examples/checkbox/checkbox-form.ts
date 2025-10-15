import { LitElement, css, html } from "lit";
import { customElement, state } from "lit/decorators.js";

import "mjo-litui/mjo-checkbox";

@customElement("checkbox-form")
export class CheckboxForm extends LitElement {
    @state() private formData: Record<string, any> = {};

    render() {
        return html`
            <div style="display: flex; flex-direction: column; gap: 16px;">
                <mjo-checkbox name="preferences" value="notifications" label="Email notifications"></mjo-checkbox>

                <mjo-checkbox name="preferences" value="newsletter" label="Newsletter subscription"></mjo-checkbox>

                <mjo-checkbox name="terms" value="accepted" label="I agree to the terms and conditions" required></mjo-checkbox>

                <div style="margin-top: 16px; padding: 12px; background: var(--mjo-background-color-high); border-radius: 8px;">
                    <strong>Form Data:</strong>
                    <pre style="margin: 8px 0 0 0; font-size: 12px;">${JSON.stringify(this.formData, null, 2)}</pre>
                </div>
            </div>
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
