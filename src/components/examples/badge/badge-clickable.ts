import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-badge";

@customElement("badge-clickable")
export class BadgeClickable extends LitElement {
    private handleBadgeClick(event: CustomEvent) {
        const { value, label, color } = event.detail;
        console.log("Badge clicked:", { value, label, color });

        // Add to logger if available
        const logger = document.querySelector("#badge-clickable-logger");
        if (logger && "addLog" in logger) {
            (logger as any).addLog(`Badge clicked: ${label} (${value}) - Color: ${color}`);
        }
    }

    render() {
        return html`
            <div style="display: flex; gap: 2rem; align-items: center;">
                <mjo-badge
                    label="5"
                    value="notifications"
                    color="error"
                    clickable
                    show
                    aria-label="5 new notifications, click to view"
                    @mjo-badge:click=${this.handleBadgeClick}
                >
                    <button>Notifications</button>
                </mjo-badge>

                <mjo-badge
                    label="3"
                    value="messages"
                    color="primary"
                    clickable
                    show
                    aria-label="3 new messages, click to view"
                    @mjo-badge:click=${this.handleBadgeClick}
                >
                    <button>Messages</button>
                </mjo-badge>

                <mjo-badge
                    label="New"
                    value="updates"
                    color="success"
                    clickable
                    show
                    aria-label="New updates available, click to view"
                    @mjo-badge:click=${this.handleBadgeClick}
                >
                    <button>Updates</button>
                </mjo-badge>
            </div>
        `;
    }

    static styles = [
        css`
            button {
                padding: 0.5rem 1rem;
                border: 1px solid #ccc;
                border-radius: 0.25rem;
                background: white;
                cursor: pointer;
                font-size: 0.875rem;
            }

            button:hover {
                background: #f5f5f5;
            }
        `,
    ];
}
