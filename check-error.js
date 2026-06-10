import puppeteer from 'puppeteer';

(async () => {
  console.log("Starting puppeteer...");
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('BROWSER CONSOLE:', msg.text()));
  page.on('pageerror', err => console.log('BROWSER ERROR:', err.message));

  console.log("Navigating to localhost:4173/gebrauchte-handys ...");
  try {
    await page.goto('http://localhost:4173/gebrauchte-handys', { waitUntil: 'networkidle0', timeout: 10000 });
    // Wait a bit
    await new Promise(r => setTimeout(r, 2000));
    console.log("Done checking public page.");
  } catch (e) {
    console.log("Navigation timeout or error:", e.message);
  }
  
  console.log("Closing...");
  await browser.close();
})();
