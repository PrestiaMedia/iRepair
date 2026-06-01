const fs = require("fs");

const targetPath = "src/index.css";
if (!fs.existsSync(targetPath)) {
    console.error("Target file not found:", targetPath);
    process.exit(1);
}

let css = fs.readFileSync(targetPath, "utf-8");

// Simple regex-based formatting to introduce newlines
css = css.replace(/([;{}])/g, "$1\n");

// Clean up multiple consecutive newlines
css = css.replace(/\n\s*\n/g, "\n");

fs.writeFileSync(targetPath, css);
console.log("Successfully prettified index.css!");
