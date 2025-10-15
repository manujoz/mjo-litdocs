import type { MjoFormSubmitEvent } from "mjo-litui/types/mjo-form";

import { LitElement, css, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";

import { isLightColor } from "mjo-litui/utils/colors";

import "mjo-litui/mjo-button";
import "mjo-litui/mjo-color-picker";
import "mjo-litui/mjo-form";

@customElement("color-picker-form")
export class ColorPickerForm extends LitElement {
    @state() private error = false;
    @state() private success = false;
    @state() private errorMsg?: string;
    @state() private successMsg?: string;

    render() {
        return html`
            <mjo-form @submit=${this.#handleSubmit}>
                <div class="form-grid">
                    <mjo-color-picker
                        label="Brand Color"
                        name="brandColor"
                        color="secondary"
                        value="#6c40d3"
                        helperText="Choose your brand color"
                        ?error=${this.error}
                        ?success=${this.success}
                        errormsg=${ifDefined(this.errorMsg)}
                        successmsg=${ifDefined(this.successMsg)}
                    >
                    </mjo-color-picker>
                </div>
                <div class="form-actions">
                    <mjo-button type="submit" color="primary">Save</mjo-button>
                </div>
            </mjo-form>
        `;
    }

    async #handleSubmit(event: MjoFormSubmitEvent) {
        const { data, submitButton } = event.detail.response;

        if (submitButton) submitButton.loading = false;

        this.error = false;
        this.errorMsg = undefined;
        this.success = false;
        this.successMsg = undefined;

        await new Promise((resolve) => setTimeout(resolve, 500));

        const brandColor = data.brandColor as string;
        if (!brandColor) {
            this.error = true;
            this.errorMsg = "Please select a color";
            return;
        }

        console.log("Selected brand color:", brandColor, isLightColor({ color: brandColor }));
        if (!isLightColor({ color: brandColor })) {
            this.error = true;
            this.errorMsg = "Please select a light color";
            return;
        }

        this.success = true;
        this.successMsg = "Color saved successfully";
    }

    static styles = [
        css`
            :host {
                display: block;
                width: 100%;
            }
            .form-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 1rem;
                margin-bottom: 1rem;
            }
            .form-actions {
                display: flex;
                gap: 0.5rem;
                margin-bottom: 1rem;
            }
        `,
    ];
}
