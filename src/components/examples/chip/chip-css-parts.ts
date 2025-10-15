import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-chip";

import { AiOutlineBook } from "mjo-icons/ai";

@customElement("chip-css-parts")
export class ChipCssParts extends LitElement {
    render() {
        return html`<mjo-chip label="CSS Parts" color="primary" startIcon=${AiOutlineBook} closable></mjo-chip>`;
    }

    static styles = [
        css`
            :host {
                display: block;
                padding: var(--mjo-space-large) 0;
            }
            mjo-chip::part(container) {
                background: linear-gradient(135deg, #992929, #da5858);
                font-size: 1.2rem;
                padding-right: 10px;
                border: solid 2px orange;
            }
            mjo-chip::part(label) {
                color: #e6e79b;
                font-style: italic;
            }
            mjo-chip::part(start-icon),
            mjo-chip::part(close-icon) {
                color: orange;
            }
        `,
    ];
}
