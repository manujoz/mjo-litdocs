import type { MjoAvatarClickEvent } from "mjo-litui/types/mjo-avatar";

import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import { printLog } from "@/lib/logger";

@customElement("avatar-clickable")
export class AvatarClickable extends LitElement {
    render() {
        return html`
            <mjo-avatar
                src="https://i.pravatar.cc/150?img=33"
                name="John Doe"
                color="primary"
                clickable
                value="id-3adsa23-asd3rfa-hdf3a-3rafsd"
                bordered
                @mjo-avatar:click=${this.#handleClick}
            ></mjo-avatar>
        `;
    }

    #handleClick(event: MjoAvatarClickEvent) {
        printLog({
            id: "avatar-clickable",
            message: event.detail,
            event,
        });
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
        "avatar-clickable": AvatarClickable;
    }
}
