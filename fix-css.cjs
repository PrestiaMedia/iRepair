const fs = require("fs");

const filePath = "src/index.css";
let css = fs.readFileSync(filePath, "utf-8");

const target = "border-top: 1border-bottom: 1";
const replacement = "border-top: 1px solid #C89797;\nborder-bottom: 1px solid #C89797;";

if (css.includes(target)) {
    css = css.replace(target, replacement);
    fs.writeFileSync(filePath, css);
    console.log("Successfully fixed the invalid border syntax in index.css!");
} else {
    console.error("Could not find the target text to fix!");
}
