import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("drawer-app")
export class DrawerApp extends LitElement {
    render() {
        return html`<slot></slot>`;
    }

    static styles = [
        css`
            :host {
                display: block;
            }
        `,
    ];

    createRenderRoot() {
        return this;
    }
}
