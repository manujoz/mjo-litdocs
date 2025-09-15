import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-badge";
import "mjo-litui/mjo-theme";

const badgeTheme = {
    components: {
        mjoBadge: {
            borderWidth: "3px",
            animationDuration: "0.3s",
            focusOutlineWidth: "3px",
        },
    },
};

@customElement("badge-theme")
export class BadgeTheme extends LitElement {
    render() {
        return html`
            <mjo-theme .theme=${badgeTheme}>
                <div style="display: flex; gap: 2rem; align-items: center;">
                    <mjo-badge label="Custom" show>
                        <button>Themed Badge</button>
                    </mjo-badge>

                    <mjo-badge label="5" color="error" clickable show>
                        <button>Clickable Themed</button>
                    </mjo-badge>
                </div>
            </mjo-theme>
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
