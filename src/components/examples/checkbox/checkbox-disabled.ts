import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-checkbox";

@customElement("checkbox-disabled")
export class CheckboxDisabled extends LitElement {
    render() {
        return html`
            <mjo-checkbox label="Disabled unchecked" disabled></mjo-checkbox>
            <mjo-checkbox label="Disabled checked" disabled checked></mjo-checkbox>
            <mjo-checkbox label="Disabled indeterminate" disabled indeterminate></mjo-checkbox>
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
