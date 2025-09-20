import { LitElement, css, html } from "lit";
import { customElement, state } from "lit/decorators.js";

import "mjo-litui/mjo-checkbox";

@customElement("checkbox-validation")
export class CheckboxValidation extends LitElement {
    @state() private validationResult: any = null;

    render() {
        return html`
            <div style="display: flex; flex-direction: column; gap: 16px;">
                <h4>Required Terms:</h4>
                <mjo-checkbox
                    name="terms"
                    value="accepted"
                    label="I accept the terms and conditions"
                    required
                    errormsg="You must accept the terms to continue"
                ></mjo-checkbox>

                <h4>Select at least 2 interests:</h4>
                <mjo-checkbox name="interests" value="tech" label="Technology"></mjo-checkbox>

                <mjo-checkbox name="interests" value="design" label="Design"></mjo-checkbox>

                ${this.validationResult
                    ? html`
                          <div style="margin-top: 16px; padding: 12px; background: var(--mjo-background-color-high); border-radius: 8px;">
                              <strong>Validation Result:</strong>
                              <pre style="margin: 8px 0 0 0; font-size: 12px;">${JSON.stringify(this.validationResult, null, 2)}</pre>
                          </div>
                      `
                    : ""}
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
