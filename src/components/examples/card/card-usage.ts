import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-card";

@customElement("card-usage")
export class CardUsage extends LitElement {
    render() {
        return html`
            <mjo-card>
                <h3>Basic Card</h3>
                <p>This is a basic card with default styling.</p>
            </mjo-card>

            <mjo-card space="large">
                <h3>Card with Large Spacing</h3>
                <p>This card uses large internal spacing.</p>
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
            h3 {
                margin: 0 0 1rem 0;
                color: var(--mjo-foreground-color);
            }
            p {
                margin: 0;
                color: var(--mjo-foreground-color-low);
            }
        `,
    ];
}
