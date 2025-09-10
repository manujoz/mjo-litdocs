import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-accordion";

@customElement("accordion-custom")
export class AccordionCustom extends LitElement {
    render() {
        return html`
            <mjo-accordion compact variant="splitted">
                <mjo-accordion-item itemTitle="Item 1" itemSubtitle="Subtitle 1" expanded>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </mjo-accordion-item>
                <mjo-accordion-item itemTitle="Item 2" itemSubtitle="Subtitle 2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </mjo-accordion-item>
                <mjo-accordion-item itemTitle="Item 3" itemSubtitle="Subtitle 3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </mjo-accordion-item>
            </mjo-accordion>
        `;
    }

    static styles = [
        css`
            :host {
                display: block;
                --mjo-accordion-border-radius: 4px;
                --mjo-accordion-item-title-font-size: 1.5em;
                --mjo-accordion-item-title-color: white;
                --mjo-accordion-item-title-color-hover: white;
                --mjo-accordion-item-subtitle-color: white;
                --mjo-accordion-background-color:
                    radial-gradient(49% 81% at 45% 47%, #09444445 0%, #073aff00 100%), radial-gradient(113% 91% at 17% -2%, #753598ff 1%, #ff000000 99%),
                    radial-gradient(142% 91% at 83% 7%, #35839dff 1%, #ff000000 99%), radial-gradient(142% 91% at -6% 74%, #943283ff 1%, #ff000000 99%),
                    radial-gradient(142% 91% at 111% 84%, #6e256eff 0%, #ac58a5ff 100%);
                --mjo-typography-font-weight-medium: bold;
            }
            mjo-accordion-item {
                color: white;
            }
        `,
    ];
}

declare global {
    interface HTMLElementTagNameMap {
        "accordion-custom": AccordionCustom;
    }
}
