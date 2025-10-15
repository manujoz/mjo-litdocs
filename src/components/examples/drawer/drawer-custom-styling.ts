import { LitElement, css, html } from "lit";
import { customElement, query } from "lit/decorators.js";
import "mjo-litui/mjo-button";
import "mjo-litui/mjo-drawer";

@customElement("drawer-custom-styling")
export class DrawerCustomStyling extends LitElement {
    @query("mjo-drawer") drawer!: any;

    private openStyledDrawer() {
        this.drawer.controller.show({
            title: "Custom Styled Drawer",
            width: 600,
            content: html`
                <div class="styled-content">
                    <h3>Custom Styling with CSS Variables</h3>
                    <p>This drawer has been customized using CSS variables to change its appearance.</p>
                    <ul>
                        <li>Custom background color</li>
                        <li>Custom border radius</li>
                        <li>Custom backdrop color</li>
                        <li>Custom shadow</li>
                    </ul>
                </div>
            `,
        });
    }

    render() {
        return html`
            <mjo-drawer idDrawer="custom-styled-drawer"></mjo-drawer>
            <mjo-button @click=${this.openStyledDrawer}>Open Custom Styled Drawer</mjo-button>
        `;
    }

    static styles = css`
        :host {
            display: block;
        }

        /* Custom styling for the drawer */
        #custom-styled-drawer {
            --mjo-drawer-background-color: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            --mjo-drawer-backdrop-background-color: rgba(0, 0, 0, 0.8);
            --mjo-drawer-box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }

        .styled-content {
            padding: 2rem;
            color: white;
        }

        .styled-content h3 {
            margin-top: 0;
            color: #f0f8ff;
        }
    `;
}

declare global {
    interface HTMLElementTagNameMap {
        "drawer-custom-styling": DrawerCustomStyling;
    }
}
