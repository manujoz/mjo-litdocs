import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-avatar";

@customElement("avatar-radius")
export class AvatarRadius extends LitElement {
    render() {
        return html`
            <mjo-avatar src="https://i.pravatar.cc/150?img=26" radius="none" name="Susan Clothes" color="primary"></mjo-avatar>
            <mjo-avatar src="https://i.pravatar.cc/150?img=26" radius="small" name="Susan Clothes" color="primary"></mjo-avatar>
            <mjo-avatar src="https://i.pravatar.cc/150?img=26" radius="medium" name="Susan Clothes" color="primary"></mjo-avatar>
            <mjo-avatar src="https://i.pravatar.cc/150?img=26" radius="large" name="Susan Clothes" color="primary"></mjo-avatar>
            <mjo-avatar src="https://i.pravatar.cc/150?img=26" radius="full" name="Susan Clothes" color="primary"></mjo-avatar>
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
        "avatar-radius": AvatarRadius;
    }
}
