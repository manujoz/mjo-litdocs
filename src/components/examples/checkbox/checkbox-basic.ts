import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-checkbox";

@customElement("checkbox-basic")
export class CheckboxBasic extends LitElement {
    render() {
        return html`
            <mjo-checkbox name="terms" value="accepted" label="I accept the terms and conditions"></mjo-checkbox>
            <mjo-checkbox name="newsletter" value="subscribe" label="Subscribe to newsletter" checked></mjo-checkbox>
            <mjo-checkbox name="notifications" value="enabled" label="Enable notifications"></mjo-checkbox>
        `;
    }

    static styles = [
        css`
            :host {
                padding: var(--mjo-space-large) 0;
                display: flex;
                flex-direction: column;
                gap: var(--mjo-space-large);
            }
        `,
    ];
}
