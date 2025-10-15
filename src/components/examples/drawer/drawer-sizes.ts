import type { MjoDrawer } from "mjo-litui/mjo-drawer";

import { LitElement, css, html } from "lit";
import { customElement, query } from "lit/decorators.js";

import "mjo-litui/mjo-button";
import "mjo-litui/mjo-drawer";

@customElement("drawer-sizes")
export class DrawerSizes extends LitElement {
    @query("mjo-drawer") drawer!: MjoDrawer;

    render() {
        return html`
            <mjo-drawer></mjo-drawer>
            <div class="buttons">
                <mjo-button @click=${this.#openSmallDrawer}>Small (300px)</mjo-button>
                <mjo-button @click=${this.#openLargeDrawer}>Large (800px)</mjo-button>
                <mjo-button @click=${this.#openTallDrawer}>Tall (400px)</mjo-button>
            </div>
        `;
    }

    #openSmallDrawer() {
        this.drawer.controller.show({
            title: "Small Drawer",
            width: 300,
            content: html`<p>This is a small drawer (300px wide).</p>`,
        });
    }

    #openLargeDrawer() {
        this.drawer.controller.show({
            title: "Large Drawer",
            width: 800,
            content: html`<p>This is a large drawer (800px wide).</p>`,
        });
    }

    #openTallDrawer() {
        this.drawer.controller.show({
            title: "Tall Drawer",
            position: "bottom",
            height: 400,
            content: html`<p>This is a tall drawer from bottom (400px high).</p>`,
        });
    }

    static styles = css`
        :host {
            display: block;
        }
        mjo-drawer {
            z-index: 20;
        }
        .buttons {
            display: flex;
            gap: 0.5rem;
            flex-wrap: wrap;
        }
    `;
}

declare global {
    interface HTMLElementTagNameMap {
        "drawer-sizes": DrawerSizes;
    }
}
