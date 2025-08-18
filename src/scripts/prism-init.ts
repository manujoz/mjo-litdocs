// Prism initialization script for client-side
import { Prism } from "../utils/prism-setup";

// Initialize Prism highlighting after page load
document.addEventListener("DOMContentLoaded", () => {
    // Highlight all code blocks
    Prism.highlightAll();

    // Re-highlight when new content is added dynamically
    const observer = new MutationObserver((mutations) => {
        let shouldRehighlight = false;

        mutations.forEach((mutation) => {
            if (mutation.type === "childList") {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType === Node.ELEMENT_NODE) {
                        const element = node as Element;
                        if (element.querySelector('pre[class*="language-"]') || element.matches('pre[class*="language-"]')) {
                            shouldRehighlight = true;
                        }
                    }
                });
            }
        });

        if (shouldRehighlight) {
            Prism.highlightAll();
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
    });
});
