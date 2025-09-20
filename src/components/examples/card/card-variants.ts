import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-card";

@customElement("card-variants")
export class CardVariants extends LitElement {
    render() {
        return html`
            <mjo-card variant="default">
                <h4>Default Variant</h4>
                <p>Traditional rectangular card.</p>
            </mjo-card>
            <mjo-card variant="modern">
                <h4>Modern Variant</h4>
                <p>Contemporary design with cut corners.</p>
            </mjo-card>
            <mjo-card variant="skew">
                <h4>Skew Variant</h4>
                <p>Dynamic slanted design.</p>
            </mjo-card>
        `;
    }

    static styles = [
        css`
            :host {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
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
