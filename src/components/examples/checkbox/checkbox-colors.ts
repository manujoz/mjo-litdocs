import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-checkbox";

@customElement("checkbox-colors")
export class CheckboxColors extends LitElement {
    render() {
        return html`
            <mjo-checkbox color="primary" label="Primary checkbox" checked></mjo-checkbox>
            <mjo-checkbox color="secondary" label="Secondary checkbox" checked></mjo-checkbox>
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
