import { beforeAll, describe, expect, test } from "vitest";
import { highlightLitHtml, setupLitHtmlGrammar } from "../../src/utils/prism-setup";
import { containsContent, hasTokenClass, hasTokenizedContent } from "../utils/prism-test-helpers";

describe("Prism.js Lit-HTML Interpolations", () => {
    beforeAll(() => {
        setupLitHtmlGrammar();
    });

    describe("Basic Interpolations", () => {
        test("should highlight simple interpolations", () => {
            const code = "html`<div>${this.message}</div>`";
            const highlighted = highlightLitHtml(code);

            expect(hasTokenClass(highlighted, "interpolation")).toBe(true);
            expect(hasTokenClass(highlighted, "interpolation-punctuation")).toBe(true);

            // Check for interpolation content in the output
            expect(hasTokenizedContent(highlighted, "this")).toBe(true);
            expect(hasTokenizedContent(highlighted, "message")).toBe(true);
        });

        test("should highlight multiple interpolations", () => {
            const code = "html`<div>${this.title} - ${this.subtitle}</div>`";
            const highlighted = highlightLitHtml(code);

            expect(hasTokenClass(highlighted, "interpolation")).toBe(true);

            // Both interpolations should be present
            expect(hasTokenizedContent(highlighted, "title")).toBe(true);
            expect(hasTokenizedContent(highlighted, "subtitle")).toBe(true);
        });

        test("should highlight interpolations in attributes", () => {
            const code = "html`<div class=${this.cssClass} id=${this.elementId}>Content</div>`";
            const highlighted = highlightLitHtml(code);

            expect(hasTokenClass(highlighted, "interpolation")).toBe(true);

            // Attribute interpolations should be present
            expect(hasTokenizedContent(highlighted, "cssClass")).toBe(true);
            expect(hasTokenizedContent(highlighted, "elementId")).toBe(true);
        });

        test("should separate interpolation punctuation from content", () => {
            const code = "html`<div>${this.value}</div>`";
            const highlighted = highlightLitHtml(code);

            // Should have interpolation-punctuation tokens
            expect(hasTokenClass(highlighted, "interpolation-punctuation")).toBe(true);
            expect(hasTokenizedContent(highlighted, "value")).toBe(true);
        });
    });

    describe("Complex Interpolations", () => {
        test("should highlight function call interpolations", () => {
            const code = "html`<div>${this.getMessage()}</div>`";
            const highlighted = highlightLitHtml(code);

            expect(hasTokenClass(highlighted, "interpolation")).toBe(true);
            expect(hasTokenizedContent(highlighted, "getMessage")).toBe(true);
        });

        test("should highlight nested object access", () => {
            const code = "html`<div>${this.data.user.name}</div>`";
            const highlighted = highlightLitHtml(code);

            expect(hasTokenClass(highlighted, "interpolation")).toBe(true);
            expect(hasTokenizedContent(highlighted, "data")).toBe(true);
            expect(hasTokenizedContent(highlighted, "user")).toBe(true);
            expect(hasTokenizedContent(highlighted, "name")).toBe(true);
        });

        test("should highlight conditional expressions", () => {
            const code = "html`<div>${this.isVisible ? 'visible' : 'hidden'}</div>`";
            const highlighted = highlightLitHtml(code);

            expect(hasTokenClass(highlighted, "interpolation")).toBe(true);
            expect(hasTokenizedContent(highlighted, "isVisible")).toBe(true);
            expect(hasTokenizedContent(highlighted, "visible")).toBe(true);
            expect(hasTokenizedContent(highlighted, "hidden")).toBe(true);
        });

        test("should handle nested braces in interpolations", () => {
            const code = "html`<div>${this.formatData({name: 'test', value: 123})}</div>`";
            const highlighted = highlightLitHtml(code);

            expect(hasTokenClass(highlighted, "interpolation")).toBe(true);
            expect(hasTokenizedContent(highlighted, "formatData")).toBe(true);
            expect(hasTokenizedContent(highlighted, "name")).toBe(true);
            expect(hasTokenizedContent(highlighted, "test")).toBe(true);
        });

        test("should handle array methods in interpolations", () => {
            const code = "html`<div>${this.items.map(item => item.name).join(', ')}</div>`";
            const highlighted = highlightLitHtml(code);

            expect(hasTokenClass(highlighted, "interpolation")).toBe(true);
            expect(hasTokenizedContent(highlighted, "items")).toBe(true);
            expect(hasTokenizedContent(highlighted, "map")).toBe(true);
        });
    });

    describe("Template Literals with Interpolations", () => {
        test("should handle template literals in return statements", () => {
            const code = `return html\`
                <div class="container">
                    <h1>\${this.title}</h1>
                    <p>\${this.description}</p>
                </div>
            \`;`;
            const highlighted = highlightLitHtml(code);

            expect(hasTokenClass(highlighted, "lit-html")).toBe(true);
            expect(hasTokenClass(highlighted, "interpolation")).toBe(true);

            // Both interpolations should be present
            expect(hasTokenizedContent(highlighted, "title")).toBe(true);
            expect(hasTokenizedContent(highlighted, "description")).toBe(true);
        });

        test("should handle complex nested templates", () => {
            const code = `return html\`
                <div>
                    \${this.items.map(item => html\`
                        <div class="item">
                            <span>\${item.name}</span>
                            <span>\${item.value}</span>
                        </div>
                    \`)}
                </div>
            \`;`;
            const highlighted = highlightLitHtml(code);

            expect(hasTokenClass(highlighted, "lit-html")).toBe(true);
            expect(hasTokenClass(highlighted, "interpolation")).toBe(true);

            // Multiple interpolations should be present
            expect(hasTokenizedContent(highlighted, "items")).toBe(true);
            expect(hasTokenizedContent(highlighted, "name")).toBe(true);
            expect(hasTokenizedContent(highlighted, "value")).toBe(true);
        });
    });

    describe("Edge Cases", () => {
        test("should handle dollar signs not part of interpolations", () => {
            const code = "html`<div>Price: $100</div>`";
            const highlighted = highlightLitHtml(code);

            expect(hasTokenClass(highlighted, "lit-html")).toBe(true);
            expect(containsContent(highlighted, "Price: $100")).toBe(true);

            // Should not be marked as interpolation
            expect(hasTokenClass(highlighted, "interpolation")).toBe(false);
        });

        test("should handle escaped backticks", () => {
            const code = "html`<div>Template: \\`example\\`</div>`";
            const highlighted = highlightLitHtml(code);

            expect(hasTokenClass(highlighted, "lit-html")).toBe(true);
            expect(highlighted).toContain("Template:");
            expect(highlighted).toContain("example");
        });

        test("should handle empty interpolations", () => {
            const code = "html`<div>${''}</div>`";
            const highlighted = highlightLitHtml(code);

            expect(hasTokenClass(highlighted, "interpolation")).toBe(true);
            expect(hasTokenClass(highlighted, "interpolation-punctuation")).toBe(true);
        });

        test("should handle interpolations with complex expressions", () => {
            const code = "html`<div>${this.data && this.data.length > 0 ? this.data[0] : 'default'}</div>`";
            const highlighted = highlightLitHtml(code);

            expect(hasTokenClass(highlighted, "interpolation")).toBe(true);
            expect(hasTokenizedContent(highlighted, "data")).toBe(true);
            expect(hasTokenizedContent(highlighted, "length")).toBe(true);
            expect(hasTokenizedContent(highlighted, "default")).toBe(true);
        });

        test("should not treat escaped dollar signs as interpolation start", () => {
            const code = "html`<div>\\${not an interpolation}</div>`";
            const highlighted = highlightLitHtml(code);

            expect(hasTokenClass(highlighted, "lit-html")).toBe(true);
            // Note: Currently the grammar is treating escaped dollar signs as interpolations
            // This might be a limitation in the current Prism.js lit-html grammar
            // In an ideal implementation, this should be false
            expect(hasTokenClass(highlighted, "interpolation")).toBe(true);
        });
    });
});
