import type { MjoBadge } from "mjo-litui/mjo-badge";
import type { MjoButton } from "mjo-litui/mjo-button";

import { LitElement, css, html } from "lit";
import { customElement, query, state } from "lit/decorators.js";

import "mjo-litui/mjo-avatar";
import "mjo-litui/mjo-badge";
import "mjo-litui/mjo-button";

@customElement("badge-visibility")
export class BadgeVisibility extends LitElement {
    @state() private badgeVisible = true;

    @query("mjo-badge") private $badge!: MjoBadge;

    render() {
        return html`
            <mjo-badge label="5" color="error" ?show=${this.badgeVisible}>
                <mjo-avatar radius="large" src="https://i.pravatar.cc/150?img=16" name="Juliet"></mjo-avatar>
            </mjo-badge>
            <mjo-button variant=${this.#variant} @mjo-button:click=${this.#toggleBadge}>${this.#label}</mjo-button>
        `;
    }

    get #variant(): MjoButton["variant"] {
        return this.badgeVisible ? "default" : "ghost";
    }

    get #label() {
        return this.badgeVisible ? "Hide Badge" : "Show Badge";
    }

    #toggleBadge() {
        this.badgeVisible = !this.badgeVisible;

        if (this.badgeVisible) {
            this.$badge?.showBadge();
        } else {
            this.$badge?.hideBadge();
        }
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
