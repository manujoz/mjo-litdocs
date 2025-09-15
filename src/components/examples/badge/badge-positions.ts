import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-badge";

@customElement("badge-positions")
export class BadgePositions extends LitElement {
    render() {
        return html`
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 3rem;">
                <mjo-badge label="TR" position="top-right" show>
                    <div class="demo-box">Top Right</div>
                </mjo-badge>

                <mjo-badge label="TL" position="top-left" show>
                    <div class="demo-box">Top Left</div>
                </mjo-badge>

                <mjo-badge label="BR" position="bottom-right" show>
                    <div class="demo-box">Bottom Right</div>
                </mjo-badge>

                <mjo-badge label="BL" position="bottom-left" show>
                    <div class="demo-box">Bottom Left</div>
                </mjo-badge>
            </div>
        `;
    }

    static styles = [
        css`
            .demo-box {
                width: 100px;
                height: 80px;
                background: #f0f0f0;
                border: 1px solid #ddd;
                border-radius: 0.5rem;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 0.875rem;
                color: #666;
            }
        `,
    ];
}
