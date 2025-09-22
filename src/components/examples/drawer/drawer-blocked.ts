import { LitElement, css, html } from "lit";
import { customElement, query } from "lit/decorators.js";
import "mjo-litui/mjo-button";
import "mjo-litui/mjo-drawer";

@customElement("drawer-blocked")
export class DrawerBlocked extends LitElement {
    @query("mjo-drawer") drawer!: any;

    private openBlockedDrawer() {
        this.drawer.controller.show({
            title: "Blocked Drawer",
            blocked: true,
            content: html`
                <p>This drawer is blocked and cannot be closed by clicking outside or using the X button.</p>
                <p>You must use the close button below to close it.</p>
                <mjo-button @click=${() => this.drawer.controller.close()}>Close Drawer</mjo-button>
            `,
        });
    }

    render() {
        return html`
            <mjo-drawer></mjo-drawer>
            <mjo-button @click=${this.openBlockedDrawer}>Open Blocked Drawer</mjo-button>
        `;
    }

    static styles = css`
        :host {
            display: block;
        }
    `;
}

declare global {
    interface HTMLElementTagNameMap {
        "drawer-blocked": DrawerBlocked;
    }
}
