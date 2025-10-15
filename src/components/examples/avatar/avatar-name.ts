import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-avatar";

@customElement("avatar-name")
export class AvatarName extends LitElement {
    render() {
        return html`
            <mjo-avatar name="Sophia Willis"></mjo-avatar>
            <mjo-avatar src="https://broken-image" name="Sophia Willis"></mjo-avatar>
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
        "avatar-name": AvatarName;
    }
}
