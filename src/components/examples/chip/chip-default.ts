import type { MjoChipClickEvent } from "mjo-litui/types/mjo-chip";

import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import { printLog } from "@/lib/logger";
import { AiOutlineEdit, AiOutlineSetting } from "mjo-icons/ai";

@customElement("chip-default")
export class ChipDefault extends LitElement {
    render() {
        return html`
            <mjo-chip label="Edit" color="primary" clickable @mjo-chip:click=${this.#handleClick} startIcon=${AiOutlineEdit}></mjo-chip>
            <mjo-chip label="Settings" color="secondary" disabled clickable @mjo-chip:click=${this.#handleClick} endIcon=${AiOutlineSetting}></mjo-chip>
        `;
    }

    #handleClick = (event: MjoChipClickEvent) => {
        printLog({
            id: "chip-default",
            message: "Chip clicked",
            event,
        });
    };

    static styles = [
        css`
            :host {
                display: flex;
                flex-flow: row wrap;
                padding: var(--mjo-space-large) 0;
                gap: var(--mjo-space-large);
                align-items: center;
            }
        `,
    ];
}

declare global {
    interface HTMLElementTagNameMap {
        "chip-default": ChipDefault;
    }
}
