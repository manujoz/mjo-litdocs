import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-calendar";

@customElement("calendar-colors")
export class CalendarColors extends LitElement {
    render() {
        return html`
            <div class="colors-container">
                <div class="color-item">
                    <h4>Primary</h4>
                    <mjo-calendar color="primary" mode="single"></mjo-calendar>
                </div>
                <div class="color-item">
                    <h4>Secondary</h4>
                    <mjo-calendar color="secondary" mode="single"></mjo-calendar>
                </div>
            </div>
        `;
    }

    static styles = [
        css`
            :host {
                display: block;
            }
            .colors-container {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: 24px;
            }
            .color-item h4 {
                margin: 0 0 12px 0;
                color: var(--mjo-foreground-color);
                font-size: 1rem;
                font-weight: 600;
            }
        `,
    ];
}
