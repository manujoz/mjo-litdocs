import type { MjoThemeConfig } from "mjo-litui/types/mjo-theme";

import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import { themeConfig } from "@/utils/theme";

import "mjo-litui/mjo-accordion";
import "mjo-litui/mjo-theme";

const accordionTheme: MjoThemeConfig = {
    ...themeConfig,
    components: {
        mjoAccordion: {
            gap: "25px",
            itemTitleColor: "var(--mjo-primary-color)",
            itemTitleColorHover: "var(--mjo-secondary-color)",
            itemSubtitleColor: "var(--mjo-foreground-color)",
        },
    },
};

@customElement("accordion-theme")
export class AccordionTheme extends LitElement {
    render() {
        return html`
            <mjo-theme .config=${accordionTheme} scope="local">
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
            </mjo-theme>
        `;
    }

    static styles = [
        css`
            :host {
                display: block;
            }
        `,
    ];
}

declare global {
    interface HTMLElementTagNameMap {
        "accordion-theme": AccordionTheme;
    }
}
