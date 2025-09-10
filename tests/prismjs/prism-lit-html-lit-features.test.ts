import { beforeAll, describe, expect, test } from "vitest";
import { highlightLitHtml, setupLitHtmlGrammar } from "../../src/utils/prism-setup";
import { containsContent, hasTokenClass } from "../utils/prism-test-helpers";

describe("Prism.js Lit-HTML Lit-Specific Features", () => {
    beforeAll(() => {
        setupLitHtmlGrammar();
    });

    describe("Lit Event Attributes", () => {
        test("should highlight simple event attributes", () => {
            const code = "html`<button @click=${this.handleClick}>Click</button>`";
            const highlighted = highlightLitHtml(code);

            expect(hasTokenClass(highlighted, "lit-event-attr")).toBe(true);
            expect(containsContent(highlighted, "@click")).toBe(true);

            // Should also have interpolation for the handler
            expect(hasTokenClass(highlighted, "interpolation")).toBe(true);
        });

        test("should highlight namespaced event attributes", () => {
            const code = "html`<mjo-button @mjo-button:click=${this.handleClick}>Click</mjo-button>`";
            const highlighted = highlightLitHtml(code);

            expect(hasTokenClass(highlighted, "lit-event-attr")).toBe(true);
            expect(containsContent(highlighted, "@mjo-button:click")).toBe(true);
        });

        test("should highlight custom event attributes", () => {
            const code = "html`<custom-element @custom-event=${this.handler}>Content</custom-element>`";
            const highlighted = highlightLitHtml(code);

            expect(hasTokenClass(highlighted, "lit-event-attr")).toBe(true);
            expect(containsContent(highlighted, "@custom-event")).toBe(true);
        });

        test("should distinguish event attributes from interpolations", () => {
            const code = "html`<button @click=${this.handleClick}>Click</button>`";
            const highlighted = highlightLitHtml(code);

            // Should have both lit-event-attr and interpolation tokens
            expect(hasTokenClass(highlighted, "lit-event-attr")).toBe(true);
            expect(hasTokenClass(highlighted, "interpolation")).toBe(true);

            // Event attribute should be properly wrapped
            expect(highlighted).toMatch(/<span[^>]*class="[^"]*lit-event-attr[^"]*"[^>]*>@click<\/span>/);
        });
    });

    describe("Lit Property Attributes", () => {
        test("should highlight property attributes", () => {
            const code = "html`<my-component .visible=${this.visible}>Content</my-component>`";
            const highlighted = highlightLitHtml(code);

            expect(hasTokenClass(highlighted, "lit-property-attr")).toBe(true);
            expect(containsContent(highlighted, ".visible")).toBe(true);
        });

        test("should highlight multiple property attributes", () => {
            const code = "html`<my-component .data=${this.data} .config=${this.config}>Content</my-component>`";
            const highlighted = highlightLitHtml(code);

            expect(hasTokenClass(highlighted, "lit-property-attr")).toBe(true);
            expect(containsContent(highlighted, ".data")).toBe(true);
            expect(containsContent(highlighted, ".config")).toBe(true);
        });

        test("should properly tokenize property attributes", () => {
            const code = "html`<element .myProperty=${this.value}></element>`";
            const highlighted = highlightLitHtml(code);

            // Property attribute should be wrapped in its own span
            expect(highlighted).toMatch(/<span[^>]*class="[^"]*lit-property-attr[^"]*"[^>]*>\.myProperty<\/span>/);
        });
    });

    describe("Lit Boolean Attributes", () => {
        test("should highlight boolean attributes", () => {
            const code = "html`<my-component ?disabled=${this.disabled}>Content</my-component>`";
            const highlighted = highlightLitHtml(code);

            expect(hasTokenClass(highlighted, "lit-boolean-attr")).toBe(true);
            expect(containsContent(highlighted, "?disabled")).toBe(true);
        });

        test("should highlight multiple boolean attributes", () => {
            const code = "html`<my-component ?disabled=${this.disabled} ?hidden=${this.hidden}>Content</my-component>`";
            const highlighted = highlightLitHtml(code);

            expect(hasTokenClass(highlighted, "lit-boolean-attr")).toBe(true);
            expect(containsContent(highlighted, "?disabled")).toBe(true);
            expect(containsContent(highlighted, "?hidden")).toBe(true);
        });

        test("should properly tokenize boolean attributes", () => {
            const code = "html`<input ?checked=${this.isChecked}>`";
            const highlighted = highlightLitHtml(code);

            // Boolean attribute should be wrapped in its own span
            expect(highlighted).toMatch(/<span[^>]*class="[^"]*lit-boolean-attr[^"]*"[^>]*>\?checked<\/span>/);
        });
    });

    describe("Mixed Lit Attributes", () => {
        test("should handle mixed lit and regular attributes", () => {
            const code = 'html`<mjo-accordion-item itemTitle="Item 1" .expanded=${this.expanded} @toggle=${this.onToggle}>Content</mjo-accordion-item>`';
            const highlighted = highlightLitHtml(code);

            // Regular attribute
            expect(hasTokenClass(highlighted, "attr-name")).toBe(true);
            expect(containsContent(highlighted, "itemTitle")).toBe(true);

            // Property attribute
            expect(hasTokenClass(highlighted, "lit-property-attr")).toBe(true);
            expect(containsContent(highlighted, ".expanded")).toBe(true);

            // Event attribute
            expect(hasTokenClass(highlighted, "lit-event-attr")).toBe(true);
            expect(containsContent(highlighted, "@toggle")).toBe(true);

            // Interpolations
            expect(hasTokenClass(highlighted, "interpolation")).toBe(true);
        });

        test("should handle complex component with all attribute types", () => {
            const code = `html\`<my-complex-component 
                class="main" 
                id="component-1"
                .data=\${this.data}
                ?enabled=\${this.enabled}
                @change=\${this.handleChange}
                @custom:event=\${this.handleCustom}>
                Content
            </my-complex-component>\``;
            const highlighted = highlightLitHtml(code);

            // Regular attributes
            expect(hasTokenClass(highlighted, "attr-name")).toBe(true);
            expect(containsContent(highlighted, "class")).toBe(true);
            expect(containsContent(highlighted, "id")).toBe(true);

            // Property attribute
            expect(hasTokenClass(highlighted, "lit-property-attr")).toBe(true);
            expect(containsContent(highlighted, ".data")).toBe(true);

            // Boolean attribute
            expect(hasTokenClass(highlighted, "lit-boolean-attr")).toBe(true);
            expect(containsContent(highlighted, "?enabled")).toBe(true);

            // Event attributes
            expect(hasTokenClass(highlighted, "lit-event-attr")).toBe(true);
            expect(containsContent(highlighted, "@change")).toBe(true);
            expect(containsContent(highlighted, "@custom:event")).toBe(true);

            // All should have interpolations
            expect(hasTokenClass(highlighted, "interpolation")).toBe(true);
        });

        test("should maintain proper token boundaries", () => {
            const code = 'html`<element class="test" .prop=${value} ?bool=${flag} @event=${handler}></element>`';
            const highlighted = highlightLitHtml(code);

            // Each attribute type should be in its own span
            expect(highlighted).toMatch(/<span[^>]*class="[^"]*attr-name[^"]*"[^>]*>class<\/span>/);
            expect(highlighted).toMatch(/<span[^>]*class="[^"]*lit-property-attr[^"]*"[^>]*>\.prop<\/span>/);
            expect(highlighted).toMatch(/<span[^>]*class="[^"]*lit-boolean-attr[^"]*"[^>]*>\?bool<\/span>/);
            expect(highlighted).toMatch(/<span[^>]*class="[^"]*lit-event-attr[^"]*"[^>]*>@event<\/span>/);
        });
    });

    describe("Attribute Value Handling", () => {
        test("should handle lit attributes with string values", () => {
            const code = 'html`<element @click="handler" .prop="value" ?bool="true"></element>`';
            const highlighted = highlightLitHtml(code);

            expect(hasTokenClass(highlighted, "lit-event-attr")).toBe(true);
            expect(hasTokenClass(highlighted, "lit-property-attr")).toBe(true);
            expect(hasTokenClass(highlighted, "lit-boolean-attr")).toBe(true);
            expect(hasTokenClass(highlighted, "string")).toBe(true);
        });

        test("should handle hyphenated lit attributes", () => {
            const code = "html`<element @custom-event=${handler} .some-property=${value} ?is-enabled=${flag}></element>`";
            const highlighted = highlightLitHtml(code);

            expect(containsContent(highlighted, "@custom-event")).toBe(true);
            expect(containsContent(highlighted, ".some-property")).toBe(true);
            expect(containsContent(highlighted, "?is-enabled")).toBe(true);
        });
    });

    describe("Boolean Attributes", () => {
        test("should highlight boolean attributes without equals sign", () => {
            const code = 'html`<mjo-accordion-item itemTitle="Item" disabled>Content</mjo-accordion-item>`';
            const highlighted = highlightLitHtml(code);

            // Both attributes should be tokenized
            expect(hasTokenClass(highlighted, "attr-name")).toBe(true);
            expect(containsContent(highlighted, "itemTitle")).toBe(true);
            expect(containsContent(highlighted, "disabled")).toBe(true);

            // The disabled attribute should be tokenized as attr-name
            expect(highlighted).toMatch(/<span[^>]*class="[^"]*attr-name[^"]*"[^>]*>disabled<\/span>/);
        });

        test("should handle mixed attributes with and without equals sign", () => {
            const code = 'html`<input type="text" required disabled placeholder="Enter text"></input>`';
            const highlighted = highlightLitHtml(code);

            // All attributes should be tokenized
            expect(containsContent(highlighted, "type")).toBe(true);
            expect(containsContent(highlighted, "required")).toBe(true);
            expect(containsContent(highlighted, "disabled")).toBe(true);
            expect(containsContent(highlighted, "placeholder")).toBe(true);

            // Boolean attributes should be tokenized
            expect(highlighted).toMatch(/<span[^>]*class="[^"]*attr-name[^"]*"[^>]*>required<\/span>/);
            expect(highlighted).toMatch(/<span[^>]*class="[^"]*attr-name[^"]*"[^>]*>disabled<\/span>/);
        });

        test("should handle boolean attributes in complex elements", () => {
            const code = 'html`<mjo-button variant="primary" disabled @click=${handler}>Click me</mjo-button>`';
            const highlighted = highlightLitHtml(code);

            // Should tokenize regular attributes, boolean attributes, and lit attributes
            expect(containsContent(highlighted, "variant")).toBe(true);
            expect(containsContent(highlighted, "disabled")).toBe(true);
            expect(containsContent(highlighted, "@click")).toBe(true);

            // Boolean attribute should have attr-name class
            expect(highlighted).toMatch(/<span[^>]*class="[^"]*attr-name[^"]*"[^>]*>disabled<\/span>/);
        });

        test("should handle multiple boolean attributes", () => {
            const code = "html`<input required readonly disabled hidden></input>`";
            const highlighted = highlightLitHtml(code);

            // All boolean attributes should be tokenized
            expect(containsContent(highlighted, "required")).toBe(true);
            expect(containsContent(highlighted, "readonly")).toBe(true);
            expect(containsContent(highlighted, "disabled")).toBe(true);
            expect(containsContent(highlighted, "hidden")).toBe(true);

            // Each should have attr-name class
            expect(highlighted).toMatch(/<span[^>]*class="[^"]*attr-name[^"]*"[^>]*>required<\/span>/);
            expect(highlighted).toMatch(/<span[^>]*class="[^"]*attr-name[^"]*"[^>]*>readonly<\/span>/);
            expect(highlighted).toMatch(/<span[^>]*class="[^"]*attr-name[^"]*"[^>]*>disabled<\/span>/);
            expect(highlighted).toMatch(/<span[^>]*class="[^"]*attr-name[^"]*"[^>]*>hidden<\/span>/);
        });
    });

    describe("Template Tag Functions", () => {
        test("should highlight html function before template", () => {
            const code = "html`<div>Hello World</div>`";
            const highlighted = highlightLitHtml(code);

            // The 'html' function should be tokenized as a function
            expect(hasTokenClass(highlighted, "function")).toBe(true);
            expect(containsContent(highlighted, "html")).toBe(true);

            // Verify the html function is wrapped with function class
            expect(highlighted).toMatch(/<span[^>]*class="[^"]*function[^"]*"[^>]*>html<\/span>/);
        });

        test("should highlight css function in lit styles", () => {
            const code = "css`color: red; background: blue;`";
            const highlighted = highlightLitHtml(code);

            // The 'css' function should be tokenized as a function
            expect(hasTokenClass(highlighted, "function")).toBe(true);
            expect(containsContent(highlighted, "css")).toBe(true);

            // Verify the css function is wrapped with function class
            expect(highlighted).toMatch(/<span[^>]*class="[^"]*function[^"]*"[^>]*>css<\/span>/);
        });

        test("should highlight html function in render method", () => {
            const code = `render() {
                return html\`<mjo-button @mjo-button:click=\${this.#handleClick}>CLICK ME!</mjo-button>\`;
            }`;
            const highlighted = highlightLitHtml(code);

            // The 'html' function should be tokenized
            expect(hasTokenClass(highlighted, "function")).toBe(true);
            expect(containsContent(highlighted, "html")).toBe(true);
            expect(containsContent(highlighted, "render")).toBe(true);
        });

        test("should highlight css function in static styles", () => {
            const code = `static styles = [
                css\`
                    :host {
                        display: block;
                        --mjo-space-x-small: var(--mjo-space-xsmall);
                    }
                \`
            ];`;
            const highlighted = highlightLitHtml(code);

            // The 'css' function should be tokenized
            expect(hasTokenClass(highlighted, "function")).toBe(true);
            expect(containsContent(highlighted, "css")).toBe(true);
            expect(containsContent(highlighted, "static")).toBe(true);
            expect(containsContent(highlighted, "styles")).toBe(true);
        });
    });
});
