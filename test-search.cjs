const fs = require("fs");
const css = fs.readFileSync("src/index.css", "utf-8");

const matches = [];
let index = 0;
while ((index = css.indexOf("button-custom-menu-item", index)) !== -1) {
    matches.push(css.substring(index - 100, index + 300));
    index += 25;
}
console.log("button-custom-menu-item occurrences:");
matches.forEach((m, i) => console.log(`${i + 1}: ${m.replace(/\n/g, " ")}`));
