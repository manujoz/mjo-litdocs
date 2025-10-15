import type { MjoButtonClickEvent, MjoButtonToggleEvent } from "mjo-litui/types/mjo-button";

import { LitElement, css, html } from "lit";
import { customElement, state } from "lit/decorators.js";

import { printLog } from "@/lib/logger";
import { TbDownload } from "mjo-icons/tb";

import "mjo-litui/mjo-button";

@customElement("button-interactive")
export class ButtonInteractive extends LitElement {
    @state() private loading = false;
    @state() private count = 0;

    render() {
        return html`
            <mjo-button color="primary" .loading=${this.loading} @mjo-button:click=${this.#handleClick}>
                ${this.loading ? "Processing..." : `Clicked ${this.count} times`}
            </mjo-button>
            <mjo-button color="secondary" toggleable button-label="Toggle notifications" @mjo-button:toggle=${this.#handleToggle}>Notifications</mjo-button>
            <mjo-button color="success" variant="flat" startIcon=${TbDownload} @mjo-button:click=${this.#handleDownload}>Download File</mjo-button>
        `;
    }

    #handleClick() {
        this.loading = true;
        this.count++;
        setTimeout(() => (this.loading = false), 1000);
    }

    #handleToggle(e: MjoButtonToggleEvent) {
        printLog({
            id: "button-interactive-logger",
            message: `Toggle state: ${e.detail.pressed}`,
            event: e,
        });
    }

    #handleDownload(e: MjoButtonClickEvent) {
        printLog({
            id: "button-interactive-logger",
            message: "Download started!",
            event: e,
        });
    }

    static styles = [
        css`
            :host {
                display: flex;
                flex-wrap: wrap;
                gap: 1rem;
                align-items: center;
            }
        `,
    ];
}
