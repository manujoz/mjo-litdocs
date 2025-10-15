import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-avatar";
import "mjo-litui/mjo-badge";

@customElement("badge-cssparts")
export class BadgeCssparts extends LitElement {
    render() {
        return html`
            <mjo-badge label="Custom" show class="css-parts">
                <mjo-avatar radius="large" size="large" src="https://i.pravatar.cc/150?img=16" name="Juliet"></mjo-avatar>
            </mjo-badge>
            <mjo-badge label="Themed" color="success" show class="css-vars">
                <mjo-avatar radius="large" size="large" src="https://i.pravatar.cc/150?img=17" name="Billy"></mjo-avatar>
            </mjo-badge>
        `;
    }

    static styles = [
        css`
            :host {
                display: flex;
                gap: 2.5rem;
                align-items: center;
            }
            .css-parts::part(container) {
                background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
                color: #111111;
                border: 2px solid #fff;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
            }
            .css-parts::part(label) {
                text-transform: uppercase;
            }
            .css-vars {
                --mjo-badge-border-width: 5px;
                --mjo-badge-background-color: #f50bc2;
                --mjo-badge-color: #a4fffa;
            }
        `,
    ];
}
