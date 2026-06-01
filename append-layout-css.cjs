const fs = require("fs");
const path = require("path");

const stepPath = "C:\\Users\\davin\\.gemini\\antigravity\\brain\\6587df49-4657-47a3-b1d1-98a13b04747f\\.system_generated\\steps\\571\\content.md";
const targetPath = "src/index.css";

if (!fs.existsSync(stepPath)) {
    console.error("Step file not found:", stepPath);
    process.exit(1);
}

const fileContent = fs.readFileSync(stepPath, "utf-8");
const lines = fileContent.split("\n");

// Skip the first 4 lines (front matter)
const cssLines = lines.slice(4);
const rawCss = cssLines.join("\n").trim();

if (!rawCss) {
    console.error("No CSS content found in step file!");
    process.exit(1);
}

fs.appendFileSync(targetPath, "\n\n/* --- Beaver Builder 9623 Layout CSS --- */\n" + rawCss + "\n");
console.log("Successfully appended layout CSS to", targetPath);
