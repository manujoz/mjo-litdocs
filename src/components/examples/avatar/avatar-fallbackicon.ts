import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import { AiOutlineApple, AiOutlineUser } from "mjo-icons/ai";

import "mjo-litui/mjo-avatar";

@customElement("avatar-fallbackicon")
export class AvatarFallbackicon extends LitElement {
    render() {
        return html`
            <mjo-avatar fallbackIcon=${AiOutlineUser} name="Josh Williams"></mjo-avatar>
            <mjo-avatar src="https://broken-image" fallbackIcon=${AiOutlineApple} name="Josh Williams"></mjo-avatar>
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
        "avatar-fallbackicon": AvatarFallbackicon;
    }
}
