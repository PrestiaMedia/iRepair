import puppeteer from 'puppeteer';
import { spawn } from 'child_process';

const URL = 'http://localhost:4173';
const OUTPUT_FILE = 'mobile_view.png';

async function takeScreenshot() {
  console.log('Starting preview server...');
  const server = spawn('npm', ['run', 'preview'], { shell: true });

  server.stdout.on('data', (data) => console.log(`Server: ${data}`));
  server.stderr.on('data', (data) => console.error(`Server Error: ${data}`));

  // Wait a bit for server to start
  await new Promise(resolve => setTimeout(resolve, 3000));

  console.log('Launching Puppeteer...');
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  // Emulate mobile
  const iPhone = puppeteer.KnownDevices['iPhone 13'];
  await page.emulate(iPhone);

  console.log(`Navigating to ${URL}...`);
  await page.goto(URL, { waitUntil: 'networkidle2' });

  console.log('Taking full page screenshot...');
  await page.screenshot({ path: OUTPUT_FILE, fullPage: true });

  console.log('Screenshot saved to ' + OUTPUT_FILE);
  await browser.close();

  // Kill server
  server.kill();
  process.exit(0);
}

takeScreenshot().catch(console.error);
