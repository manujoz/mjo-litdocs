/**
 * Test utilities for Prism.js lit-html syntax highlighting tests
 */

/**
 * Test case interface for lit-html highlighting tests
 */
export interface LitHtmlTestCase {
    name: string;
    code: string;
    expectedTokens?: string[];
    shouldContain?: string[];
    shouldNotContain?: string[];
}

/**
 * Predefined test cases for lit-html syntax highlighting
 */
export const testCases: LitHtmlTestCase[] = [
    {
        name: "Simple lit-html template",
        code: "html`<div>Hello</div>`",
        expectedTokens: ["lit-html", "html-content", "tag-name"],
        shouldContain: ["<div>", "Hello", "</div>"],
    },
    {
        name: "Basic HTML attributes",
        code: 'html`<div class="container" id="main">Content</div>`',
        expectedTokens: ["lit-html", "html-content", "attr-name", "attr-value"],
        shouldContain: ["class", "container", "id", "main"],
    },
    {
        name: "Lit template with event",
        code: "html`<mjo-button @mjo-button:click=${this.handleClick}>Click</mjo-button>`",
        expectedTokens: ["lit-html", "lit-event-attr", "interpolation"],
        shouldContain: ["@mjo-button:click", "${this.handleClick}"],
    },
    {
        name: "Lit property and boolean attributes",
        code: "html`<my-component .visible=${this.visible} ?disabled=${this.disabled}>Content</my-component>`",
        expectedTokens: ["lit-html", "lit-property-attr", "lit-boolean-attr"],
        shouldContain: [".visible", "?disabled"],
    },
    {
        name: "Mixed attributes",
        code: 'html`<mjo-accordion-item itemTitle="Item 1" .expanded=${this.expanded} @toggle=${this.onToggle}>Content</mjo-accordion-item>`',
        expectedTokens: ["lit-html", "attr-name", "lit-property-attr", "lit-event-attr"],
        shouldContain: ["itemTitle", ".expanded", "@toggle"],
    },
    {
        name: "Complex accordion example",
        code: `return html\`
            <mjo-accordion>
                <mjo-accordion-item itemTitle="Item 1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </mjo-accordion-item>
                <mjo-accordion-item itemTitle="Item 2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </mjo-accordion-item>
            </mjo-accordion>
        \`;`,
        expectedTokens: ["lit-html", "tag-name", "attr-name"],
        shouldContain: ["mjo-accordion", "mjo-accordion-item", "itemTitle"],
    },
];

/**
 * Helper function to check if a highlighted string contains token classes
 */
export const hasTokenClass = (highlighted: string, tokenClass: string): boolean => {
    const classPattern = new RegExp(`class="[^"]*\\b${tokenClass}\\b[^"]*"`);
    return classPattern.test(highlighted);
};

/**
 * Helper function to extract all token classes from highlighted HTML
 */
export const extractTokenClasses = (highlighted: string): string[] => {
    const classMatches = highlighted.match(/class="([^"]*)"/g) || [];
    const allClasses: string[] = [];

    classMatches.forEach((match) => {
        const classes = match.match(/class="([^"]*)"/)?.[1];
        if (classes) {
            const classArray = classes.split(/\s+/).filter((cls) => cls.trim().length > 0);
            allClasses.push(...classArray);
        }
    });

    // Remove duplicates and filter out the generic 'token' class for more meaningful results
    const uniqueClasses = [...new Set(allClasses)];
    return uniqueClasses.filter((cls) => cls !== "token");
};

/**
 * Helper function to check if highlighted content contains specific content
 * This works with tokenized content by checking multiple scenarios
 */
export const containsContent = (highlighted: string, content: string): boolean => {
    // First try direct string search (fastest for simple cases)
    if (highlighted.includes(content)) {
        return true;
    }

    // Handle HTML entity encoding
    const encodedContent = content.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/&/g, "&amp;");

    if (highlighted.includes(encodedContent)) {
        return true;
    }

    // Extract text content and check (handles tokenized content)
    const textContent = extractTextContent(highlighted);
    if (textContent.includes(content)) {
        return true;
    }

    // For interpolation patterns like "${this.message}", check if components exist
    const interpolationMatch = content.match(/\$\{([^}]+)\}/);
    if (interpolationMatch) {
        const innerContent = interpolationMatch[1];
        // Check if the interpolation structure exists in tokenized form
        return (
            highlighted.includes("interpolation-punctuation") &&
            highlighted.includes("${") &&
            highlighted.includes("}") &&
            extractTextContent(highlighted).includes(innerContent)
        );
    }

    return false;
};

/**
 * Helper function to extract text content from highlighted HTML (removing tags)
 */
export const extractTextContent = (highlighted: string): string => {
    return highlighted
        .replace(/<[^>]*>/g, "") // Remove HTML tags
        .replace(/&lt;/g, "<") // Decode HTML entities
        .replace(/&gt;/g, ">")
        .replace(/&amp;/g, "&");
};

/**
 * Check if interpolation content exists in tokenized form
 * Handles cases where ${this.message} becomes separate token spans
 */
export const hasInterpolationContent = (highlighted: string, content: string): boolean => {
    // Must have interpolation tokens
    if (!hasTokenClass(highlighted, "interpolation")) {
        return false;
    }

    // Extract content between interpolation punctuation
    const interpolationPattern =
        /<span class="[^"]*interpolation-punctuation[^"]*">\$\{<\/span>(.*?)<span class="[^"]*interpolation-punctuation[^"]*">\}<\/span>/gs;
    const matches = highlighted.matchAll(interpolationPattern);

    for (const match of matches) {
        const interpolationContent = match[1];
        const textContent = extractTextContent(interpolationContent);
        if (textContent.includes(content)) {
            return true;
        }
    }

    return false;
};

/**
 * Check if content exists as tokenized JavaScript keywords/identifiers
 * For patterns like "this.message" that become separate token spans
 */
export const hasTokenizedContent = (highlighted: string, content: string): boolean => {
    const textContent = extractTextContent(highlighted);

    // Split content by dots and check if all parts exist
    if (content.includes(".")) {
        const parts = content.split(".");
        return parts.every((part) => textContent.includes(part));
    }

    return textContent.includes(content);
};
