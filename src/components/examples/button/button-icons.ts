import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import { AiOutlineAlert, AiOutlineBars, AiOutlineBranches, AiOutlineDownload, AiOutlineLink } from "mjo-icons/ai";

import "mjo-litui/mjo-button";

@customElement("button-icons")
export class ButtonIcons extends LitElement {
    render() {
        return html`
            <mjo-button color="primary" startIcon=${AiOutlineBars}>Start Icon</mjo-button>
            <mjo-button color="secondary" endIcon=${AiOutlineBranches}>End Icon</mjo-button>
            <mjo-button color="success" startIcon=${AiOutlineDownload} endIcon=${AiOutlineLink}>Both Icons</mjo-button>
            <mjo-button color="error" startIcon=${AiOutlineAlert} rounded></mjo-button>
        `;
    }

    static styles = [
        css`
            :host {
                display: flex;
                flex-wrap: wrap;
                gap: 1rem;
                align-items: center;
            }
        `,
    ];
}
