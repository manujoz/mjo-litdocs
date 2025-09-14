import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-avatar";

@customElement("avatar-bordered")
export class AvatarBordered extends LitElement {
    render() {
        return html`
            <mjo-avatar src="https://i.pravatar.cc/150?img=8" bordered name="Andrew Pain" color="default"></mjo-avatar>
            <mjo-avatar src="https://i.pravatar.cc/150?img=8" bordered name="Andrew Pain" color="primary"></mjo-avatar>
            <mjo-avatar src="https://i.pravatar.cc/150?img=8" bordered name="Andrew Pain" color="secondary"></mjo-avatar>
            <mjo-avatar src="https://i.pravatar.cc/150?img=8" bordered name="Andrew Pain" color="info"></mjo-avatar>
            <mjo-avatar src="https://i.pravatar.cc/150?img=8" bordered name="Andrew Pain" color="success"></mjo-avatar>
            <mjo-avatar src="https://i.pravatar.cc/150?img=8" bordered name="Andrew Pain" color="warning"></mjo-avatar>
            <mjo-avatar src="https://i.pravatar.cc/150?img=8" bordered name="Andrew Pain" color="error"></mjo-avatar>
        `;
    }

    static styles = [
        css`
            :host {
                display: block;
                display: flex;
                flex-flow: row wrap;
                gap: var(--mjo-space-medium);
                align-items: center;
            }
        `,
    ];
}

declare global {
    interface HTMLElementTagNameMap {
        "avatar-bordered": AvatarBordered;
    }
}
