const fs = require("fs");
const path = require("path");

const rows = JSON.parse(fs.readFileSync("rows.json", "utf-8"));

const cleanJSX = (html) => {
    let jsx = html;
    
    // Replace class
    jsx = jsx.replace(/class=/g, "className=");
    
    // Replace styles
    jsx = jsx.replace(/style=""/g, "");
    jsx = jsx.replace(/style="text-align:\s*center;?"/g, 'style={{ textAlign: "center" }}');
    jsx = jsx.replace(/style="width:\s*640px;?"/g, 'style={{ width: "640px" }}');
    jsx = jsx.replace(/style="display:\s*none;?"/g, 'style={{ display: "none" }}');
    jsx = jsx.replace(/style="display:\s*inherit;?"/g, 'style={{ display: "inherit" }}');
    jsx = jsx.replace(/style="font-size:\s*20px;?"/g, 'style={{ fontSize: "20px" }}');
    jsx = jsx.replace(/style="font-size:\s*36px;?"/g, 'style={{ fontSize: "36px" }}');
    
    // Replace attributes
    jsx = jsx.replace(/srcset=/g, "srcSet=");
    jsx = jsx.replace(/fetchpriority=/g, "fetchPriority=");
    jsx = jsx.replace(/itemtype=/g, "itemType=");
    jsx = jsx.replace(/itemscope="itemscope"/g, "itemScope");
    jsx = jsx.replace(/itemscope=/g, "itemScope=");
    jsx = jsx.replace(/itemprop=/g, "itemProp=");
    jsx = jsx.replace(/itemid=/g, "itemID=");
    jsx = jsx.replace(/datetime=/g, "dateTime=");
    jsx = jsx.replace(/autocomplete=/g, "autoComplete=");
    jsx = jsx.replace(/readonly="readonly"/g, "readOnly");
    jsx = jsx.replace(/readonly=/g, "readOnly=");
    jsx = jsx.replace(/selected="selected"/g, "defaultSelected={true}");
    jsx = jsx.replace(/onclick=/g, "onClick=");
    
    // Self-close tags
    jsx = jsx.replace(/<br>/g, "<br />");
    jsx = jsx.replace(/<hr>/g, "<hr />");
    
    // Self-close img and input
    jsx = jsx.replace(/<img([^>]*?)(?<!\/)>/g, "<img$1 />");
    jsx = jsx.replace(/<input([^>]*?)(?<!\/)>/g, "<input$1 />");
    
    // Convert html comments to JS comments
    jsx = jsx.replace(/<!--([\s\S]*?)-->/g, "{/*$1*/}");
    
    return jsx;
};

const names = [
    "HeroSection",
    "ServicesSection",
    "DetailsSection",
    "RepairSpecs",
    "PreisanfrageForm",
    "GoogleReviews",
    "RepairProcess",
    "AboutUs",
    "DividerImage",
    "MobileContract",
    "Locations",
    "FAQs",
    "SeoText",
    "ContactFooterInfo"
];

const imports = [];

rows.forEach((r, idx) => {
    const name = names[idx] || `Row${idx}`;
    const jsx = cleanJSX(r.html);
    const code = `import React from 'react';

const ${name} = () => {
  return (
    ${jsx}
  );
};

export default ${name};
`;
    
    fs.writeFileSync(`src/components/${name}.jsx`, code);
    console.log(`Wrote src/components/${name}.jsx`);
    imports.push(`import ${name} from './components/${name}';`);
});

// Update App.jsx
const appCode = `import React from 'react';
import Header from './components/Header';
${imports.join("\n")}

function App() {
  return (
    <div id="page" className="site">
      <Header />
      <div id="content" className="site-content">
        <div className="ast-container">
          <div id="primary" className="content-area primary">
            <main id="main" className="site-main">
              <article className="post-9623 page type-page status-publish ast-article-single">
                <div className="entry-content clear" itemProp="text">
                  <div className="fl-builder-content fl-builder-content-9623 fl-builder-content-primary fl-builder-global-templates-locked" data-post-id="9623">
                    <HeroSection />
                    <ServicesSection />
                    <DetailsSection />
                    <RepairSpecs />
                    <PreisanfrageForm />
                    <GoogleReviews />
                    <RepairProcess />
                    <AboutUs />
                    <DividerImage />
                    <MobileContract />
                    <Locations />
                    <FAQs />
                    <SeoText />
                    <ContactFooterInfo />
                  </div>
                </div>
              </article>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
`;

fs.writeFileSync("src/App.jsx", appCode);
console.log("Wrote src/App.jsx");
