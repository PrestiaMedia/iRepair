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
  
  // 360px viewport
  await page.setViewport({ width: 360, height: 800 });
  await page.goto(URL, { waitUntil: 'networkidle0' });
  await page.screenshot({ path: 'scratch_mobile_360_full.png', fullPage: true });

  // 390px viewport
  await page.setViewport({ width: 390, height: 844 });
  await page.goto(URL, { waitUntil: 'networkidle0' });
  await page.screenshot({ path: 'scratch_mobile_390_full.png', fullPage: true });

  // Check the menu
  await page.click('.menu-toggle');
  await new Promise(resolve => setTimeout(resolve, 1000));
  await page.screenshot({ path: 'scratch_mobile_menu_opened.png', fullPage: false });

  await browser.close();
  server.kill();
  console.log('Done.');
  process.exit(0);
}

runTests().catch(err => {
  console.error(err);
  process.exit(1);
});
