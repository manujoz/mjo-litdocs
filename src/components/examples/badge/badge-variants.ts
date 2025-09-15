import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-avatar";
import "mjo-litui/mjo-badge";

@customElement("badge-variants")
export class BadgeVariants extends LitElement {
    render() {
        return html`
            <mjo-badge label="5" variant="solid" show>
                <mjo-avatar radius="large" src="https://i.pravatar.cc/150?img=15" name="Jimmy"></mjo-avatar>
            </mjo-badge>
            <mjo-badge label="2" variant="flat" show>
                <mjo-avatar radius="large" src="https://i.pravatar.cc/150?img=16" name="Juliet"></mjo-avatar>
            </mjo-badge>
            <mjo-badge label="8" variant="ghost" show>
                <mjo-avatar radius="large" src="https://i.pravatar.cc/150?img=17" name="Jack"></mjo-avatar>
            </mjo-badge>
            <mjo-badge label="!" variant="brilliant" show>
                <mjo-avatar radius="large" src="https://i.pravatar.cc/150?img=18" name="Jill"></mjo-avatar>
            </mjo-badge>
            <mjo-badge label="5" variant="shadow" show>
                <mjo-avatar radius="large" src="https://i.pravatar.cc/150?img=18" name="Jill"></mjo-avatar>
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
