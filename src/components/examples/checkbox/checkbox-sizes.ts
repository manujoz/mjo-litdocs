import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-checkbox";

@customElement("checkbox-sizes")
export class CheckboxSizes extends LitElement {
    render() {
        return html`
            <mjo-checkbox size="small" label="Small checkbox" checked></mjo-checkbox>
            <mjo-checkbox size="medium" label="Medium checkbox" checked></mjo-checkbox>
            <mjo-checkbox size="large" label="Large checkbox" checked></mjo-checkbox>
        `;
    }

    static styles = [
        css`
            :host {
                padding: var(--mjo-space-large) 0;
                display: flex;
                flex-direction: column;
                gap: var(--mjo-space-large);
            }
        `,
    ];
}
