import { LitElement, css, html } from "lit";
import { customElement, state } from "lit/decorators.js";

import "mjo-litui/mjo-chip";

interface Tag {
    id: number;
    label: string;
    color: string;
}

@customElement("chip-dynamic")
export class ChipDynamic extends LitElement {
    @state() private tags: Tag[] = [
        { id: 1, label: "JavaScript", color: "warning" },
        { id: 2, label: "TypeScript", color: "primary" },
        { id: 3, label: "CSS", color: "secondary" },
        { id: 4, label: "HTML", color: "success" },
        { id: 5, label: "React", color: "info" },
    ];

    @state() private newTagName = "";

    private handleTagClose(id: number) {
        this.tags = this.tags.filter((tag) => tag.id !== id);
    }

    private handleAddTag() {
        if (this.newTagName.trim()) {
            const colors = ["primary", "secondary", "success", "warning", "danger", "info"];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];

            this.tags = [
                ...this.tags,
                {
                    id: Date.now(),
                    label: this.newTagName.trim(),
                    color: randomColor,
                },
            ];
            this.newTagName = "";
        }
    }

    private handleInputChange(e: Event) {
        const input = e.target as HTMLInputElement;
        this.newTagName = input.value;
    }

    private handleKeyPress(e: KeyboardEvent) {
        if (e.key === "Enter") {
            this.handleAddTag();
        }
    }

    render() {
        return html`
            <div class="dynamic-container">
                <div class="add-tag-section">
                    <input
                        type="text"
                        .value=${this.newTagName}
                        @input=${this.handleInputChange}
                        @keypress=${this.handleKeyPress}
                        placeholder="Add a new tag..."
                        class="tag-input"
                    />
                    <button @click=${this.handleAddTag} class="add-button">Add Tag</button>
                </div>

                <div class="tags-container">
                    ${this.tags.map(
                        (tag) => html` <mjo-chip label=${tag.label} color=${tag.color} closable @chip-close=${() => this.handleTagClose(tag.id)}></mjo-chip> `
                    )}
                </div>

                <div class="counter">Total tags: ${this.tags.length}</div>
            </div>
        `;
    }

    static styles = [
        css`
            :host {
                display: block;
            }
            .dynamic-container {
                display: flex;
                flex-direction: column;
                gap: 1rem;
            }
            .add-tag-section {
                display: flex;
                gap: 0.5rem;
                align-items: center;
            }
            .tag-input {
                padding: 0.5rem;
                border: 1px solid var(--mjo-border-color);
                border-radius: 0.375rem;
                background: var(--mjo-background-color);
                color: var(--mjo-foreground-color);
                flex: 1;
            }
            .tag-input:focus {
                outline: none;
                border-color: var(--mjo-primary-color);
            }
            .add-button {
                padding: 0.5rem 1rem;
                background: var(--mjo-primary-color);
                color: var(--mjo-primary-color-text);
                border: none;
                border-radius: 0.375rem;
                cursor: pointer;
                font-weight: 500;
            }
            .add-button:hover {
                opacity: 0.9;
            }
            .tags-container {
                display: flex;
                flex-wrap: wrap;
                gap: 0.5rem;
                min-height: 40px;
                padding: 0.5rem;
                border: 1px dashed var(--mjo-border-color);
                border-radius: 0.375rem;
            }
            .counter {
                text-align: center;
                color: var(--mjo-foreground-color-low);
                font-size: 0.875rem;
            }
        `,
    ];
}
