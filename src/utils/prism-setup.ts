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

// Configure normalize whitespace plugin
Prism.plugins.NormalizeWhitespace.setDefaults({
    "remove-trailing": true,
    "remove-indent": true,
    "left-trim": true,
    "right-trim": true,
});

export { Prism };
export default Prism;
