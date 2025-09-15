import type { MjoThemeConfig } from "mjo-litui/types/mjo-theme";

import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import { AiOutlineUser } from "mjo-icons/ai";

import "mjo-litui/mjo-avatar";
import "mjo-litui/mjo-theme";

const config: MjoThemeConfig = {
    components: {
        mjoAvatar: {
            backgroundColor:
                "linear-gradient(130deg,rgba(23, 170, 193, 1) 0%, rgba(35, 144, 161, 1) 5%, rgba(26, 114, 131, 1) 14%, rgba(17, 81, 97, 1) 25%, rgba(5, 56, 72, 1) 41%, rgba(0, 46, 61, 1) 56%, rgba(29, 38, 65, 1) 72%, rgba(50, 32, 68, 1) 85%, rgba(88, 22, 74, 1) 100%);",
            sizeMedium: "80px",
            borderWidth: "3px",
            fallbackSizeMedium: "50px",
            fallbackColor: "#fafafa",
        },
    },
};

@customElement("avatar-cssvars")
export class AvatarCssvars extends LitElement {
    render() {
        return html`
            <mjo-avatar class="cssvars" bordered color="primary" fallbackIcon=${AiOutlineUser} name="Josh Williams"></mjo-avatar>
            <mjo-avatar class="cssparts" bordered color="secondary" src="https://i.pravatar.cc/150?img=8" name="Josh Williams"></mjo-avatar>
            <mjo-theme .config=${config}>
                <mjo-avatar bordered color="default" fallbackIcon=${AiOutlineUser} name="Josh Williams"></mjo-avatar>
            </mjo-theme>
        `;
    }

    static styles = [
        css`
            :host {
                display: block;
                display: flex;
                flex-flow: row wrap;
                gap: var(--mjo-space-medium);
                align-items: center;
            }
            .cssvars {
                --mjo-avatar-border-width: 6px;
                --mjo-avatar-size-medium: 80px;
                --mjo-avatar-fallback-size-medium: 50px;
                --mjo-avatar-background-color: #353535;
                --mjo-avatar-fallback-color: var(--mjo-secondary-color);
            }
            .cssparts::part(container) {
                width: 74px;
                height: 74px;
                border-radius: 0 10px 0 10px;
                border-color: #cc31aa;
                border-width: 4px;
            }
            .cssparts::part(image-container) {
                border-radius: 0 6px 0 6px;
            }
        `,
    ];
}

declare global {
    interface HTMLElementTagNameMap {
        "avatar-cssvars": AvatarCssvars;
    }
}
