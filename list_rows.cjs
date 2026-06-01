const fs = require("fs");
const cheerio = require("cheerio");

const rows = JSON.parse(fs.readFileSync("rows.json", "utf-8"));
rows.forEach(r => {
    const $ = cheerio.load(r.html);
    const text = $("body").text().trim().replace(/\s+/g, " ");
    console.log(`Row ${r.index}: ID: ${r.id} | Text: ${text.substring(0, 120)}...`);
});

