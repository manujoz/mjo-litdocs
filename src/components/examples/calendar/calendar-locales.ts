import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-calendar";
import "../../lit/title-example";

@customElement("calendar-locales")
export class CalendarLocales extends LitElement {
    render() {
        return html`
            <div>
                <title-example>English (US)</title-example>
                <mjo-calendar locale="en" allowCompact firstDayOfWeek="sunday"></mjo-calendar>
            </div>
            <div>
                <title-example>Español</title-example>
                <mjo-calendar locale="es" allowCompact firstDayOfWeek="monday"></mjo-calendar>
            </div>
            <div>
                <title-example>Français</title-example>
                <mjo-calendar locale="fr" allowCompact firstDayOfWeek="monday"></mjo-calendar>
            </div>
            <div>
                <title-example>日本語</title-example>
                <mjo-calendar locale="ja" allowCompact firstDayOfWeek="sunday"></mjo-calendar>
            </div>
        `;
    }

    static styles = [
        css`
            :host {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(min(280px, 100%), 1fr));
                gap: 24px;
            }
        `,
    ];
}
