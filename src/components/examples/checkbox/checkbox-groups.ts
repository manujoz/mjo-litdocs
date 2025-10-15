import type { MjoAlert } from "mjo-litui/mjo-alert";
import type { MjoFormSubmitEvent } from "mjo-litui/types/mjo-form";

import { LitElement, css, html } from "lit";
import { customElement, query } from "lit/decorators.js";

import "mjo-litui/mjo-alert";
import "mjo-litui/mjo-button";
import "mjo-litui/mjo-checkbox";
import "mjo-litui/mjo-checkbox-group";
import "mjo-litui/mjo-form";
import "../../lit/title-example";

@customElement("checkbox-groups")
export class CheckboxGroups extends LitElement {
    @query("mjo-alert") $alert!: MjoAlert;

    render() {
        return html`
            <mjo-form @submit=${this.#handleSubmit}>
                <mjo-checkbox-group>
                    <div class="container">
                        <title-example>Select at least 2 options:</title-example>
                        <mjo-checkbox mincheck="2" name="features" value="notifications" label="Email notifications"></mjo-checkbox>
                        <mjo-checkbox name="features" value="newsletter" label="Weekly newsletter"></mjo-checkbox>
                        <mjo-checkbox name="features" value="updates" label="Product updates"></mjo-checkbox>
                    </div>
                </mjo-checkbox-group>
                <mjo-alert type="success" message="Your preferences have been saved!" animation="scale" hidden></mjo-alert>
                <mjo-button type="submit" fullwidth>Submit</mjo-button>
            </mjo-form>
        `;
    }

    #handleSubmit(event: MjoFormSubmitEvent) {
        const { response } = event.detail;
        const button = response.submitButton;

        if (button) button.loading = false;

        if (!response.error) {
            this.$alert.show();
        } else {
            this.$alert.hide();
        }
    }

    static styles = [
        css`
            :host {
                display: block;
                max-width: 400px;
            }
            .container {
                padding: var(--mjo-space-large) 0;
                display: flex;
                flex-direction: column;
                gap: var(--mjo-space-medium);
            }
            mjo-checkbox-group {
                margin-bottom: var(--mjo-space-small);
            }
            mjo-checkbox {
                width: 100%;
            }
            mjo-button {
                margin-top: var(--mjo-space-small);
            }
        `,
    ];
}
