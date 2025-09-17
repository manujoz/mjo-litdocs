import type { MjoButtonTheme } from "mjo-litui/types/mjo-theme";

import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-button";
import "mjo-litui/mjo-theme";

const customTheme: MjoButtonTheme = {
    fontSize: "1.1em",
    fontWeight: "600",
    padding: "0.75rem 1.25rem",
    borderRadius: "8px",
    gap: "8px",
    backgroundColor: "#2563eb",
    backgroundColorHover: "#1d4ed8",
    color: "white",
    loadingColor: "#60a5fa",
    opacityHover: "0.9",
};

@customElement("button-theme")
export class ButtonTheme extends LitElement {
    render() {
        return html` <mjo-button color="primary" .theme=${customTheme}>Custom Themed Button</mjo-button> `;
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
