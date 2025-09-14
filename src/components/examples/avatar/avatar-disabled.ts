import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-avatar";

@customElement("avatar-disabled")
export class AvatarDisabled extends LitElement {
    render() {
        return html`<mjo-avatar src="https://i.pravatar.cc/150?img=42" name="Martha Smith" disabled></mjo-avatar>`;
    }

    static styles = [
        css`
            :host {
                display: block;
            }
        `,
    ];
}

declare global {
    interface HTMLElementTagNameMap {
        "avatar-disabled": AvatarDisabled;
    }
}
