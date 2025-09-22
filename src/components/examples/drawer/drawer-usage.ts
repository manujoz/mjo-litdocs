import type { MjoDrawer } from "mjo-litui/mjo-drawer";

import { LitElement, css, html } from "lit";
import { customElement, query } from "lit/decorators.js";

import "mjo-litui/mjo-button";
import "mjo-litui/mjo-drawer";

@customElement("drawer-usage")
export class DrawerUsage extends LitElement {
    @query("mjo-drawer") drawer!: MjoDrawer;

    render() {
        return html`
            <mjo-drawer></mjo-drawer>
            <mjo-button @click=${this.#openBasicDrawer}>Open Basic Drawer</mjo-button>
        `;
    }

    #openBasicDrawer() {
        this.drawer.controller.show({
            title: "Basic Drawer",
            content: html`
                <div style="padding: var(--mjo-space-small);">
                    <div>This is a basic drawer with simple content.</div>
                    <div>You can add any HTML content here.</div>
                </div>
            `,
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
