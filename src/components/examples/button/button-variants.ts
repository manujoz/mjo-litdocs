import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-button";

@customElement("button-variants")
export class ButtonVariants extends LitElement {
    render() {
        return html`
            <mjo-button color="primary" variant="default">Default</mjo-button>
            <mjo-button color="primary" variant="ghost">Ghost</mjo-button>
            <mjo-button color="primary" variant="flat">Flat</mjo-button>
            <mjo-button color="primary" variant="dashed">Dashed</mjo-button>
            <mjo-button color="primary" variant="link">Link</mjo-button>
            <mjo-button color="primary" variant="text">Text</mjo-button>
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
