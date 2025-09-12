// Prism.js configuration for MJO-LITUI documentation
import Prism from "prismjs";

// Import core languages (only the ones that exist)
import "prismjs/components/prism-bash";
import "prismjs/components/prism-css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-json";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-markup"; // HTML is called 'markup' in Prism
import "prismjs/components/prism-scss";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-yaml";

// Import plugins (only the ones that exist)
import "prismjs/plugins/line-numbers/prism-line-numbers";
import "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace";

// Custom function to create Lit CSS grammar
const createLitCssGrammar = () => {
    return {
        pattern: /(^|[^a-zA-Z0-9_-])(css)`(?:[^`\\$]|\\[\s\S]|\$(?!\{)|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})*\})*`/,
        lookbehind: true,
        greedy: true,
        inside: {
            function: {
                pattern: /^css/,
                alias: "function",
            },
            "template-punctuation": {
                pattern: /`|`$/,
                alias: "punctuation",
            },
            interpolation: {
                pattern: /\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})*\}/,
                inside: {
                    "interpolation-punctuation": {
                        pattern: /^\$\{|\}$/,
                        alias: "punctuation",
                    },
                    rest: Prism.languages.typescript,
                },
            },
            css: {
                pattern: /(?!\$\{)[^$]+|(?:\$(?!\{))+/,
                inside: (function () {
                    // Create enhanced CSS grammar with better pseudo-selector highlighting
                    const enhancedCSS = {
                        comment: Prism.languages.css.comment,
                        atrule: Prism.languages.css.atrule,
                        url: Prism.languages.css.url,
                        // Enhanced selector with pseudo-selector tokenization
                        selector: {
                            pattern:
                                /(^|[{}\s])[^{}\s](?:[^{};"'\s]|\s+(?![\s{])|(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*'))*(?=\s*\{)/,
                            lookbehind: true,
                            inside: {
                                // Pseudo-selectors and pseudo-elements with function highlighting
                                pseudo: {
                                    pattern: /::?[a-z-]+(?:\([^)]*\))?/i,
                                    inside: {
                                        "pseudo-argument": {
                                            pattern: /\([^)]*\)/,
                                            inside: {
                                                punctuation: /[()]/,
                                                string: /"[^"]*"|'[^']*'/,
                                                number: /\b\d+(?:\.\d+)?[a-z%]*\b/i,
                                                keyword: /\b(?:odd|even|n|of)\b/,
                                                operator: /[+\-*\/]/,
                                            },
                                        },
                                    },
                                    alias: "function",
                                },
                                // Class selectors
                                class: /\.[a-z_-][a-z0-9_-]*/i,
                                // ID selectors
                                id: /#[a-z_-][a-z0-9_-]*/i,
                                // Attribute selectors
                                attribute: {
                                    pattern: /\[[^\]]*\]/,
                                    inside: {
                                        punctuation: /[\[\]]/,
                                        operator: /[~|^$*]?=/,
                                        string: /"[^"]*"|'[^']*'/,
                                    },
                                },
                                // Tag/element selectors
                                tag: /\b[a-z][a-z0-9-]*\b/i,
                                // Universal selector
                                universal: /\*/,
                                // Combinators
                                combinator: /[>+~]/,
                            },
                        },
                        string: Prism.languages.css.string,
                        property: Prism.languages.css.property,
                        important: Prism.languages.css.important,
                        function: Prism.languages.css.function,
                        punctuation: Prism.languages.css.punctuation,
                    };

                    return enhancedCSS;
                })(),
            },
        },
    };
};

// Custom Lit HTML grammar with improved attribute parsing
const createLitHtmlGrammar = () => {
    return {
        pattern: /(^|[^a-zA-Z0-9_-])(html)`(?:[^`\\$]|\\[\s\S]|\$(?!\{)|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})*\})*`/,
        lookbehind: true,
        greedy: true,
        inside: {
            function: {
                pattern: /^html/,
                alias: "function",
            },
            "template-punctuation": {
                pattern: /`|`$/,
                alias: "punctuation",
            },
            interpolation: {
                pattern: /\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})*\}/,
                inside: {
                    "interpolation-punctuation": {
                        pattern: /^\$\{|\}$/,
                        alias: "punctuation",
                    },
                    rest: Prism.languages.typescript,
                },
            },
            // Parse HTML content with special handling for Lit attributes
            "html-content": {
                pattern: /(?!\$\{)[^$]+|(?:\$(?!\{))+/,
                inside: {
                    // Comments first to avoid conflicts
                    comment: /<!--[\s\S]*?-->/,

                    // Complete HTML tags (without interpolations)
                    tag: {
                        pattern: /<\/?[a-zA-Z][a-zA-Z0-9-]*(?:\s+[^>$]*)?>/,
                        greedy: true,
                        inside: {
                            "tag-name": {
                                pattern: /^<\/?[a-zA-Z][a-zA-Z0-9-]*/,
                                inside: {
                                    punctuation: /^<\/?/,
                                },
                            },
                            // Lit event attributes (@event:name or @event)
                            "lit-event-attr": {
                                pattern: /@[a-zA-Z][a-zA-Z0-9-]*(?::[a-zA-Z][a-zA-Z0-9-]*)?(?=\s*=)/,
                                alias: "attr-name",
                            },
                            // Lit property attributes (.property)
                            "lit-property-attr": {
                                pattern: /\.[a-zA-Z][a-zA-Z0-9-]*(?=\s*=)/,
                                alias: "attr-name",
                            },
                            // Lit boolean attributes (?boolean)
                            "lit-boolean-attr": {
                                pattern: /\?[a-zA-Z][a-zA-Z0-9-]*(?=\s*=)/,
                                alias: "attr-name",
                            },
                            // Regular HTML attributes
                            "attr-name": {
                                pattern: /\b[a-zA-Z][a-zA-Z0-9-]*(?=\s*=)/,
                            },
                            // Attribute values (strings only, interpolation handled separately)
                            "attr-value": {
                                pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s>$]+)/,
                                inside: {
                                    punctuation: /^=/,
                                    string: /"[^"]*"|'[^']*'/,
                                },
                            },
                            // Boolean HTML attributes (without equals sign)
                            "boolean-attr": {
                                pattern: /\b(?:[a-zA-Z][a-zA-Z0-9-]*)(?=\s+|\s*>)/,
                                alias: "attr-name",
                            },
                            punctuation: /\/?>/,
                        },
                    },

                    // Opening tag names with attributes that have interpolations
                    "opening-tag-with-attrs": {
                        pattern: /<[a-zA-Z][a-zA-Z0-9-]*(?=\s)/,
                        inside: {
                            "tag-name": {
                                pattern: /[a-zA-Z][a-zA-Z0-9-]*/,
                            },
                            punctuation: /^</,
                        },
                    },

                    // Lit attributes (for cases with interpolations)
                    "lit-event-attr": {
                        pattern: /@[a-zA-Z][a-zA-Z0-9-]*(?::[a-zA-Z][a-zA-Z0-9-]*)?(?=\s*=)/,
                        alias: "attr-name",
                    },
                    "lit-property-attr": {
                        pattern: /\.[a-zA-Z][a-zA-Z0-9-]*(?=\s*=)/,
                        alias: "attr-name",
                    },
                    "lit-boolean-attr": {
                        pattern: /\?[a-zA-Z][a-zA-Z0-9-]*(?=\s*=)/,
                        alias: "attr-name",
                    },

                    // Regular attributes (for cases with interpolations)
                    "attr-name": {
                        pattern: /\b[a-zA-Z][a-zA-Z0-9-]*(?=\s*=)/,
                    },

                    // Closing tags
                    "closing-tag": {
                        pattern: /<\/[a-zA-Z][a-zA-Z0-9-]*>/,
                        inside: {
                            "tag-name": {
                                pattern: /[a-zA-Z][a-zA-Z0-9-]*/,
                            },
                            punctuation: /<\/|>/,
                        },
                    },

                    // Attribute equals sign
                    "attr-equals": {
                        pattern: /=/,
                        alias: "punctuation",
                    },

                    // Tag closing brackets
                    "tag-close": {
                        pattern: />/,
                        alias: "punctuation",
                    },

                    // String values (standalone)
                    string: {
                        pattern: /"[^"]*"|'[^']*'/,
                    },

                    // HTML entities
                    entity: /&[a-zA-Z0-9#]+;/,
                },
            },
        },
    };
};

// Wait for DOM to be ready, then extend Prism grammar
if (typeof window !== "undefined") {
    // Apply to TypeScript
    if (Prism.languages.typescript) {
        Prism.languages.insertBefore("typescript", "template-string", {
            "lit-html": createLitHtmlGrammar(),
            "lit-css": createLitCssGrammar(),
        });
    }

    // Apply to JavaScript for compatibility
    if (Prism.languages.javascript) {
        Prism.languages.insertBefore("javascript", "template-string", {
            "lit-html": createLitHtmlGrammar(),
            "lit-css": createLitCssGrammar(),
        });
    }
} else {
    // Server-side: apply immediately
    if (Prism.languages.typescript) {
        Prism.languages.insertBefore("typescript", "template-string", {
            "lit-html": createLitHtmlGrammar(),
            "lit-css": createLitCssGrammar(),
        });
    }

    if (Prism.languages.javascript) {
        Prism.languages.insertBefore("javascript", "template-string", {
            "lit-html": createLitHtmlGrammar(),
            "lit-css": createLitCssGrammar(),
        });
    }
}

// Configure normalize whitespace plugin
Prism.plugins.NormalizeWhitespace.setDefaults({
    "remove-trailing": true,
    "remove-indent": true,
    "left-trim": true,
    "right-trim": true,
});

/**
 * Sets up the lit-html grammar for Prism.js
 * This should be called before using Prism to highlight lit-html templates
 */
export const setupLitHtmlGrammar = () => {
    if (Prism.languages.typescript) {
        Prism.languages.insertBefore("typescript", "template-string", {
            "lit-html": createLitHtmlGrammar(),
        });
    }
};

/**
 * Highlights code using Prism.js with lit-html support
 */
export const highlightLitHtml = (code: string): string => {
    setupLitHtmlGrammar();
    return Prism.highlight(code, Prism.languages.typescript, "typescript");
};

export { createLitCssGrammar, createLitHtmlGrammar, Prism };
export default Prism;
