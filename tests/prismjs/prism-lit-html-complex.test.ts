import { beforeAll, describe, expect, test } from "vitest";
import { highlightLitHtml, setupLitHtmlGrammar } from "../../src/utils/prism-setup";
import { containsContent, extractTokenClasses, hasTokenClass, hasTokenizedContent, testCases, type LitHtmlTestCase } from "../utils/prism-test-helpers";

describe("Prism.js Lit-HTML Complex Test Cases", () => {
    beforeAll(() => {
        setupLitHtmlGrammar();
    });

    describe("Predefined Test Cases", () => {
        testCases.forEach((testCase: LitHtmlTestCase, index: number) => {
            test(`${index + 1}: ${testCase.name}`, () => {
                const highlighted = highlightLitHtml(testCase.code);

                // Check that highlighting was applied (should contain token classes)
                expect(highlighted).not.toBe(testCase.code);
                expect(highlighted).toContain("token");

                // Check expected token classes if provided
                if (testCase.expectedTokens) {
                    testCase.expectedTokens.forEach((token) => {
                        expect(hasTokenClass(highlighted, token)).toBe(true);
                    });
                }

                // Check content that should be present (accounting for HTML encoding)
                if (testCase.shouldContain) {
                    testCase.shouldContain.forEach((content) => {
                        expect(containsContent(highlighted, content)).toBe(true);
                    });
                }

                // Check content that should not be present
                if (testCase.shouldNotContain) {
                    testCase.shouldNotContain.forEach((content) => {
                        expect(highlighted).not.toContain(content);
                    });
                }
            });
        });
    });

    describe("Specific Token Verification", () => {
        test("Simple lit-html template should have correct token structure", () => {
            const testCase = testCases[0]; // "Simple lit-html template"
            const highlighted = highlightLitHtml(testCase.code);

            // Should contain lit-html grammar token
            expect(hasTokenClass(highlighted, "lit-html")).toBe(true);

            // Should contain template punctuation
            expect(hasTokenClass(highlighted, "template-punctuation")).toBe(true);

            // Should contain tag-related tokens
            expect(hasTokenClass(highlighted, "tag-name")).toBe(true);

            // Verify specific content
            expect(containsContent(highlighted, "Hello")).toBe(true);
        });

        test("Event attribute test should identify event attributes correctly", () => {
            const testCase = testCases[2]; // "Lit template with event"
            const highlighted = highlightLitHtml(testCase.code);

            // Should identify the event attribute
            expect(hasTokenClass(highlighted, "lit-event-attr")).toBe(true);
            expect(containsContent(highlighted, "@mjo-button:click")).toBe(true);

            // Should have interpolation for the handler
            expect(hasTokenClass(highlighted, "interpolation")).toBe(true);
            expect(hasTokenizedContent(highlighted, "handleClick")).toBe(true);
        });

        test("Mixed attributes should properly categorize each type", () => {
            const testCase = testCases[4]; // "Mixed attributes"
            const highlighted = highlightLitHtml(testCase.code);

            // Regular attribute
            expect(hasTokenClass(highlighted, "attr-name")).toBe(true);
            expect(containsContent(highlighted, "itemTitle")).toBe(true);

            // Property attribute
            expect(hasTokenClass(highlighted, "lit-property-attr")).toBe(true);
            expect(containsContent(highlighted, ".expanded")).toBe(true);

            // Event attribute
            expect(hasTokenClass(highlighted, "lit-event-attr")).toBe(true);
            expect(containsContent(highlighted, "@toggle")).toBe(true);

            // String value
            expect(highlighted).toContain("Item 1");
        });

        test("Complex accordion should highlight nested components", () => {
            const testCase = testCases[5]; // "Complex accordion example"
            const highlighted = highlightLitHtml(testCase.code);

            // Should identify custom component names
            expect(hasTokenClass(highlighted, "tag-name")).toBe(true);
            expect(containsContent(highlighted, "mjo-accordion")).toBe(true);
            expect(containsContent(highlighted, "mjo-accordion-item")).toBe(true);

            // Should identify attributes
            expect(hasTokenClass(highlighted, "attr-name")).toBe(true);
            expect(containsContent(highlighted, "itemTitle")).toBe(true);

            // Should preserve content
            expect(containsContent(highlighted, "Lorem ipsum")).toBe(true);
        });
    });

    describe("Token Analysis and Validation", () => {
        test("should extract comprehensive token classes", () => {
            const code = 'html`<mjo-accordion-item itemTitle="Item 1" .expanded=${this.expanded} @toggle=${this.onToggle}>Content</mjo-accordion-item>`';
            const highlighted = highlightLitHtml(code);
            const tokenClasses = extractTokenClasses(highlighted);

            // Should contain base token classes (token is filtered out by helper)
            expect(tokenClasses.length).toBeGreaterThan(0);

            // Should contain lit-specific classes
            const hasLitHtml = tokenClasses.some((cls) => cls === "lit-html");
            const hasLitEventAttr = tokenClasses.some((cls) => cls === "lit-event-attr");
            const hasLitPropertyAttr = tokenClasses.some((cls) => cls === "lit-property-attr");
            expect(hasLitHtml || hasLitEventAttr || hasLitPropertyAttr).toBe(true);

            // Should contain HTML-specific classes
            const htmlTokens = tokenClasses.filter((cls) => cls.includes("tag-name") || cls.includes("attr-name") || cls.includes("template-punctuation"));
            expect(htmlTokens.length).toBeGreaterThan(0);
        });

        test("should maintain proper nesting structure", () => {
            const code = `html\`
                <div class="container">
                    <h1>\${this.title}</h1>
                    <p class="description">\${this.content}</p>
                </div>
            \``;
            const highlighted = highlightLitHtml(code);

            // Should maintain template structure
            expect(hasTokenClass(highlighted, "lit-html")).toBe(true);
            expect(hasTokenClass(highlighted, "template-punctuation")).toBe(true);

            // Should handle nested elements
            expect(hasTokenClass(highlighted, "tag-name")).toBe(true);
            expect(hasTokenClass(highlighted, "attr-name")).toBe(true);

            // Should handle interpolations within nested structure
            expect(hasTokenClass(highlighted, "interpolation")).toBe(true);
            expect(hasTokenizedContent(highlighted, "title")).toBe(true);
            expect(hasTokenizedContent(highlighted, "content")).toBe(true);
        });

        test("should handle real-world component example", () => {
            const code = `render() {
                return html\`
                    <div class="card" @click=\${this._handleClick}>
                        <header class="card-header">
                            <h2 class="card-title">\${this.title}</h2>
                            <button 
                                class="card-toggle"
                                @click=\${this._toggleExpanded}
                                ?expanded=\${this.expanded}
                                aria-label="Toggle expanded">
                                \${this.expanded ? '−' : '+'}
                            </button>
                        </header>
                        <div class="card-content" ?hidden=\${!this.expanded}>
                            <slot></slot>
                        </div>
                    </div>
                \`;
            }`;
            const highlighted = highlightLitHtml(code);

            // Should identify all key components
            expect(hasTokenClass(highlighted, "lit-html")).toBe(true);
            expect(hasTokenClass(highlighted, "lit-event-attr")).toBe(true);
            expect(hasTokenClass(highlighted, "lit-boolean-attr")).toBe(true);
            expect(hasTokenClass(highlighted, "interpolation")).toBe(true);
            expect(hasTokenClass(highlighted, "attr-name")).toBe(true);
            expect(hasTokenClass(highlighted, "tag-name")).toBe(true);

            // Should preserve complex interpolations
            expect(hasTokenizedContent(highlighted, "expanded")).toBe(true);
        });
    });

    describe("Edge Cases and Error Handling", () => {
        test("should handle empty templates", () => {
            const code = "html``";
            const highlighted = highlightLitHtml(code);

            expect(hasTokenClass(highlighted, "lit-html")).toBe(true);
            expect(hasTokenClass(highlighted, "template-punctuation")).toBe(true);
        });

        test("should handle templates with only text", () => {
            const code = "html`Plain text content`";
            const highlighted = highlightLitHtml(code);

            expect(hasTokenClass(highlighted, "lit-html")).toBe(true);
            expect(containsContent(highlighted, "Plain text content")).toBe(true);
        });

        test("should handle malformed HTML gracefully", () => {
            const code = "html`<div><span>Unclosed tags`";
            const highlighted = highlightLitHtml(code);

            expect(hasTokenClass(highlighted, "lit-html")).toBe(true);
            expect(hasTokenClass(highlighted, "tag-name")).toBe(true);
            expect(containsContent(highlighted, "Unclosed tags")).toBe(true);
        });

        test("should handle deeply nested interpolations", () => {
            const code = "html`<div>${this.data?.items?.map(item => item.name?.toUpperCase()) || 'default'}</div>`";
            const highlighted = highlightLitHtml(code);

            expect(hasTokenClass(highlighted, "lit-html")).toBe(true);
            expect(hasTokenClass(highlighted, "interpolation")).toBe(true);
            expect(hasTokenizedContent(highlighted, "data")).toBe(true);
            expect(hasTokenizedContent(highlighted, "items")).toBe(true);
            expect(hasTokenizedContent(highlighted, "map")).toBe(true);
        });
    });
});
