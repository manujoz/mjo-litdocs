import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-button";

@customElement("button-sizes")
export class ButtonSizes extends LitElement {
    render() {
        return html`
            <mjo-button color="primary" size="small">Small</mjo-button>
            <mjo-button color="primary" size="medium">Medium</mjo-button>
            <mjo-button color="primary" size="large">Large</mjo-button>
        `;
    }

    static styles = [
        css`
            :host {
                display: flex;
                flex-wrap: wrap;
                gap: 1rem;
                align-items: center;
            }
        `,
    ];
}
