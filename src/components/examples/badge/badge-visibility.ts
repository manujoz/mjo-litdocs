import { LitElement, css, html } from "lit";
import { customElement, state } from "lit/decorators.js";

import "mjo-litui/mjo-badge";

@customElement("badge-visibility")
export class BadgeVisibility extends LitElement {
    @state()
    private badgeVisible = true;

    private toggleBadge() {
        this.badgeVisible = !this.badgeVisible;

        const badge = this.shadowRoot?.querySelector("mjo-badge");
        if (badge) {
            if (this.badgeVisible) {
                (badge as any).showBadge();
            } else {
                (badge as any).hideBadge();
            }
        }
    }

    render() {
        return html`
            <div style="display: flex; gap: 2rem; align-items: center;">
                <mjo-badge label="5" ?show="${this.badgeVisible}">
                    <button>Messages</button>
                </mjo-badge>

                <button @click=${this.toggleBadge} class="toggle-btn">${this.badgeVisible ? "Hide Badge" : "Show Badge"}</button>
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

            .toggle-btn {
                background: #007acc;
                color: white;
                border-color: #007acc;
            }

            .toggle-btn:hover {
                background: #005a9e;
            }
        `,
    ];
}
