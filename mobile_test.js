import puppeteer from 'puppeteer';
import { spawn } from 'child_process';
import fs from 'fs';

const URL = 'http://localhost:4173';

async function runTests() {
  console.log('Starting server...');
  const server = spawn('npm', ['run', 'preview'], { shell: true });
  
  await new Promise(resolve => setTimeout(resolve, 3000));

  console.log('Launching browser...');
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  await page.setViewport({ width: 390, height: 844 }); // iPhone 12/13 size
  
  console.log('Navigating to page...');
  await page.goto(URL, { waitUntil: 'networkidle2' });

  // 1. Find elements wider than viewport
  const wideElements = await page.evaluate(() => {
    const elements = document.querySelectorAll('*');
    const vw = window.innerWidth;
    const overflowing = [];
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      // Ignore script/style/meta etc.
      if (['SCRIPT', 'STYLE', 'META', 'HEAD', 'LINK'].includes(el.tagName)) return;
      if (rect.width > vw || rect.right > vw) {
        overflowing.push({
          tag: el.tagName,
          className: el.className,
          id: el.id,
          width: rect.width,
          right: rect.right,
          vw: vw
        });
      }
    });
    return overflowing;
  });

  console.log('Wide elements:', JSON.stringify(wideElements, null, 2));
  fs.writeFileSync('mobile_test_results.json', JSON.stringify(wideElements, null, 2));

  console.log('Taking screenshots...');
  await page.screenshot({ path: 'scratch_mobile_top.png' });
  await page.evaluate(() => window.scrollTo(0, 1000));
  await page.screenshot({ path: 'scratch_mobile_mid.png' });
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.screenshot({ path: 'scratch_mobile_bottom.png' });

  // Click hamburger menu to test
  try {
    await page.click('.menu-toggle');
    await new Promise(resolve => setTimeout(resolve, 500));
    await page.screenshot({ path: 'scratch_mobile_menu_open.png' });
  } catch (e) {
    console.log('Could not click menu:', e.message);
  }

  await browser.close();
  server.kill();
  console.log('Done.');
  process.exit(0);
}

runTests().catch(err => {
  console.error(err);
  process.exit(1);
});
