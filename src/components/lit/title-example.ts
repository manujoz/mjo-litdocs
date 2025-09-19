import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("title-example")
export class TitleExample extends LitElement {
    render() {
        return html`
            <h5>
                <slot></slot>
            </h5>
        `;
    }
    static styles = [
        css`
            :host {
                display: block;
            }
            h5 {
                margin: 0 0 12px 0;
                padding: 0;
                color: var(--mjo-foreground-color);
                font-size: 0.75rem;
                font-weight: 600;
            }
        `,
    ];
}

declare global {
    interface HTMLElementTagNameMap {
        "title-example": TitleExample;
    }
}
