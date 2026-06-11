import puppeteer from 'puppeteer';
import fs from 'fs';

(async () => {
  console.log("Starting puppeteer...");
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });

  page.on('console', msg => console.log('BROWSER CONSOLE:', msg.text()));
  page.on('pageerror', err => console.log('BROWSER ERROR:', err.message));

  console.log("Navigating to https://irepair-a2x.pages.dev/ ...");
  try {
    await page.goto('https://irepair-a2x.pages.dev/', { waitUntil: 'networkidle2', timeout: 15000 });
    await page.screenshot({ path: 'screenshot_home.png' });
    console.log("Screenshot saved as screenshot_home.png");
  } catch (e) {
    console.log("Navigation timeout or error:", e.message);
  }
  
  console.log("Navigating to https://irepair-a2x.pages.dev/admin ...");
  try {
    await page.goto('https://irepair-a2x.pages.dev/admin', { waitUntil: 'networkidle2', timeout: 15000 });
    await page.screenshot({ path: 'screenshot_admin.png' });
    console.log("Screenshot saved as screenshot_admin.png");
  } catch (e) {
    console.log("Navigation timeout or error:", e.message);
  }

  console.log("Navigating to https://irepair-a2x.pages.dev/gebrauchte-handys ...");
  try {
    await page.goto('https://irepair-a2x.pages.dev/gebrauchte-handys', { waitUntil: 'networkidle2', timeout: 15000 });
    await page.screenshot({ path: 'screenshot_used.png' });
    console.log("Screenshot saved as screenshot_used.png");
  } catch (e) {
    console.log("Navigation timeout or error:", e.message);
  }
  
  await browser.close();
})();
