import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-calendar";

@customElement("calendar-sizes")
export class CalendarSizes extends LitElement {
    render() {
        return html`
            <div class="sizes-container">
                <div class="size-item">
                    <h4>Small</h4>
                    <mjo-calendar size="small" mode="single"></mjo-calendar>
                </div>
                <div class="size-item">
                    <h4>Medium (Default)</h4>
                    <mjo-calendar size="medium" mode="single"></mjo-calendar>
                </div>
                <div class="size-item">
                    <h4>Large</h4>
                    <mjo-calendar size="large" mode="single"></mjo-calendar>
                </div>
            </div>
        `;
    }

    static styles = [
        css`
            :host {
                display: block;
            }
            .sizes-container {
                display: flex;
                flex-direction: column;
                gap: 32px;
                align-items: flex-start;
            }
            .size-item h4 {
                margin: 0 0 12px 0;
                color: var(--mjo-foreground-color);
                font-size: 1rem;
                font-weight: 600;
            }
        `,
    ];
}
