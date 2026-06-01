const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5174', { waitUntil: 'networkidle0' });
  
  await page.evaluate(() => {
    const el = document.querySelector('.footer-bottom-info');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'end' });
  });
  
  await new Promise(r => setTimeout(r, 1000));
  
  await page.screenshot({ path: 'footer_screenshot.png', fullPage: true });
  
  await browser.close();
  console.log('Screenshot saved as footer_screenshot.png');
})();
