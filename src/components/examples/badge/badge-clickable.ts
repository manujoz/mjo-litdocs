import type { MjoBadgeClickEvent } from "mjo-litui/types/mjo-badge";

import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import { printLog } from "@/lib/logger";

import "mjo-litui/mjo-avatar";
import "mjo-litui/mjo-badge";

@customElement("badge-clickable")
export class BadgeClickable extends LitElement {
    render() {
        return html`
            <mjo-badge
                label="5"
                value="notifications"
                color="error"
                clickable
                show
                aria-label="5 new notifications, click to view"
                @mjo-badge:click=${this.#handleBadgeClick}
            >
                <mjo-avatar radius="large" src="https://i.pravatar.cc/150?img=16" name="Juliet"></mjo-avatar>
            </mjo-badge>
            <mjo-badge
                label="3"
                value="messages"
                color="primary"
                clickable
                show
                aria-label="3 new messages, click to view"
                @mjo-badge:click=${this.#handleBadgeClick}
            >
                <mjo-avatar radius="large" src="https://i.pravatar.cc/150?img=17" name="Bill"></mjo-avatar>
            </mjo-badge>
            <mjo-badge
                label="New"
                value="updates"
                color="success"
                clickable
                show
                aria-label="New updates available, click to view"
                @mjo-badge:click=${this.#handleBadgeClick}
            >
                <mjo-avatar radius="large" src="https://i.pravatar.cc/150?img=18" name="Jimmy"></mjo-avatar>
            </mjo-badge>
        `;
    }

    #handleBadgeClick(event: MjoBadgeClickEvent) {
        printLog({
            id: "badge-clickable-logger",
            message: event.detail,
            event,
        });
    }

    static styles = [
        css`
            :host {
                display: flex;
                gap: 2.5rem;
                align-items: center;
            }
        `,
    ];
}
