import { LitElement, css, html } from "lit";
import { customElement, query } from "lit/decorators.js";
import "mjo-litui/mjo-button";
import "mjo-litui/mjo-drawer";

@customElement("drawer-css-parts")
export class DrawerCssParts extends LitElement {
    @query("mjo-drawer") drawer!: any;

    private openPartsStyledDrawer() {
        this.drawer.controller.show({
            title: "CSS Parts Styled Drawer",
            width: 550,
            content: html`
                <div class="parts-content">
                    <h3>Styled with CSS Parts</h3>
                    <p>This drawer demonstrates styling using CSS parts for granular control over individual elements.</p>
                    <ul>
                        <li>Custom backdrop with blur effect</li>
                        <li>Styled container with rounded corners</li>
                        <li>Custom title styling</li>
                        <li>Themed close button</li>
                    </ul>
                </div>
            `,
        });
    }

    render() {
        return html`
            <mjo-drawer idDrawer="parts-styled-drawer"></mjo-drawer>
            <mjo-button @click=${this.openPartsStyledDrawer}>Open CSS Parts Styled Drawer</mjo-button>
        `;
    }

    static styles = css`
        :host {
            display: block;
        }

        /* Styling using CSS parts */
        #parts-styled-drawer::part(backdrop) {
            background-color: rgba(139, 69, 19, 0.6);
            backdrop-filter: blur(10px);
        }

        #parts-styled-drawer::part(container) {
            border-radius: 1rem;
            border: 2px solid #8b4513;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);
        }

        #parts-styled-drawer::part(title) {
            background: linear-gradient(90deg, #8b4513, #a0522d);
            color: white;
            padding: 1.5rem;
            margin: 0;
            border-radius: 1rem 1rem 0 0;
        }

        #parts-styled-drawer::part(close-button) {
            background-color: rgba(255, 255, 255, 0.2);
            border-radius: 50%;
            color: white;
            border: 2px solid rgba(255, 255, 255, 0.3);
            transition: all 0.2s;
        }

        #parts-styled-drawer::part(close-button):hover {
            background-color: rgba(255, 255, 255, 0.3);
            transform: scale(1.1);
        }

        #parts-styled-drawer::part(content) {
            background: linear-gradient(180deg, #f4f3f0 0%, #ffffff 100%);
        }

        .parts-content {
            padding: 2rem;
            color: #5d4e37;
        }

        .parts-content h3 {
            margin-top: 0;
            color: #8b4513;
        }
    `;
}

declare global {
    interface HTMLElementTagNameMap {
        "drawer-css-parts": DrawerCssParts;
    }
}
