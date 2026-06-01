const fs = require("fs");
const https = require("https");
const postcss = require("postcss");
const safe = require("postcss-safe-parser");

const url = "https://handy-reparatur-ingolstadt.de/wp-content/uploads/bb-plugin/cache/9623-layout.css";

function fetchCSS(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = "";
      res.on("data", chunk => data += chunk);
      res.on("end", () => resolve(data));
      res.on("error", reject);
    }).on("error", reject);
  });
}

async function main() {
  console.log("Fetching layout CSS...");
  const rawCSS = await fetchCSS(url);
  console.log("Raw CSS length:", rawCSS.length);

  // Fix the known syntax error: border-top: 1border-bottom: 1
  let fixedCSS = rawCSS.replace(/border-top:\s*1\s*border-bottom:\s*1/g, "border-top: 1px solid #C89797; border-bottom: 1px solid #C89797");
  
  // Fix ##color values (doubled hash)
  fixedCSS = fixedCSS.replace(/##([0-9a-fA-F])/g, "#$1");

  console.log("Running PostCSS safe parser...");
  const result = await postcss().process(fixedCSS, { parser: safe, from: "layout.css" });

  const outputPath = "src/layout.css";
  fs.writeFileSync(outputPath, result.css, "utf-8");
  console.log("Wrote sanitized layout CSS to", outputPath, "(" + result.css.length + " bytes)");
}

main().catch(console.error);
