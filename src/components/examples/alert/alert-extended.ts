import { css, html, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";

import { MjoAlert } from "mjo-litui/mjo-alert";

import { AiOutlineAlert, AiOutlineCheck, AiOutlineClose, AiOutlineInfo, AiOutlineWarning } from "mjo-icons/ai";

@customElement("alert-extended")
export class AlertExtended extends MjoAlert {
    @property({ type: String }) type: "info" | "success" | "warning" | "error" = "info";

    animation: MjoAlert["animation"] = "scale";

    render() {
        return html`
            <div class="container" data-type=${this.type}>
                <div part="icon-container" class="icon-container">
                    <mjo-icon class="icon" src=${this.computedIcon} exportparts="icon"></mjo-icon>
                </div>
                <div class="message" part="message">
                    <slot></slot>
                </div>
                ${this.closable
                    ? html`
                          <button part="close-button" class="close-button" @click=${this.#handleClose} aria-label="Close">
                              <mjo-icon src=${AiOutlineClose} exportparts="icon: close-icon"></mjo-icon>
                          </button>
                      `
                    : nothing}
            </div>
        `;
    }

    get computedIcon() {
        switch (this.type) {
            case "error":
                return AiOutlineAlert;
            case "warning":
                return AiOutlineWarning;
            case "success":
                return AiOutlineCheck;
            default:
                return AiOutlineInfo;
        }
    }

    #handleClose = () => {
        this.hide();
    };

    static styles = [
        css`
            :host {
                display: block;
            }
            .container {
                position: relative;
                display: flex;
                padding: 1rem;
                align-items: center;
                gap: var(--mjo-space-medium);
                background-color: var(--mjo-background-color-card);
                border-radius: 0 var(--mjo-radius-large) var(--mjo-radius-large) 0;
                border-left: 6px solid var(--mjo-color-info);
            }
            .icon-container {
                display: flex;
                align-items: center;
                background-color: var(--mjo-color-info);
                border-radius: var(--mjo-radius-medium);
            }
            .icon {
                width: 28px;
                aspect-ratio: 1;
                font-size: 24px;
                display: grid;
                place-items: center;
            }
            .message {
                position: relative;
                flex: 1 1 0;
            }
            button {
                width: 28px;
                aspect-ratio: 1;
                border: none;
                background-color: transparent;
                color: var(--mjo-foreground-color);
                cursor: pointer;
                display: grid;
                place-items: center;
                padding: 0;
                font-size: 1.25rem;
                transition: background-color 0.3s ease-in-out;
                border-radius: var(--mjo-radius-medium);
            }
            button:hover {
                background-color: color-mix(in srgb, var(--mjo-color-info) 20%, transparent);
            }
            [data-type="success"] {
                border-left-color: var(--mjo-color-success);
            }
            [data-type="success"] .icon-container {
                background-color: var(--mjo-color-success);
            }
            [data-type="success"] button:hover {
                background-color: color-mix(in srgb, var(--mjo-color-success) 20%, transparent);
            }
            [data-type="error"] {
                border-left-color: var(--mjo-color-error);
            }
            [data-type="error"] .icon-container {
                background-color: var(--mjo-color-error);
            }
            [data-type="error"] button:hover {
                background-color: color-mix(in srgb, var(--mjo-color-error) 20%, transparent);
            }
            [data-type="warning"] {
                border-left-color: var(--mjo-color-warning);
            }
            [data-type="warning"] .icon-container {
                background-color: var(--mjo-color-warning);
            }
            [data-type="warning"] button:hover {
                background-color: color-mix(in srgb, var(--mjo-color-warning) 20%, transparent);
            }
        `,
    ];
}

declare global {
    interface HTMLElementTagNameMap {
        "alert-extended": AlertExtended;
    }
}
