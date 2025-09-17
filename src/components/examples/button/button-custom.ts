import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-button";

@customElement("button-custom")
export class ButtonCustom extends LitElement {
    render() {
        return html`
            <mjo-button color="primary">Custom Button 1</mjo-button>
            <mjo-button color="secondary" variant="ghost">Custom Button 2</mjo-button>
            <mjo-button color="success" variant="flat">Custom Button 3</mjo-button>
        `;
    }

    static styles = [
        css`
            :host {
                display: flex;
                flex-wrap: wrap;
                gap: 1rem;
                align-items: center;
                --mjo-button-border-radius: 2px;
                --mjo-button-font-weight: 600;
                --mjo-button-padding: 0.75rem 1.5rem;
                --mjo-button-font-size: 1.1em;
            }
        `,
    ];
}
