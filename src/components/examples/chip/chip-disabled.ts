import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-chip";

@customElement("chip-disabled")
export class ChipDisabled extends LitElement {
    render() {
        return html`
            <div class="disabled-group">
                <span class="disabled-label">Enabled:</span>
                <mjo-chip label="Enabled chip" color="primary"></mjo-chip>
            </div>
            <div class="disabled-group">
                <span class="disabled-label">Disabled:</span>
                <mjo-chip label="Disabled chip" color="primary" disabled></mjo-chip>
            </div>
            <div class="disabled-group">
                <span class="disabled-label">Disabled closable:</span>
                <mjo-chip label="Disabled closable" color="secondary" disabled closable></mjo-chip>
            </div>
            <div class="disabled-group">
                <span class="disabled-label">Disabled with icon:</span>
                <mjo-chip label="Disabled" color="success" disabled>
                    <svg slot="start-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"
                        />
                    </svg>
                </mjo-chip>
            </div>
        `;
    }

    static styles = [
        css`
            :host {
                display: flex;
                flex-direction: column;
                gap: 1rem;
            }
            .disabled-group {
                display: flex;
                align-items: center;
                gap: 1rem;
            }
            .disabled-label {
                width: 160px;
                font-weight: 500;
                color: var(--mjo-foreground-color-low);
            }
        `,
    ];
}
