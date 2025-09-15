import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-avatar";
import "mjo-litui/mjo-badge";

@customElement("badge-colors")
export class BadgeColors extends LitElement {
    render() {
        return html`
            <mjo-badge label="3" color="primary" show>
                <mjo-avatar radius="large" src="https://i.pravatar.cc/150?img=15" name="Jimmy"></mjo-avatar>
            </mjo-badge>
            <mjo-badge label="7" color="secondary" show>
                <mjo-avatar radius="large" src="https://i.pravatar.cc/150?img=16" name="Juliet"></mjo-avatar>
            </mjo-badge>
            <mjo-badge label="5" color="success" show>
                <mjo-avatar radius="large" src="https://i.pravatar.cc/150?img=17" name="Jack"></mjo-avatar>
            </mjo-badge>
            <mjo-badge label="2" color="warning" show>
                <mjo-avatar radius="large" src="https://i.pravatar.cc/150?img=18" name="Jill"></mjo-avatar>
            </mjo-badge>
            <mjo-badge label="!" color="error" show>
                <mjo-avatar radius="large" src="https://i.pravatar.cc/150?img=19" name="Jack"></mjo-avatar>
            </mjo-badge>
            <mjo-badge label="8" color="info" show>
                <mjo-avatar radius="large" src="https://i.pravatar.cc/150?img=20" name="Jill"></mjo-avatar>
            </mjo-badge>
            <mjo-badge label="1" color="default" show>
                <mjo-avatar radius="large" src="https://i.pravatar.cc/150?img=21" name="Jack"></mjo-avatar>
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
