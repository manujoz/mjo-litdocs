import { css, html, type PropertyValues } from "lit";
import { customElement } from "lit/decorators.js";

import { MjoColorPicker } from "mjo-litui/mjo-color-picker";
import type { MjoColorPickerInputEvent } from "mjo-litui/types/mjo-color-picker";

@customElement("color-picker-custom")
export class ColorPickerCustom extends MjoColorPicker {
    render() {
        const base = super.render();

        return html`
            <div class="base">${base}</div>
            <div class="container" @click=${this.#handleClick}>
                <div class="color"></div>
                <div class="content">
                    <label>Brand color</label>
                    <div class="value">${this.value}</div>
                </div>
            </div>
        `;
    }

    connectedCallback(): void {
        super.connectedCallback();

        this.style.setProperty("--default-color", this.value || "#3b82f6");

        this.addEventListener("mjo-color-picker:input", this.#handleInput);
    }

    disconnectedCallback(): void {
        super.disconnectedCallback();

        this.removeEventListener("mjo-color-picker:input", this.#handleInput);
    }

    protected willUpdate(_changedProperties: PropertyValues<this>): void {
        super.willUpdate(_changedProperties);

        this.value = this.value || "#3b82f6";
    }

    #handleInput = (event: MjoColorPickerInputEvent) => {
        this.style.setProperty("--default-color", event.detail.value);
    };

    #handleClick = () => {
        this.click();
    };

    static styles = [
        css`
            :host {
                position: relative;
                display: inline-block;
                --default-color: #3b82f6;
            }
            .base {
                position: absolute;
                inset: 0;
                opacity: 1;
            }
            .container {
                position: relative;
                cursor: pointer;
                display: inline-flex;
                background: var(--mjo-background-color-card);
                gap: 1rem;
                border-radius: 0 var(--mjo-radius-large) var(--mjo-radius-large) 0;
                border: 1px solid var(--mjo-border-color);
                transition: background 0.25s ease;
            }
            .container:hover {
                background: var(--mjo-background-color-card-high);
            }
            .color {
                flex: 0 1 10px;
                min-width: 10px;
                background-color: var(--default-color);
                border-right: 1px solid var(--mjo-border-color);
            }
            .content {
                flex: 1 1 auto;
                padding: 0.5rem 0;
                min-width: 150px;
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
            }
            label {
                cursor: pointer;
                color: var(--mjo-foreground-color-low);
                font-size: 0.875rem;
            }
            .value {
                font-weight: bold;
                background: linear-gradient(90deg, var(--mjo-primary-color) 5%, var(--mjo-foreground-color));
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }
        `,
    ];
}

declare global {
    interface HTMLElementTagNameMap {
        "color-picker-custom": MjoColorPicker;
    }
}
