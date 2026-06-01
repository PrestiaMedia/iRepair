const fs = require("fs");
const cheerio = require("cheerio");

const html = fs.readFileSync("../original_home.html", "utf-8");
const $ = cheerio.load(html);

const css_links = [];
$("link[rel='stylesheet']").each((i, el) => {
    css_links.push($(el).attr("href"));
});

const inline_styles = [];
$("style").each((i, el) => {
    inline_styles.push($(el).html());
});

const header = $("header").first();
const header_html = header.length ? $.html(header) : "";

// Beaver builder uses .fl-row for its main sections
const content = $("#content");
const hero = content.find(".fl-row").first();
const hero_html = hero.length ? $.html(hero) : "";

fs.writeFileSync("output.json", JSON.stringify({
    css_links,
    inline_styles,
    header_html,
    hero_html
}, null, 2));

console.log("Extraction complete.");

