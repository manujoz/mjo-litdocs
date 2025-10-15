import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import type { MjoChipClickEvent, MjoChipCloseEvent } from "mjo-litui/types/mjo-chip";

import { printLog } from "@/lib/logger";

import "mjo-litui/mjo-chip";

@customElement("chip-interactive")
export class ChipInteractive extends LitElement {
    render() {
        return html`
            <mjo-chip label="Clickable" color="primary" value="clickable" clickable @mjo-chip:click=${this.#handleClick}></mjo-chip>
            <mjo-chip label="Closable" color="secondary" value="closable" closable @mjo-chip:close=${this.#handleClose}></mjo-chip>
        `;
    }

    #handleClick = (event: MjoChipClickEvent) => {
        printLog({
            id: "chip-interactive",
            message: "Chip clicked with value: " + event.detail.value,
            event,
        });
    };

    #handleClose = (event: MjoChipCloseEvent) => {
        printLog({
            id: "chip-interactive",
            message: "Chip closed with value: " + event.detail.value,
            event,
        });

        setTimeout(() => {
            const chip = document.createElement("mjo-chip");
            chip.label = "Closable";
            chip.color = "secondary";
            chip.value = "closable";
            chip.closable = true;
            chip.addEventListener("mjo-chip:close", this.#handleClose);
            this.renderRoot.appendChild(chip);
        }, 1500);
    };

    static styles = [
        css`
            :host {
                display: flex;
                padding: var(--mjo-space-large) 0;
                gap: var(--mjo-space-medium);
            }
        `,
    ];
}
