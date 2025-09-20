import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-card";

@customElement("card-cssparts")
export class CardCssparts extends LitElement {
    render() {
        return html`
            <div class="cards-container">
                <mjo-card contrast="high" radius="large">
                    <h3>Customized with CSS Parts</h3>
                    <p>This card demonstrates styling using CSS parts for precise control over internal elements.</p>
                </mjo-card>

                <mjo-card variant="modern" space="large">
                    <h3>Modern Card</h3>
                    <p>Another example showing CSS parts customization on a modern variant.</p>
                </mjo-card>
            </div>
        `;
    }

    static styles = [
        css`
            :host {
                display: block;
            }

            .cards-container {
                display: flex;
                flex-direction: column;
                gap: 1.5rem;
            }

            mjo-card::part(container) {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                border: 2px solid rgba(255, 255, 255, 0.2);
                transform: perspective(1000px) rotateX(5deg);
                transition: transform 0.3s ease;
            }

            mjo-card:hover::part(container) {
                transform: perspective(1000px) rotateX(0deg) translateY(-5px);
            }

            mjo-card::part(content) {
                color: white;
            }

            h3 {
                margin: 0 0 1rem 0;
                color: white;
                text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
            }

            p {
                margin: 0;
                color: rgba(255, 255, 255, 0.9);
            }
        `,
    ];
}
