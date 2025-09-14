import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-avatar";

@customElement("avatar-size")
export class AvatarSize extends LitElement {
    render() {
        return html`
            <mjo-avatar src="https://i.pravatar.cc/150?img=33" size="small" name="John Doe"></mjo-avatar>
            <mjo-avatar src="https://i.pravatar.cc/150?img=33" size="medium" name="John Doe"></mjo-avatar>
            <mjo-avatar src="https://i.pravatar.cc/150?img=33" size="large" name="John Doe"></mjo-avatar>
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
        "avatar-size": AvatarSize;
    }
}
