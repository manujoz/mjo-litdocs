import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-chip";

@customElement("chip-avatars")
export class ChipAvatars extends LitElement {
    render() {
        return html`
            <div class="avatar-group">
                <span class="avatar-label">User avatar:</span>
                <mjo-chip label="John Doe" color="primary">
                    <img slot="start-icon" src="/img/users/150.png" alt="John Doe" class="avatar" />
                </mjo-chip>
            </div>
            <div class="avatar-group">
                <span class="avatar-label">Initials avatar:</span>
                <mjo-chip label="Jane Smith" color="secondary">
                    <div slot="start-icon" class="avatar-initials">JS</div>
                </mjo-chip>
            </div>
            <div class="avatar-group">
                <span class="avatar-label">Small with avatar:</span>
                <mjo-chip label="Alice" color="success" size="sm">
                    <img slot="start-icon" src="/img/users/150.png" alt="Alice" class="avatar small" />
                </mjo-chip>
            </div>
            <div class="avatar-group">
                <span class="avatar-label">Large with avatar:</span>
                <mjo-chip label="Bob Wilson" color="warning" size="lg">
                    <img slot="start-icon" src="/img/users/150.png" alt="Bob Wilson" class="avatar large" />
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
            .avatar-group {
                display: flex;
                align-items: center;
                gap: 1rem;
            }
            .avatar-label {
                width: 140px;
                font-weight: 500;
                color: var(--mjo-foreground-color-low);
            }
            .avatar {
                width: 20px;
                height: 20px;
                border-radius: 50%;
                object-fit: cover;
            }
            .avatar.small {
                width: 16px;
                height: 16px;
            }
            .avatar.large {
                width: 24px;
                height: 24px;
            }
            .avatar-initials {
                width: 20px;
                height: 20px;
                border-radius: 50%;
                background: var(--mjo-secondary-color);
                color: var(--mjo-secondary-color-text);
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 10px;
                font-weight: 600;
            }
        `,
    ];
}
