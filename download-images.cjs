const https = require("https");
const fs = require("fs");
const path = require("path");

const IMAGES_DIR = path.join(__dirname, "public", "images");

// Create images directory
if (!fs.existsSync(IMAGES_DIR)) {
  fs.mkdirSync(IMAGES_DIR, { recursive: true });
}

const images = [
  // Header Logo
  { url: "https://handy-reparatur-ingolstadt.de/wp-content/uploads/irepairstore-logo-280x61.webp", filename: "irepairstore-logo.webp" },
  { url: "https://handy-reparatur-ingolstadt.de/wp-content/uploads/irepairstore-logo-2x.png", filename: "irepairstore-logo-2x.png" },
  
  // Hero Section
  { url: "https://handy-reparatur-ingolstadt.de/wp-content/uploads/handy-reparatur-ingolstadt.png", filename: "handy-reparatur-ingolstadt.png" },
  { url: "https://handy-reparatur-ingolstadt.de/wp-content/uploads/handy-reparatur-ingolstadt-300x300.png", filename: "handy-reparatur-ingolstadt-300x300.png" },
  
  // Services Section background images (from CSS)
  { url: "https://handy-reparatur-ingolstadt.de/wp-content/uploads/dont-miss-the-party.png", filename: "dont-miss-the-party.png" },
  { url: "https://handy-reparatur-ingolstadt.de/wp-content/uploads/handy-reparatur.png", filename: "handy-reparatur.png" },
  { url: "https://handy-reparatur-ingolstadt.de/wp-content/uploads/tablet-reparatur.png", filename: "tablet-reparatur.png" },
  { url: "https://handy-reparatur-ingolstadt.de/wp-content/uploads/notebook-reparatur.png", filename: "notebook-reparatur.png" },
  { url: "https://handy-reparatur-ingolstadt.de/wp-content/uploads/konsolen-reparatur-2.png", filename: "konsolen-reparatur-2.png" },
  
  // RepairSpecs - Handy Reparatur Service
  { url: "https://handy-reparatur-ingolstadt.de/wp-content/uploads/handy-reparatur-service.png", filename: "handy-reparatur-service.png" },
  { url: "https://handy-reparatur-ingolstadt.de/wp-content/uploads/handy-reparatur-service-150x300.png", filename: "handy-reparatur-service-150x300.png" },
  
  // RepairProcess images
  { url: "https://handy-reparatur-ingolstadt.de/wp-content/uploads/handy-ueberpruefung-vor-ort.png", filename: "handy-ueberpruefung-vor-ort.png" },
  { url: "https://handy-reparatur-ingolstadt.de/wp-content/uploads/handy-ueberpruefung-vor-ort-300x169.png", filename: "handy-ueberpruefung-vor-ort-300x169.png" },
  { url: "https://handy-reparatur-ingolstadt.de/wp-content/uploads/handy-diagnose.png", filename: "handy-diagnose.png" },
  { url: "https://handy-reparatur-ingolstadt.de/wp-content/uploads/handy-diagnose-300x169.png", filename: "handy-diagnose-300x169.png" },
  { url: "https://handy-reparatur-ingolstadt.de/wp-content/uploads/handy-reparatur-angebot-erstellen.png", filename: "handy-reparatur-angebot-erstellen.png" },
  { url: "https://handy-reparatur-ingolstadt.de/wp-content/uploads/handy-reparatur-angebot-erstellen-300x169.png", filename: "handy-reparatur-angebot-erstellen-300x169.png" },
  { url: "https://handy-reparatur-ingolstadt.de/wp-content/uploads/handy-reparatur-1.png", filename: "handy-reparatur-1.png" },
  { url: "https://handy-reparatur-ingolstadt.de/wp-content/uploads/handy-reparatur-1-300x169.png", filename: "handy-reparatur-1-300x169.png" },
  { url: "https://handy-reparatur-ingolstadt.de/wp-content/uploads/irepairstore24-westpark-1.png", filename: "irepairstore24-westpark-1.png" },
  { url: "https://handy-reparatur-ingolstadt.de/wp-content/uploads/irepairstore24-westpark-1-300x169.png", filename: "irepairstore24-westpark-1-300x169.png" },
  
  // DividerImage - CEO
  { url: "https://handy-reparatur-ingolstadt.de/wp-content/uploads/ceo-irepairstore24.png", filename: "ceo-irepairstore24.png" },
  { url: "https://handy-reparatur-ingolstadt.de/wp-content/uploads/ceo-irepairstore24-188x300.png", filename: "ceo-irepairstore24-188x300.png" },
  // DividerImage - Logo2
  { url: "https://handy-reparatur-ingolstadt.de/wp-content/uploads/Logo2-1.png", filename: "Logo2-1.png" },
  { url: "https://handy-reparatur-ingolstadt.de/wp-content/uploads/Logo2-1-300x66.png", filename: "Logo2-1-300x66.png" },
  { url: "https://handy-reparatur-ingolstadt.de/wp-content/uploads/Logo2-1-1024x224.png", filename: "Logo2-1-1024x224.png" },
  { url: "https://handy-reparatur-ingolstadt.de/wp-content/uploads/Logo2-1-768x168.png", filename: "Logo2-1-768x168.png" },
  { url: "https://handy-reparatur-ingolstadt.de/wp-content/uploads/Logo2-1-280x61.png", filename: "Logo2-1-280x61.png" },
  
  // MobileContract
  { url: "https://handy-reparatur-ingolstadt.de/wp-content/uploads/handyvertrag-abschliessen.png", filename: "handyvertrag-abschliessen.png" },
  { url: "https://handy-reparatur-ingolstadt.de/wp-content/uploads/handyvertrag-abschliessen-300x89.png", filename: "handyvertrag-abschliessen-300x89.png" },
  
  // Locations
  { url: "https://handy-reparatur-ingolstadt.de/wp-content/uploads/inner_1.jpg", filename: "inner_1.jpg" },
  { url: "https://handy-reparatur-ingolstadt.de/wp-content/uploads/inner_1-300x225.jpg", filename: "inner_1-300x225.jpg" },
  { url: "https://handy-reparatur-ingolstadt.de/wp-content/uploads/irepairstore24-im-westpark.png", filename: "irepairstore24-im-westpark.png" },
  { url: "https://handy-reparatur-ingolstadt.de/wp-content/uploads/irepairstore24-im-westpark-300x225.png", filename: "irepairstore24-im-westpark-300x225.png" },
  
  // ContactFooterInfo
  { url: "https://handy-reparatur-ingolstadt.de/wp-content/uploads/handy-reparatur-stadtmitte.png", filename: "handy-reparatur-stadtmitte.png" },
  { url: "https://handy-reparatur-ingolstadt.de/wp-content/uploads/handy-reparatur-stadtmitte-300x300.png", filename: "handy-reparatur-stadtmitte-300x300.png" },
  { url: "https://handy-reparatur-ingolstadt.de/wp-content/uploads/handy-reparatur-stadtmitte-150x150.png", filename: "handy-reparatur-stadtmitte-150x150.png" },
  { url: "https://handy-reparatur-ingolstadt.de/wp-content/uploads/handy-reparatur-stadtmitte-400x400.png", filename: "handy-reparatur-stadtmitte-400x400.png" },
  { url: "https://handy-reparatur-ingolstadt.de/wp-content/uploads/westpark-ingolstadt-eingang-d.png", filename: "westpark-ingolstadt-eingang-d.png" },
  { url: "https://handy-reparatur-ingolstadt.de/wp-content/uploads/westpark-ingolstadt-eingang-d-300x300.png", filename: "westpark-ingolstadt-eingang-d-300x300.png" },
  { url: "https://handy-reparatur-ingolstadt.de/wp-content/uploads/westpark-ingolstadt-eingang-d-150x150.png", filename: "westpark-ingolstadt-eingang-d-150x150.png" },
  
  // Google Maps / Borlabs Cookie placeholders
  { url: "https://handy-reparatur-ingolstadt.de/wp-content/uploads/borlabs-cookie/1/brlbs-cb-google-maps-main.png", filename: "brlbs-cb-google-maps-main.png" },
  { url: "https://handy-reparatur-ingolstadt.de/wp-content/uploads/borlabs-cookie/1/29591_Trustindex_2-main.png", filename: "29591_Trustindex_2-main.png" },
  
  // DetailsSection video poster
  // (video file is too large, keep remote reference for now)
];

function downloadFile(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    
    const request = https.get(url, { 
      headers: { 
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" 
      } 
    }, (response) => {
      // Handle redirects
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        file.close();
        fs.unlinkSync(filepath);
        downloadFile(response.headers.location, filepath).then(resolve).catch(reject);
        return;
      }
      
      if (response.statusCode !== 200) {
        file.close();
        fs.unlinkSync(filepath);
        reject(new Error(`HTTP ${response.statusCode} for ${url}`));
        return;
      }
      
      response.pipe(file);
      file.on("finish", () => {
        file.close();
        resolve();
      });
    });
    
    request.on("error", (err) => {
      file.close();
      if (fs.existsSync(filepath)) fs.unlinkSync(filepath);
      reject(err);
    });
  });
}

async function downloadAll() {
  console.log(`Downloading ${images.length} images to ${IMAGES_DIR}...\n`);
  
  let success = 0;
  let failed = 0;
  
  for (const img of images) {
    const filepath = path.join(IMAGES_DIR, img.filename);
    
    // Skip if already downloaded
    if (fs.existsSync(filepath) && fs.statSync(filepath).size > 0) {
      console.log(`  SKIP: ${img.filename} (already exists)`);
      success++;
      continue;
    }
    
    try {
      await downloadFile(img.url, filepath);
      const size = fs.statSync(filepath).size;
      console.log(`  OK: ${img.filename} (${(size / 1024).toFixed(1)}KB)`);
      success++;
    } catch (err) {
      console.log(`  FAIL: ${img.filename} - ${err.message}`);
      failed++;
    }
  }
  
  console.log(`\nDone! ${success} downloaded, ${failed} failed.`);
}

downloadAll();
