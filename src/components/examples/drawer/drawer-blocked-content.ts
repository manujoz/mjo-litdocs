import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("drawer-blocked-content")
export class DrawerBlockedContent extends LitElement {
    render() {
        return html`
            <div class="container">
                <mjo-typography tag="h2" size="heading2" color="secondary" weight="bold">Blocked drawer</mjo-typography>
                <mjo-typography tag="p" size="base">
                    This drawer is blocked and can only be closed programmatically by pressing the close button.
                </mjo-typography>
            </div>
            <div class="actions">
                <mjo-button fullwidth>CLOSE DRAWER</mjo-button>
            </div>
        `;
    }

    static styles = [
        css`
            :host {
                flex: 1 1 0;
                display: flex;
                flex-direction: column;
                gap: 1rem;
            }
            .container {
                position: relative;
                flex: 1 1 0;
                padding: var(--mjo-space-small);
            }
            mjo-button::part(button) {
                border-radius: 0;
            }
        `,
    ];
}

declare global {
    interface HTMLElementTagNameMap {
        "drawer-blocked-content": DrawerBlockedContent;
    }
}
