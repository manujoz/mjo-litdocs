import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-button";

@customElement("button-colors")
export class ButtonColors extends LitElement {
    render() {
        return html`
            <mjo-button color="primary">Primary</mjo-button>
            <mjo-button color="secondary">Secondary</mjo-button>
            <mjo-button color="success">Success</mjo-button>
            <mjo-button color="info">Info</mjo-button>
            <mjo-button color="warning">Warning</mjo-button>
            <mjo-button color="error">Error</mjo-button>
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
