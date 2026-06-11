import puppeteer from 'puppeteer';

(async () => {
  console.log('Starting puppeteer...');
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  page.on('pageerror', error => {
    console.log('BROWSER ERROR:', error.message);
    console.log('STACK:', error.stack);
  });

  page.on('console', msg => {
    if (msg.type() === 'error' || msg.type() === 'warning' || msg.text().includes('Analytics')) {
      console.log('BROWSER CONSOLE:', msg.text());
    }
  });

  try {
    console.log('Navigating to http://localhost:4173/ ...');
    await page.goto('http://localhost:4173/', { waitUntil: 'networkidle0', timeout: 15000 });
    console.log('Done checking public page.');

    console.log('Navigating to http://localhost:4173/admin ...');
    await page.goto('http://localhost:4173/admin', { waitUntil: 'networkidle0', timeout: 15000 });
    console.log('Done checking admin page.');
  } catch (err) {
    console.error('Navigation timeout or error:', err.message);
  }

  console.log('Closing...');
  await browser.close();
})();
