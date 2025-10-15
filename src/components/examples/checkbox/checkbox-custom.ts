import { css, html } from "lit";
import { customElement } from "lit/decorators.js";

import { MjoCheckbox } from "mjo-litui/mjo-checkbox";

import "mjo-litui/mjo-avatar";
import "mjo-litui/mjo-card";
import "mjo-litui/mjo-typography";

@customElement("checkbox-custom")
export class CheckboxCustom extends MjoCheckbox {
    render() {
        return html`
            <mjo-card space="medium" radius="large" ?data-checked=${this.checked} @click=${this.click}>
                <div class="container">
                    <div class="avatar">
                        <mjo-avatar src="https://i.pravatar.cc/150?img=33" name="John Doe" radius="medium"></mjo-avatar>
                    </div>
                    <div class="content">
                        <mjo-typography tag="h4" size="base" weight="medium">John Doe</mjo-typography>
                        <mjo-typography tag="p" size="body2" weight="light">Software engineering</mjo-typography>
                    </div>
                </div>
            </mjo-card>
        `;
    }

    static styles = [
        css`
            :host {
                display: inline-block;
            }
            mjo-card {
                min-height: auto;
                cursor: pointer;
            }
            mjo-card::part(container) {
                transition: background-color 0.2s ease-in-out;
            }
            mjo-card::part(container):hover {
                background-color: var(--mjo-background-color-card-high);
            }
            mjo-card[data-checked]::part(container) {
                background-color: color-mix(in srgb, var(--mjo-primary-color) 15%, var(--mjo-background-color-card));
                color: var(--mjo-primary-color);
            }
            .container {
                display: flex;
                align-items: center;
                gap: var(--mjo-space-medium);
            }
            .avatar {
                position: relative;
                flex: 0 1 auto;
            }
            .content {
                position: relative;
                flex: 1 1 0;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                transition: color 0.2s ease-in-out;
                user-select: none;
            }
        `,
    ];
}
