const fs = require("fs");
const css = fs.readFileSync("src/index.css", "utf-8");

let nesting = 0;
let inComment = false;
let inString = false;
let stringChar = '';
let minNesting = 0;
let minNestingIndex = -1;

for (let i = 0; i < css.length; i++) {
    const char = css[i];
    const nextChar = css[i + 1];
    
    // Track comments
    if (!inString && !inComment && char === '/' && nextChar === '*') {
        inComment = true;
        i++;
        continue;
    }
    if (inComment && char === '*' && nextChar === '/') {
        inComment = false;
        i++;
        continue;
    }
    if (inComment) continue;
    
    // Track strings
    if (!inString && (char === '"' || char === "'")) {
        inString = true;
        stringChar = char;
        continue;
    }
    if (inString && char === stringChar && css[i - 1] !== '\\') {
        inString = false;
        continue;
    }
    if (inString) continue;
    
    // Count braces
    if (char === '{') {
        nesting++;
    } else if (char === '}') {
        nesting--;
        if (nesting < minNesting) {
            minNesting = nesting;
            minNestingIndex = i;
        }
    }
}

console.log("Nesting checks:");
console.log("Minimum nesting level reached:", minNesting);
if (minNestingIndex !== -1) {
    console.log("Nesting went below 0 at character index:", minNestingIndex);
    // Print around the min nesting index
    const start = Math.max(0, minNestingIndex - 100);
    const end = Math.min(css.length, minNestingIndex + 100);
    console.log("Context around error:");
    console.log(css.substring(start, end));
}
