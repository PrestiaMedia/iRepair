const fs = require("fs");
const https = require("https");
const path = require("path");

const output = JSON.parse(fs.readFileSync("output.json", "utf-8"));
let finalCss = "";

for (const style of output.inline_styles) {
    finalCss += style + "\n";
}

const resolveUrl = (cssUrl, base) => {
    try {
        return new URL(cssUrl, base).href;
    } catch(e) {
        return cssUrl;
    }
};

const processCss = (css, baseUrl) => {
    return css.replace(/url\((["']?)([^)"']+)\1\)/g, (match, quote, url) => {
        if (url.startsWith("data:") || url.startsWith("http")) return match;
        const resolved = resolveUrl(url, baseUrl);
        return `url("${resolved}")`;
    });
};

const download = (url) => {
    return new Promise((resolve, reject) => {
        if (!url || !url.startsWith("http")) return resolve("");
        https.get(url, (res) => {
            let data = "";
            res.on("data", chunk => data += chunk);
            res.on("end", () => resolve(processCss(data, url)));
        }).on("error", err => {
            console.error(err);
            resolve("");
        });
    });
};

(async () => {
    for (const url of output.css_links) {
        if (!url) continue;
        console.log("Downloading", url);
        const css = await download(url);
        finalCss += css + "\n";
    }
    fs.writeFileSync("src/index.css", finalCss);
    console.log("Wrote src/index.css");
    
    // Now run postcss safe parser
    const postcss = require("postcss");
    const safe = require("postcss-safe-parser");
    postcss().process(finalCss, { parser: safe, from: "src/index.css" }).then(result => {
        fs.writeFileSync("src/index.css", result.css);
        console.log("CSS fixed");
    });
})();

