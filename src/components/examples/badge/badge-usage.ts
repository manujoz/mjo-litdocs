import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-avatar";
import "mjo-litui/mjo-badge";

@customElement("badge-usage")
export class BadgeUsage extends LitElement {
    render() {
        return html`
            <mjo-badge label="5" show>
                <mjo-avatar radius="large" src="https://i.pravatar.cc/150?img=15" name="Jimmy"></mjo-avatar>
            </mjo-badge>
            <mjo-badge label="New" color="success" show>
                <mjo-avatar radius="large" src="https://i.pravatar.cc/150?img=16" name="Juliet"></mjo-avatar>
            </mjo-badge>
            <mjo-badge label="!" color="error" show>
                <mjo-avatar radius="large" src="https://i.pravatar.cc/150?img=17" name="Jack"></mjo-avatar>
            </mjo-badge>
        `;
    }

    static styles = [
        css`
            :host {
                display: flex;
                gap: 1.5rem;
                align-items: center;
            }
        `,
    ];
}
