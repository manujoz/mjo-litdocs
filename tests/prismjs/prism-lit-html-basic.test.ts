import Prism from "prismjs";
import { beforeAll, describe, expect, test } from "vitest";
import { createLitHtmlGrammar, highlightLitHtml, setupLitHtmlGrammar } from "../../src/utils/prism-setup";
import { containsContent, extractTokenClasses, hasTokenClass } from "../utils/prism-test-helpers";

describe("Prism.js Lit-HTML Grammar - Basic Functionality", () => {
    beforeAll(() => {
        setupLitHtmlGrammar();
    });

    describe("Grammar Creation", () => {
        test("should create lit-html grammar with correct structure", () => {
            const grammar = createLitHtmlGrammar();

            expect(grammar).toHaveProperty("pattern");
            expect(grammar).toHaveProperty("greedy", true);
            expect(grammar).toHaveProperty("inside");
            expect(grammar.inside).toHaveProperty("template-punctuation");
            expect(grammar.inside).toHaveProperty("interpolation");
            expect(grammar.inside).toHaveProperty("html-content");
        });

        test("should have correct template pattern", () => {
            const grammar = createLitHtmlGrammar();
            const pattern = grammar.pattern;

            // Should match basic html template
            expect(pattern.test("html`<div>test</div>`")).toBe(true);

            // Should match template with interpolation
            expect(pattern.test("html`<div>${value}</div>`")).toBe(true);

            // Should not match non-html templates
            expect(pattern.test("css`color: red;`")).toBe(false);
            expect(pattern.test("`<div>test</div>`")).toBe(false);
        });

        test("should register grammar in Prism.languages.typescript", () => {
            setupLitHtmlGrammar();
            expect(Prism.languages.typescript).toHaveProperty("lit-html");
        });
    });

    describe("Basic Template Highlighting", () => {
        test("should highlight simple lit-html template", () => {
            const code = "html`<div>Hello</div>`";
            const highlighted = highlightLitHtml(code);

            // Check for lit-html token class
            expect(hasTokenClass(highlighted, "lit-html")).toBe(true);

            // Check for template punctuation
            expect(hasTokenClass(highlighted, "template-punctuation")).toBe(true);

            // Check content preservation (accounting for HTML encoding)
            expect(containsContent(highlighted, "Hello")).toBe(true);
        });

        test("should identify template punctuation correctly", () => {
            const code = "html`<div>Hello</div>`";
            const highlighted = highlightLitHtml(code);

            expect(hasTokenClass(highlighted, "template-punctuation")).toBe(true);
            expect(hasTokenClass(highlighted, "function")).toBe(true);
            // Function should be tokenized separately from template punctuation
            expect(highlighted).toMatch(/<span[^>]*class="[^"]*function[^"]*"[^>]*>html<\/span>/);
            // Template punctuation should only include backticks
            expect(highlighted).toMatch(/<span[^>]*class="[^"]*template-punctuation[^"]*"[^>]*>`<\/span>/);
        });

        test("should preserve HTML structure in output", () => {
            const code = "html`<div>Hello</div>`";
            const highlighted = highlightLitHtml(code);

            // Check for proper tag tokenization (Prism.js tokenizes < and > separately)
            expect(hasTokenClass(highlighted, "tag-name")).toBe(true);
            expect(hasTokenClass(highlighted, "punctuation")).toBe(true);

            // Verify content preservation
            expect(containsContent(highlighted, "div")).toBe(true);
            expect(containsContent(highlighted, "Hello")).toBe(true);

            // Check HTML structure tokens
            expect(highlighted).toContain("&lt;");
            expect(highlighted).toContain(">");
        });
    });

    describe("HTML Content Highlighting", () => {
        test("should highlight basic HTML attributes", () => {
            const code = 'html`<div class="container" id="main">Content</div>`';
            const highlighted = highlightLitHtml(code);

            // Check for attribute-related token classes
            expect(hasTokenClass(highlighted, "attr-name")).toBe(true);
            expect(hasTokenClass(highlighted, "attr-value")).toBe(true);

            // Verify attribute names are present
            expect(containsContent(highlighted, "class")).toBe(true);
            expect(containsContent(highlighted, "id")).toBe(true);

            // Verify attribute values are present
            expect(highlighted).toContain("container");
            expect(highlighted).toContain("main");
        });

        test("should highlight tag names", () => {
            const code = "html`<custom-element>Content</custom-element>`";
            const highlighted = highlightLitHtml(code);

            expect(hasTokenClass(highlighted, "tag-name")).toBe(true);
            expect(containsContent(highlighted, "custom-element")).toBe(true);
        });

        test("should highlight string values in attributes", () => {
            const code = 'html`<div title="Hello World">Content</div>`';
            const highlighted = highlightLitHtml(code);

            expect(hasTokenClass(highlighted, "string")).toBe(true);
            expect(highlighted).toContain("Hello World");
        });

        test("should handle self-closing tags", () => {
            const code = 'html`<input type="text" />`';
            const highlighted = highlightLitHtml(code);

            expect(hasTokenClass(highlighted, "tag-name")).toBe(true);
            expect(hasTokenClass(highlighted, "attr-name")).toBe(true);
            expect(containsContent(highlighted, "input")).toBe(true);
            expect(containsContent(highlighted, "type")).toBe(true);
        });
    });

    describe("Token Class Validation", () => {
        test("should generate expected token classes", () => {
            const code = 'html`<div class="test">Hello</div>`';
            const highlighted = highlightLitHtml(code);
            const tokenClasses = extractTokenClasses(highlighted);

            // Should contain meaningful token classes (token is base class, filtered out)
            expect(tokenClasses.length).toBeGreaterThan(0);
            expect(hasTokenClass(highlighted, "lit-html")).toBe(true);
            expect(hasTokenClass(highlighted, "template-punctuation")).toBe(true);
            expect(hasTokenClass(highlighted, "function")).toBe(true);
        });
    });
});
