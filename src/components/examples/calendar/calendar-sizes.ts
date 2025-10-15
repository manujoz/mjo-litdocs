import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-calendar";
import "../../lit/title-example";

@customElement("calendar-sizes")
export class CalendarSizes extends LitElement {
    render() {
        return html`
            <div>
                <title-example>Small</title-example>
                <mjo-calendar size="small" mode="single" allowCompact></mjo-calendar>
            </div>
            <div>
                <title-example>Medium (Default)</title-example>
                <mjo-calendar size="medium" mode="single" allowCompact></mjo-calendar>
            </div>
            <div>
                <title-example>Large</title-example>
                <mjo-calendar size="large" mode="single" allowCompact></mjo-calendar>
            </div>
        `;
    }

    static styles = [
        css`
            :host {
                display: flex;
                flex-direction: column;
                gap: 2rem;
                align-items: flex-start;
            }
        `,
    ];
}
