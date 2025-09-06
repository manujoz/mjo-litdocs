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

// Custom Lit Element template literals grammar for proper HTML highlighting
// This creates a more sophisticated grammar that handles nested templates and interpolations

// First, create a complex pattern for lit-html that handles JavaScript interpolations
const createLitHtmlGrammar = () => {
    return {
        pattern: /html`(?:[^`\\$]|\\[\s\S]|\$(?!\{)|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})*\})*`/,
        greedy: true,
        inside: {
            "template-punctuation": {
                pattern: /^html`|`$/,
                alias: "punctuation",
            },
            interpolation: {
                pattern: /\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})*\}/,
                inside: {
                    "interpolation-punctuation": {
                        pattern: /^\$\{|\}$/,
                        alias: "punctuation",
                    },
                    // Nested html templates inside interpolations
                    "nested-lit-html": {
                        pattern: /html`(?:[^`\\$]|\\[\s\S]|\$(?!\{)|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})*\})*`/,
                        inside: {
                            "template-punctuation": {
                                pattern: /^html`|`$/,
                                alias: "punctuation",
                            },
                            "nested-interpolation": {
                                pattern: /\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})*\}/,
                                inside: {
                                    "interpolation-punctuation": {
                                        pattern: /^\$\{|\}$/,
                                        alias: "punctuation",
                                    },
                                    rest: Prism.languages.typescript,
                                },
                            },
                            html: {
                                pattern: /(?!\$\{)[^$]+|(?:\$(?!\{))+/,
                                inside: Prism.languages.markup,
                            },
                        },
                    },
                    rest: Prism.languages.typescript,
                },
            },
            html: {
                pattern: /(?!\$\{)[^$]+|(?:\$(?!\{))+/,
                inside: Prism.languages.markup,
            },
        },
    };
};

const createLitCssGrammar = () => {
    return {
        pattern: /css`(?:[^`\\$]|\\[\s\S]|\$(?!\{)|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})*\})*`/,
        greedy: true,
        inside: {
            "template-punctuation": {
                pattern: /^css`|`$/,
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
                inside: Prism.languages.css,
            },
        },
    };
};

// Apply to TypeScript
Prism.languages.insertBefore("typescript", "template-string", {
    "lit-html": createLitHtmlGrammar(),
    "lit-css": createLitCssGrammar(),
});

// Apply to JavaScript for compatibility
Prism.languages.insertBefore("javascript", "template-string", {
    "lit-html": createLitHtmlGrammar(),
    "lit-css": createLitCssGrammar(),
});

// Configure normalize whitespace plugin
Prism.plugins.NormalizeWhitespace.setDefaults({
    "remove-trailing": true,
    "remove-indent": true,
    "left-trim": true,
    "right-trim": true,
});

export { Prism };
export default Prism;
