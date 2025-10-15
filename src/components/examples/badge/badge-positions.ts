import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-avatar";
import "mjo-litui/mjo-badge";

@customElement("badge-positions")
export class BadgePositions extends LitElement {
    render() {
        return html`
            <mjo-badge label="TL" position="top-left" show>
                <mjo-avatar radius="large" src="https://i.pravatar.cc/150?img=16" name="Juliet"></mjo-avatar>
            </mjo-badge>
            <mjo-badge label="TR" position="top-right" show>
                <mjo-avatar radius="large" src="https://i.pravatar.cc/150?img=15" name="Jimmy"></mjo-avatar>
            </mjo-badge>
            <mjo-badge label="BL" position="bottom-left" show>
                <mjo-avatar radius="large" src="https://i.pravatar.cc/150?img=18" name="Jill"></mjo-avatar>
            </mjo-badge>
            <mjo-badge label="BR" position="bottom-right" show>
                <mjo-avatar radius="large" src="https://i.pravatar.cc/150?img=17" name="Jack"></mjo-avatar>
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
        `,
    ];
}
