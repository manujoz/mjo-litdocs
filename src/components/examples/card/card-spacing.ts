import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-card";

@customElement("card-spacing")
export class CardSpacing extends LitElement {
    render() {
        return html`
            <mjo-card space="small">
                <h4>Small Spacing</h4>
                <p>Compact card with minimal padding.</p>
            </mjo-card>
            <mjo-card space="medium">
                <h4>Medium Spacing (Default)</h4>
                <p>Standard card with default padding.</p>
            </mjo-card>
            <mjo-card space="large">
                <h4>Large Spacing</h4>
                <p>Spacious card with generous padding.</p>
            </mjo-card>
        `;
    }

    static styles = [
        css`
            :host {
                display: flex;
                flex-direction: column;
                gap: 1rem;
            }
            h4 {
                margin: 0 0 0.5rem 0;
                color: var(--mjo-foreground-color);
            }
            p {
                margin: 0;
                color: var(--mjo-foreground-color-low);
            }
        `,
    ];
}
