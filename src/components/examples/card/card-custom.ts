import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-card";

@customElement("card-custom")
export class CardCustom extends LitElement {
    render() {
        return html`
            <mjo-card contrast="high" radius="large">
                <h3>Custom Themed Card</h3>
                <p>This card uses custom CSS variables for styling.</p>
            </mjo-card>
        `;
    }

    static styles = [
        css`
            :host {
                display: block;
                --mjo-card-background-color-high: #f8f9fa;
                --mjo-card-padding: 2rem;
                --mjo-card-box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                --mjo-card-radius-large: 20px;
                --mjo-card-border: 2px solid var(--mjo-primary-color);
            }
            h3 {
                margin: 0 0 1rem 0;
                color: var(--mjo-primary-color);
            }
            p {
                margin: 0;
                color: var(--mjo-foreground-color-low);
            }
        `,
    ];
}
