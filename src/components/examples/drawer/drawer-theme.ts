import { LitElement, css, html } from "lit";
import { customElement, query } from "lit/decorators.js";
import "mjo-litui/mjo-button";
import "mjo-litui/mjo-drawer";
import "mjo-litui/mjo-theme";

const drawerTheme: any = {
    components: {
        mjoDrawer: {
            width: "650px",
            backgroundColor: "var(--mjo-primary-color)",
            backdropBackgroundColor: "rgba(46, 125, 50, 0.7)",
            closeIconColor: "white",
            focusOutlineColor: "var(--mjo-secondary-color)",
        },
    },
};

@customElement("drawer-theme")
export class DrawerTheme extends LitElement {
    @query("mjo-drawer") drawer!: any;

    private openThemedDrawer() {
        this.drawer.controller.show({
            title: "Theme Styled Drawer",
            content: html`
                <div class="themed-content">
                    <h3>Styled with Theme Interface</h3>
                    <p>This drawer is styled using the MjoTheme component with a structured theme configuration.</p>
                    <ul>
                        <li>Primary color background</li>
                        <li>Custom backdrop color</li>
                        <li>White close icon</li>
                        <li>Secondary color focus outline</li>
                    </ul>
                </div>
            `,
        });
    }

    render() {
        return html`
            <mjo-theme .config=${drawerTheme} scope="local">
                <mjo-drawer idDrawer="themed-drawer"></mjo-drawer>
                <mjo-button @click=${this.openThemedDrawer}>Open Theme Styled Drawer</mjo-button>
            </mjo-theme>
        `;
    }

    static styles = css`
        :host {
            display: block;
        }

        .themed-content {
            padding: 2rem;
            color: white;
        }

        .themed-content h3 {
            margin-top: 0;
            color: #e8f5e8;
        }

        .themed-content ul li {
            margin-bottom: 0.5rem;
        }
    `;
}

declare global {
    interface HTMLElementTagNameMap {
        "drawer-theme": DrawerTheme;
    }
}
