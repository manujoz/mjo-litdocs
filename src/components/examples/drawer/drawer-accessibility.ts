import { LitElement, css, html } from "lit";
import { customElement, query } from "lit/decorators.js";
import "mjo-litui/mjo-button";
import "mjo-litui/mjo-drawer";

@customElement("drawer-accessibility")
export class DrawerAccessibility extends LitElement {
    @query("mjo-drawer") drawer!: any;

    private openAccessibleDrawer() {
        this.drawer.controller.show({
            title: "Accessible Drawer",
            content: html`
                <div>
                    <p>This drawer demonstrates accessibility features:</p>
                    <ul>
                        <li>Focus is trapped within the drawer</li>
                        <li>Press Tab to navigate between focusable elements</li>
                        <li>Press Escape to close the drawer</li>
                        <li>Focus returns to the trigger button when closed</li>
                    </ul>
                    <input type="text" placeholder="Focusable input" />
                    <button>Focusable button</button>
                </div>
            `,
        });
    }

    render() {
        return html`
            <mjo-drawer label="Settings drawer" trapFocus restoreFocus closeOnEscape> </mjo-drawer>
            <mjo-button @click=${this.openAccessibleDrawer}> Open Accessible Drawer </mjo-button>
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
        "drawer-accessibility": DrawerAccessibility;
    }
}
