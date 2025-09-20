import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-card";

@customElement("card-contrast")
export class CardContrast extends LitElement {
    render() {
        return html`
            <mjo-card contrast="low">
                <h4>Low Contrast Card</h4>
                <p>Subtle appearance with low contrast.</p>
            </mjo-card>

            <mjo-card>
                <h4>Default Card</h4>
                <p>Normal contrast for balanced appearance.</p>
            </mjo-card>

            <mjo-card contrast="high">
                <h4>High Contrast Card</h4>
                <p>High contrast for prominent display.</p>
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
