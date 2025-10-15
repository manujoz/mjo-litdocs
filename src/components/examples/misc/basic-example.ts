import { LitElement, html } from "lit";
import { customElement, query } from "lit/decorators.js";

import "mjo-litui/mjo-button";
import type { MjoButton } from "mjo-litui/mjo-button";

@customElement("basic-example")
export class BasicExample extends LitElement {
    @query("mjo-button") $button!: MjoButton;

    render() {
        return html`<mjo-button @mjo-button:click=${this.#handleClick}>CLICK ME!</mjo-button>`;
    }

    #handleClick = () => {
        this.$button.loading = true;

        setTimeout(() => {
            this.$button.loading = false;
        }, 2000);
    };
}

declare global {
    interface HTMLElementTagNameMap {
        "basic-example": BasicExample;
    }
}
