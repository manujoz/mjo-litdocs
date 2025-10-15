import type { MjoCheckbox } from "mjo-litui/mjo-checkbox";
import type { MjoCheckboxChangeEvent } from "mjo-litui/types/mjo-checkbox";

import { LitElement, css, html } from "lit";
import { customElement, query, state } from "lit/decorators.js";

import "mjo-litui/mjo-checkbox";

@customElement("checkbox-indeterminate")
export class CheckboxIndeterminate extends LitElement {
    @state() private parentChecked = false;
    @state() private parentIndeterminate = true;

    @query("mjo-checkbox#child-1") $checkbox1!: MjoCheckbox;
    @query("mjo-checkbox#child-2") $checkbox2!: MjoCheckbox;
    @query("mjo-checkbox#child-3") $checkbox3!: MjoCheckbox;

    render() {
        return html`
            <mjo-checkbox
                label="Select all"
                ?checked=${this.parentChecked}
                ?indeterminate=${this.parentIndeterminate}
                @mjo-checkbox:change=${this.#handleParentChange}
            ></mjo-checkbox>
            <div class="childrens">
                <mjo-checkbox id="child-1" label="Option 1" checked @mjo-checkbox:change=${this.#handleChildChange}></mjo-checkbox>
                <mjo-checkbox id="child-2" label="Option 2" @mjo-checkbox:change=${this.#handleChildChange}></mjo-checkbox>
                <mjo-checkbox id="child-3" label="Option 3" @mjo-checkbox:change=${this.#handleChildChange}></mjo-checkbox>
            </div>
        `;
    }

    #handleParentChange(event: MjoCheckboxChangeEvent) {
        const { checked, indeterminate } = event.detail;

        this.parentChecked = checked;
        this.parentIndeterminate = indeterminate;

        if (checked) {
            this.$checkbox1.checked = true;
            this.$checkbox2.checked = true;
            this.$checkbox3.checked = true;
        } else {
            this.$checkbox1.checked = false;
            this.$checkbox2.checked = false;
            this.$checkbox3.checked = false;
        }
    }

    #handleChildChange() {
        const checkedCount = [this.$checkbox1, this.$checkbox2, this.$checkbox3].filter((checkbox) => checkbox.checked).length;

        if (checkedCount === 0) {
            this.parentChecked = false;
            this.parentIndeterminate = false;
        } else if (checkedCount === 3) {
            this.parentChecked = true;
            this.parentIndeterminate = false;
        } else {
            this.parentChecked = false;
            this.parentIndeterminate = true;
        }
    }

    static styles = [
        css`
            :host {
                padding: var(--mjo-space-large) 0;
                display: flex;
                flex-direction: column;
                gap: var(--mjo-space-large);
            }
            .childrens {
                display: flex;
                flex-direction: column;
                gap: var(--mjo-space-medium);
                padding-left: 24px;
            }
        `,
    ];
}
