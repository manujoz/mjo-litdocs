import type { MjoThemeConfig } from "mjo-litui/types/mjo-theme";

import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-badge";
import "mjo-litui/mjo-theme";

const badgeTheme: MjoThemeConfig = {
    components: {
        mjoBadge: {
            borderWidth: "3px",
            backgroundColor: "#f50bc2",
            color: "#a4fffa",
        },
    },
};

@customElement("badge-theme")
export class BadgeTheme extends LitElement {
    render() {
        return html`
            <mjo-theme .config=${badgeTheme}>
                <mjo-badge label="Custom" show>
                    <mjo-avatar radius="large" src="https://i.pravatar.cc/150?img=15" name="Jimmy"></mjo-avatar>
                </mjo-badge>
                <mjo-badge label="5" color="error" show>
                    <mjo-avatar radius="large" src="https://i.pravatar.cc/150?img=15" name="Jimmy"></mjo-avatar>
                </mjo-badge>
            </mjo-theme>
        `;
    }

    static styles = [
        css`
            :host {
                display: block;
            }
            mjo-theme {
                display: flex;
                gap: 2.5rem;
                align-items: center;
            }
        `,
    ];
}
