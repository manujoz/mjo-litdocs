import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-badge";

@customElement("badge-variants")
export class BadgeVariants extends LitElement {
    render() {
        return html`
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem;">
                <mjo-badge label="5" variant="solid" show>
                    <div class="demo-box">Solid</div>
                </mjo-badge>

                <mjo-badge label="2" variant="flat" show>
                    <div class="demo-box">Flat</div>
                </mjo-badge>

                <mjo-badge label="8" variant="ghost" show>
                    <div class="demo-box">Ghost</div>
                </mjo-badge>

                <mjo-badge label="!" variant="brilliant" show>
                    <div class="demo-box">Brilliant</div>
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
                font-size: 0.875rem;
                color: #666;
            }
        `,
    ];
}
