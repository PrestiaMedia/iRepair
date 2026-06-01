const fs = require("fs");
const cheerio = require("cheerio");

const html = fs.readFileSync("../original_home.html", "utf-8");
const $ = cheerio.load(html);

const rows = [];
$(".fl-builder-content-9623 .fl-row").each((i, el) => {
    rows.push({
        index: i,
        id: $(el).attr("data-node"),
        classes: $(el).attr("class"),
        html: $.html(el)
    });
});

fs.writeFileSync("rows.json", JSON.stringify(rows, null, 2));
console.log(`Extracted ${rows.length} rows.`);

