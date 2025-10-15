import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-avatar";

@customElement("avatar-namecoloured")
export class AvatarNamecoloured extends LitElement {
    render() {
        return html`
            <mjo-avatar name="Sophia Willis" nameColoured></mjo-avatar>
            <mjo-avatar name="John Doe" nameColoured></mjo-avatar>
            <mjo-avatar name="Lua Johnson" nameColoured></mjo-avatar>
            <mjo-avatar name="Charlie Brown" nameColoured></mjo-avatar>
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
        "avatar-namecoloured": AvatarNamecoloured;
    }
}
