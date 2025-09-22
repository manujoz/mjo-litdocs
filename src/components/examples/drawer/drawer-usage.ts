import type { MjoDrawer } from "mjo-litui/mjo-drawer";

import { LitElement, css, html } from "lit";
import { customElement, query } from "lit/decorators.js";

import "mjo-litui/mjo-button";
import "mjo-litui/mjo-drawer";

@customElement("drawer-usage")
export class DrawerUsage extends LitElement {
    @query("mjo-drawer") drawer!: MjoDrawer;

    test = "Hello";

    private openBasicDrawer() {
        this.drawer.controller.show({
            title: "Basic Drawer",
            onClose() {
                console.log("Drawer closed!");
            },
            content: html`
                <div style="padding: var(--mjo-space-small);">
                    <div>This is a basic drawer with simple content.</div>
                    <div @click=${this.#handleClick}>You can add any HTML content here.</div>
                </div>
            `,
        });
    }

    #handleClick = () => {
        console.log("Drawer content clicked!", this.test);
    };

    render() {
        return html`
            <mjo-drawer></mjo-drawer>
            <mjo-button @click=${this.openBasicDrawer}>Open Basic Drawer</mjo-button>
        `;
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
