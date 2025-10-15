import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-calendar";

@customElement("calendar-colors")
export class CalendarColors extends LitElement {
    render() {
        return html`
            <div>
                <title-example>Primary</title-example>
                <mjo-calendar color="primary" allowCompact></mjo-calendar>
            </div>
            <div>
                <title-example>Secondary</title-example>
                <mjo-calendar color="secondary" allowCompact></mjo-calendar>
            </div>
        `;
    }

    static styles = [
        css`
            :host {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
                gap: 24px;
            }
            .colors-container {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
                gap: 24px;
            }
        `,
    ];
}
