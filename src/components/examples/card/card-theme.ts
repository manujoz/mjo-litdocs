import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-card";

interface MjoCardTheme {
    backgroundColor?: string;
    backgroundColorHigh?: string;
    padding?: string;
    boxShadow?: string;
    radiusLarge?: string;
    border?: string;
}

@customElement("card-theme")
export class CardTheme extends LitElement {
    private customTheme: MjoCardTheme = {
        backgroundColor: "#f8f9fa",
        backgroundColorHigh: "#e9ecef",
        padding: "2rem",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        radiusLarge: "20px",
        border: "2px solid var(--mjo-secondary-color)",
    };

    render() {
        return html`
            <mjo-card contrast="high" radius="large" .theme=${this.customTheme}>
                <h3>Custom Themed Card</h3>
                <p>This card uses a custom theme with modified colors, padding, and shadow.</p>
            </mjo-card>
        `;
    }

    static styles = [
        css`
            :host {
                display: block;
            }

            h3 {
                margin: 0 0 1rem 0;
                color: var(--mjo-secondary-color);
            }

            p {
                margin: 0;
                color: var(--mjo-foreground-color-low);
            }
        `,
    ];
}
