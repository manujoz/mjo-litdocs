import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-card";

@customElement("card-radius")
export class CardRadius extends LitElement {
    render() {
        return html`
            <mjo-card radius="none">
                <h4>No Radius</h4>
                <p>Sharp corners.</p>
            </mjo-card>
            <mjo-card radius="small">
                <h4>Small Radius</h4>
                <p>Slightly rounded corners.</p>
            </mjo-card>
            <mjo-card radius="medium">
                <h4>Medium Radius</h4>
                <p>Moderately rounded corners.</p>
            </mjo-card>
            <mjo-card radius="large">
                <h4>Large Radius</h4>
                <p>Prominently rounded corners.</p>
            </mjo-card>
        `;
    }

    static styles = [
        css`
            :host {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
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
