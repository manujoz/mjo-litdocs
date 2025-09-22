import { LitElement, css, html } from "lit";
import { customElement, query } from "lit/decorators.js";

import "mjo-litui/mjo-drawer";
import "./drawer-blocked-content";

@customElement("drawer-blocked")
export class DrawerBlocked extends LitElement {
    @query("mjo-drawer") drawer!: any;

    render() {
        return html`
            <mjo-drawer></mjo-drawer>
            <mjo-button @click=${this.#openBlockedDrawer}>Open Blocked Drawer</mjo-button>
        `;
    }

    #openBlockedDrawer() {
        this.drawer.controller.show({
            blocked: true,
            content: html`<drawer-blocked-content @mjo-button:click=${() => this.drawer.controller.close()}></drawer-blocked-content>`,
        });
    }

    static styles = css`
        :host {
            display: block;
        }
        mjo-drawer {
            z-index: 20;
        }
    `;
}
