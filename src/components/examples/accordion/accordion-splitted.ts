import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-accordion";

@customElement("accordion-splitted")
export class AccordionSplitted extends LitElement {
    render() {
        return html`
            <mjo-accordion variant="splitted">
                <mjo-accordion-item itemTitle="Item 1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </mjo-accordion-item>
                <mjo-accordion-item itemTitle="Item 2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </mjo-accordion-item>
                <mjo-accordion-item itemTitle="Item 3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </mjo-accordion-item>
            </mjo-accordion>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "accordion-splitted": AccordionSplitted;
    }
}
