import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-badge";

@customElement("badge-offset")
export class BadgeOffset extends LitElement {
    render() {
        return html`
            <div style="display: flex; gap: 3rem; align-items: center;">
                <mjo-badge label="0" offsetx="0" offsety="0" show>
                    <div class="demo-box">No Offset</div>
                </mjo-badge>

                <mjo-badge label="X" offsetx="10" offsety="0" show>
                    <div class="demo-box">X Offset</div>
                </mjo-badge>

                <mjo-badge label="Y" offsetx="0" offsety="10" show>
                    <div class="demo-box">Y Offset</div>
                </mjo-badge>

                <mjo-badge label="XY" offsetx="8" offsety="8" show>
                    <div class="demo-box">Both Offset</div>
                </mjo-badge>
            </div>
        `;
    }

    static styles = [
        css`
            .demo-box {
                width: 80px;
                height: 60px;
                background: #f0f0f0;
                border: 1px solid #ddd;
                border-radius: 0.5rem;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 0.75rem;
                color: #666;
            }
        `,
    ];
}
