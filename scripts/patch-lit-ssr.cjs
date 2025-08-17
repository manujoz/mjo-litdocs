// patch-lit-ssr.cjs
// Script para parchear @lit-labs/ssr/lib/render-value.js tras instalar dependencias

const fs = require("fs");
const path = require("path");
const { exit } = require("process");

const targetFile = path.join(__dirname, "../node_modules/@lit-labs/ssr/lib/render-value.js");

const SEARCH = "// if no matching slot exists.";
const REPLACE = `// if no matching slot exists.\n                    if(!renderInfo.eventTargetStack) renderInfo.eventTargetStack = []; // Patch\n                    if(!renderInfo.slotStack) renderInfo.slotStack = [];`;

try {
    let content = fs.readFileSync(targetFile, "utf8");
    if (content.includes("if(!renderInfo.eventTargetStack) renderInfo.eventTargetStack = []; // Patch")) {
        exit(0);
    }
    if (content.includes(SEARCH)) {
        content = content.replace(SEARCH, REPLACE);
        fs.writeFileSync(targetFile, content, "utf8");
        console.log("✅ Patched @lit-labs/ssr/lib/render-value.js successfully.");
    } else {
        console.log("⚠️ No patch applied: search string not found.");
    }
} catch (err) {
    console.error("❌ Error patching render-value.js:", err);
}
