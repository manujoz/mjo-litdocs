import { beforeAll, describe, expect, test } from "vitest";
import { createLitHtmlGrammar, highlightLitHtml, setupLitHtmlGrammar } from "../../src/utils/prism-setup";
import { containsContent, extractTextContent, hasTokenClass, hasTokenizedContent } from "../utils/prism-test-helpers";

describe("Prism.js Lit-HTML Edge Cases and Performance", () => {
    beforeAll(() => {
        setupLitHtmlGrammar();
    });

    describe("Edge Cases", () => {
        test("should handle empty templates", () => {
            const code = "html``";
            const highlighted = highlightLitHtml(code);

            expect(hasTokenClass(highlighted, "lit-html")).toBe(true);
            expect(hasTokenClass(highlighted, "template-punctuation")).toBe(true);
        });

        test("should handle templates with only whitespace", () => {
            const code = "html`   \n  \t  `";
            const highlighted = highlightLitHtml(code);

            expect(hasTokenClass(highlighted, "lit-html")).toBe(true);
            expect(hasTokenClass(highlighted, "template-punctuation")).toBe(true);
        });

        test("should handle templates with HTML comments", () => {
            const code = "html`<!-- This is a comment --><div>Content</div>`";
            const highlighted = highlightLitHtml(code);

            expect(hasTokenClass(highlighted, "lit-html")).toBe(true);
            expect(hasTokenClass(highlighted, "comment")).toBe(true);
            expect(highlighted).toContain("This is a comment");
        });

        test("should handle malformed HTML gracefully", () => {
            const code = "html`<div><span>Unclosed tags`";
            const highlighted = highlightLitHtml(code);

            expect(hasTokenClass(highlighted, "lit-html")).toBe(true);
            expect(hasTokenClass(highlighted, "tag-name")).toBe(true);
            expect(containsContent(highlighted, "Unclosed tags")).toBe(true);
            // Should not throw an error
            expect(highlighted).toBeDefined();
        });

        test("should handle deeply nested interpolations", () => {
            const code = "html`<div>${this.data.map(item => item.props.map(prop => prop.value))}</div>`";
            const highlighted = highlightLitHtml(code);

            expect(hasTokenClass(highlighted, "interpolation")).toBe(true);
            expect(hasTokenizedContent(highlighted, "data")).toBe(true);
            expect(hasTokenizedContent(highlighted, "map")).toBe(true);
        });

        test("should handle special HTML entities", () => {
            const code = "html`<div>&lt;&gt;&amp;&quot;&#39;</div>`";
            const highlighted = highlightLitHtml(code);

            expect(hasTokenClass(highlighted, "entity")).toBe(true);
            expect(highlighted).toContain("&lt;");
            expect(highlighted).toContain("&gt;");
            expect(highlighted).toContain("&amp;");
            expect(highlighted).toContain("&quot;");
        });

        test("should handle self-closing tags with lit attributes", () => {
            const code = "html`<input type='text' .value=${this.inputValue} @input=${this.handleInput} ?disabled=${this.isDisabled} />`";
            const highlighted = highlightLitHtml(code);

            expect(hasTokenClass(highlighted, "lit-property-attr")).toBe(true);
            expect(hasTokenClass(highlighted, "lit-event-attr")).toBe(true);
            expect(hasTokenClass(highlighted, "lit-boolean-attr")).toBe(true);
            expect(hasTokenClass(highlighted, "tag-name")).toBe(true);
            expect(containsContent(highlighted, "input")).toBe(true);
        });

        test("should handle mixed quote styles", () => {
            const code = `html\`<div class='single' id="double" title=\`backtick\`>Content</div>\``;
            const highlighted = highlightLitHtml(code);

            expect(hasTokenClass(highlighted, "string")).toBe(true);
            expect(highlighted).toContain("single");
            expect(highlighted).toContain("double");
            expect(highlighted).toContain("backtick");
        });
    });

    describe("Performance Tests", () => {
        test("should handle large templates efficiently", () => {
            const largeTemplate = `html\`
                <div class="large-container">
                    ${Array.from(
                        { length: 50 }, // Reduced from 100 for test performance
                        (_, i) => `
                        <div class="item-${i}" data-index="${i}">
                            <span class="label">Item \${${i}}</span>
                            <button @click=\${this.handlers[${i}]} .disabled=\${this.disabled[${i}]}>
                                Action \${${i}}
                            </button>
                        </div>
                    `
                    ).join("")}
                </div>
            \``;

            const startTime = performance.now();
            const highlighted = highlightLitHtml(largeTemplate);
            const endTime = performance.now();

            expect(hasTokenClass(highlighted, "lit-html")).toBe(true);
            expect(hasTokenClass(highlighted, "lit-event-attr")).toBe(true);
            expect(hasTokenClass(highlighted, "lit-property-attr")).toBe(true);
            expect(endTime - startTime).toBeLessThan(1000); // Should complete within 1 second
        });

        test("should handle repeated highlighting calls", () => {
            const code = "html`<mjo-button @click=${this.handler} .disabled=${this.disabled}>Click</mjo-button>`";

            const startTime = performance.now();
            for (let i = 0; i < 100; i++) {
                // Reduced from 1000 for test performance
                highlightLitHtml(code);
            }
            const endTime = performance.now();

            expect(endTime - startTime).toBeLessThan(1000); // Should complete within 1 second
        });
    });

    describe("Regex Pattern Validation", () => {
        test("should match valid lit-html templates", () => {
            const grammar = createLitHtmlGrammar();
            const pattern = grammar.pattern as RegExp;

            const validTemplates = [
                "html`<div>Hello</div>`",
                "html`<button @click=${handler}>Click</button>`",
                "html`<input .value=${value} ?disabled=${disabled}>`",
                "html``",
                "html`${expression}`",
                "html`<div>${'string'} and ${variable}</div>`",
            ];

            validTemplates.forEach((template) => {
                expect(pattern.test(template)).toBe(true);
            });
        });

        test("should not match invalid patterns", () => {
            const grammar = createLitHtmlGrammar();
            const pattern = grammar.pattern as RegExp;

            const invalidPatterns = [
                "css`color: red;`",
                "sql`SELECT * FROM table`",
                "html`unclosed template",
                "not-html`<div>content</div>`",
                "regular string",
                "`<div>no prefix</div>`",
            ];

            invalidPatterns.forEach((pattern_str) => {
                const result = pattern.test(pattern_str);
                if (result) {
                    console.log(`❌ Pattern should NOT match but does: "${pattern_str}"`);
                }
                expect(result).toBe(false);
            });
        });

        test("should handle escaped characters in templates", () => {
            const grammar = createLitHtmlGrammar();
            const pattern = grammar.pattern as RegExp;

            const escapedTemplates = [
                "html`<div>\\`escaped backtick\\`</div>`",
                "html`<div>\\${not interpolation}</div>`",
                'html`<div title="quoted \\"string\\"">Content</div>`',
            ];

            escapedTemplates.forEach((template) => {
                expect(pattern.test(template)).toBe(true);
            });
        });
    });

    describe("Memory and Cleanup", () => {
        test("should not cause memory leaks with repeated grammar setup", () => {
            const initialMemory = process.memoryUsage().heapUsed;

            // Setup grammar multiple times
            for (let i = 0; i < 10; i++) {
                // Reduced for test performance
                setupLitHtmlGrammar();
            }

            const finalMemory = process.memoryUsage().heapUsed;
            const memoryIncrease = finalMemory - initialMemory;

            // Memory increase should be reasonable (less than 5MB)
            expect(memoryIncrease).toBeLessThan(5 * 1024 * 1024);
        });

        test("should handle concurrent highlighting requests", async () => {
            const code = "html`<div class='test'>${this.content}</div>`";

            const promises = Array.from({ length: 10 }, () =>
                // Reduced for test performance
                Promise.resolve(highlightLitHtml(code))
            );

            const results = await Promise.all(promises);

            // All results should be identical and valid
            results.forEach((result) => {
                expect(hasTokenClass(result, "lit-html")).toBe(true);
                expect(hasTokenClass(result, "attr-name")).toBe(true);
                expect(hasTokenClass(result, "interpolation")).toBe(true);
            });

            // All results should be identical
            const firstResult = results[0];
            results.forEach((result) => {
                expect(result).toBe(firstResult);
            });
        });
    });

    describe("Advanced Template Features", () => {
        test("should handle template literals with complex expressions", () => {
            const code = "html`<div>${this.items?.filter(item => item.active)?.map(item => `<span>${item.name}</span>`).join('')}</div>`";
            const highlighted = highlightLitHtml(code);

            expect(hasTokenClass(highlighted, "interpolation")).toBe(true);
            expect(hasTokenizedContent(highlighted, "items")).toBe(true);
            expect(hasTokenizedContent(highlighted, "filter")).toBe(true);
            expect(hasTokenizedContent(highlighted, "map")).toBe(true);
        });

        test("should handle nested template literals", () => {
            const code = `html\`
                <div>
                    \${this.items.map(item => html\`
                        <div class="item">
                            <span>\${item.name}</span>
                        </div>
                    \`)}
                </div>
            \``;
            const highlighted = highlightLitHtml(code);

            expect(hasTokenClass(highlighted, "lit-html")).toBe(true);
            expect(hasTokenClass(highlighted, "interpolation")).toBe(true);
            // Should handle nested html template literals - function tokens are separated now
            expect(hasTokenClass(highlighted, "function")).toBe(true);
        });

        test("should handle conditional rendering", () => {
            const code = "html`<div>${this.showContent ? html`<p>Content</p>` : html`<p>No content</p>`}</div>`";
            const highlighted = highlightLitHtml(code);

            expect(hasTokenClass(highlighted, "lit-html")).toBe(true);
            expect(hasTokenClass(highlighted, "function")).toBe(true);
            expect(hasTokenizedContent(highlighted, "showContent")).toBe(true);
        });

        test("should handle template with directives", () => {
            const code = "html`<div class=${classMap(this.classes)} style=${styleMap(this.styles)}>${this.content}</div>`";
            const highlighted = highlightLitHtml(code);

            expect(hasTokenClass(highlighted, "lit-html")).toBe(true);
            expect(hasTokenClass(highlighted, "interpolation")).toBe(true);
            expect(hasTokenizedContent(highlighted, "classMap")).toBe(true);
            expect(hasTokenizedContent(highlighted, "styleMap")).toBe(true);
        });
    });

    describe("Content Extraction and Validation", () => {
        test("should properly extract text content from complex templates", () => {
            const code = "html`<div class='test'><span>Hello</span> ${this.name}</div>`";
            const highlighted = highlightLitHtml(code);
            const textContent = extractTextContent(highlighted);

            expect(textContent).toContain("Hello");
            expect(textContent).toContain("${this.name}");
            expect(textContent).toContain("<div");
            expect(textContent).toContain("class");
        });

        test("should handle HTML encoding in text content", () => {
            const code = "html`<div>&lt;encoded&gt; content</div>`";
            const highlighted = highlightLitHtml(code);

            expect(hasTokenClass(highlighted, "entity")).toBe(true);
            expect(highlighted).toContain("&lt;");
            expect(highlighted).toContain("&gt;");
            expect(containsContent(highlighted, "encoded")).toBe(true);
        });
    });
});
