import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-button";

@customElement("button-usage")
export class ButtonUsage extends LitElement {
    render() {
        return html`
            <mjo-button color="primary">Primary Button</mjo-button>
            <mjo-button color="secondary">Secondary Button</mjo-button>
            <mjo-button color="success">Success Button</mjo-button>
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
