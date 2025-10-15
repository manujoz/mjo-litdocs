import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-button";

@customElement("button-states")
export class ButtonStates extends LitElement {
    render() {
        return html`
            <div>
                <mjo-button color="primary">Default</mjo-button>
            </div>
            <div>
                <mjo-button color="primary" disabled>Disabled</mjo-button>
            </div>
            <div>
                <mjo-button color="primary" loading>Loading</mjo-button>
            </div>
            <div>
                <mjo-button color="primary" fullwidth>Full Width</mjo-button>
            </div>
        `;
    }

    static styles = [
        css`
            :host {
                display: flex;
                flex-direction: column;
                gap: 1rem;
                align-items: stretch;
            }
        `,
    ];
}
