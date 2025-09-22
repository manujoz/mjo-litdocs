import { LitElement, css, html } from "lit";
import { customElement, query } from "lit/decorators.js";
import "mjo-litui/mjo-button";
import "mjo-litui/mjo-drawer";

@customElement("drawer-positions")
export class DrawerPositions extends LitElement {
    @query("mjo-drawer") drawer!: any;

    private openDrawer(position: "top" | "right" | "bottom" | "left") {
        this.drawer.controller.show({
            title: `${position.charAt(0).toUpperCase() + position.slice(1)} Drawer`,
            position,
            content: html`<p>This drawer slides from the ${position}.</p>`,
        });
    }

    render() {
        return html`
            <mjo-drawer></mjo-drawer>
            <div class="buttons">
                <mjo-button @click=${() => this.openDrawer("top")}>Top</mjo-button>
                <mjo-button @click=${() => this.openDrawer("right")}>Right</mjo-button>
                <mjo-button @click=${() => this.openDrawer("bottom")}>Bottom</mjo-button>
                <mjo-button @click=${() => this.openDrawer("left")}>Left</mjo-button>
            </div>
        `;
    }

    static styles = css`
        :host {
            display: block;
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
        "drawer-positions": DrawerPositions;
    }
}
