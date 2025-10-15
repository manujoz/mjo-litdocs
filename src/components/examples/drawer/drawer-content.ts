import { LitElement, css, html } from "lit";
import { customElement, query, state } from "lit/decorators.js";
import "mjo-litui/mjo-button";
import "mjo-litui/mjo-drawer";

@customElement("drawer-content")
export class DrawerContent extends LitElement {
    @query("mjo-drawer") drawer!: any;
    @state() counter = 0;

    private openInteractiveDrawer() {
        this.drawer.controller.show({
            title: "Interactive Drawer",
            width: 500,
            content: html`
                <div class="drawer-content">
                    <h3>Interactive Content</h3>
                    <p>Current counter: <strong>${this.counter}</strong></p>
                    <div class="actions">
                        <mjo-button @click=${() => this.counter++}>Increment</mjo-button>
                        <mjo-button @click=${() => this.counter--}>Decrement</mjo-button>
                        <mjo-button @click=${() => (this.counter = 0)}>Reset</mjo-button>
                    </div>
                    <p>This content is reactive and updates in real-time!</p>
                </div>
            `,
        });
    }

    render() {
        return html`
            <mjo-drawer></mjo-drawer>
            <mjo-button @click=${this.openInteractiveDrawer}>Open Interactive Drawer</mjo-button>
        `;
    }

    static styles = css`
        :host {
            display: block;
        }
        .drawer-content {
            padding: 1rem;
        }
        .actions {
            display: flex;
            gap: 0.5rem;
            margin: 1rem 0;
        }
    `;
}

declare global {
    interface HTMLElementTagNameMap {
        "drawer-content": DrawerContent;
    }
}
