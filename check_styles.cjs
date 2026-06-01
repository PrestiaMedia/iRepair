const fs = require("fs");
const rows = JSON.parse(fs.readFileSync("rows.json", "utf-8"));
let count = 0;
rows.forEach(r => {
    const matches = r.html.match(/style="([^"]*)"/g);
    if (matches) {
        console.log(`Row ${r.index} has ${matches.length} styles:`, matches);
        count += matches.length;
    }
});
console.log(`Total styles: ${count}`);

