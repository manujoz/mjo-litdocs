import { LitElement, css, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";

import "mjo-litui/mjo-button";
import "mjo-litui/mjo-checkbox";

@customElement("checkbox-helper-text")
export class CheckboxHelperText extends LitElement {
    @state() private showError = false;
    @state() private showSuccess = false;

    render() {
        return html`
            <mjo-checkbox label="Terms and conditions" helperText="Please read and accept our terms and conditions"></mjo-checkbox>
            <mjo-checkbox
                label="Newsletter subscription"
                helperText="We'll send you updates about new features"
                ?error=${this.showError}
                errormsg=${ifDefined(this.showError ? "This field is required" : undefined)}
                ?success=${this.showSuccess}
                successmsg=${ifDefined(this.showSuccess ? "Great choice!" : undefined)}
            ></mjo-checkbox>
            <div class="buttons">
                <mjo-button @click=${this.#toggleError} variant="ghost" color="error">Toggle Error</mjo-button>
                <mjo-button @click=${this.#toggleSuccess} variant="ghost" color="success">Toggle Success</mjo-button>
            </div>
        `;
    }

    #toggleError() {
        this.showError = !this.showError;
        if (this.showError) this.showSuccess = false;
    }

    #toggleSuccess() {
        this.showSuccess = !this.showSuccess;
        if (this.showSuccess) this.showError = false;
    }

    static styles = [
        css`
            :host {
                padding: var(--mjo-space-large) 0;
                display: flex;
                flex-direction: column;
                gap: var(--mjo-space-large);
            }
            .buttons {
                position: relative;
                display: flex;
                gap: var(--mjo-space-medium);
            }
        `,
    ];
}
