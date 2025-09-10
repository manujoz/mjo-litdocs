import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-accordion";

@customElement("accordion-cssparts")
export class AccordionCssparts extends LitElement {
    render() {
        return html`
            <mjo-accordion compact variant="solid">
                <mjo-accordion-item itemTitle="Item 1" itemSubtitle="Subtitle 1">
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
            }

            mjo-accordion::part(accordion) {
                padding: 10px;
                background:
                    radial-gradient(49% 81% at 45% 47%, #09444445 0%, #073aff00 100%), radial-gradient(113% 91% at 17% -2%, #753598ff 1%, #ff000000 99%),
                    radial-gradient(142% 91% at 83% 7%, #35839dff 1%, #ff000000 99%), radial-gradient(142% 91% at -6% 74%, #943283ff 1%, #ff000000 99%),
                    radial-gradient(142% 91% at 111% 84%, #6e256eff 0%, #ac58a5ff 100%);
            }
            mjo-accordion-item {
                border-color: #493d68;
            }
            mjo-accordion-item::part(title) {
                color: #ebc8ff;
                font-weight: bold;
                transition: color 0.2s ease;
            }
            mjo-accordion-item:hover::part(title) {
                color: #55cdf1;
            }
            mjo-accordion-item::part(subtitle) {
                color: #d6d2fc;
            }
            mjo-accordion-item::part(content) {
                color: #d6d2fc;
            }
            mjo-accordion-item::part(icon) {
                font-size: 40px;
                color: #39d5e0;
            }
        `,
    ];
}

declare global {
    interface HTMLElementTagNameMap {
        "accordion-cssparts": AccordionCssparts;
    }
}
