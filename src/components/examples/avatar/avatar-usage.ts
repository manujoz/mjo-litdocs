import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import { AiOutlineUser } from "mjo-icons/ai";

import "mjo-litui/mjo-avatar";

@customElement("avatar-usage")
export class AvatarUsage extends LitElement {
    render() {
        return html`
            <mjo-avatar src="https://i.pravatar.cc/150?img=15" alt="Avatar"></mjo-avatar>
            <mjo-avatar src="https://i.pravatar.cc/150?img=33" bordered color="default" alt="Avatar"></mjo-avatar>
            <mjo-avatar src="https://i.pravatar.cc/150?img=39" bordered color="primary" alt="Avatar"></mjo-avatar>
            <mjo-avatar src="https://i.pravatar.cc/150?img=37" bordered color="secondary" alt="Avatar"></mjo-avatar>
            <mjo-avatar src="https://i.pravatar.cc/150?img=66" bordered color="info" alt="Avatar"></mjo-avatar>
            <mjo-avatar src="https://i.pravatar.cc/150?img=12" bordered color="success" alt="Avatar"></mjo-avatar>
            <mjo-avatar src="https://i.pravatar.cc/150?img=58" bordered color="warning" alt="Avatar"></mjo-avatar>
            <mjo-avatar src="https://broken-image" name="Olivia" bordered color="error" alt="Avatar"></mjo-avatar>
            <mjo-avatar fallbackIcon=${AiOutlineUser} bordered color="primary" alt="Avatar"></mjo-avatar>
            <mjo-avatar name="User Name" bordered color="secondary" alt="Avatar"></mjo-avatar>
            <mjo-avatar name="User Name" bordered color="warning" nameColoured alt="Avatar"></mjo-avatar>
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
        "avatar-usage": AvatarUsage;
    }
}
