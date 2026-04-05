import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const url = process.argv[2] || 'http://localhost:3000';
const label = process.argv[3] || '';

const screenshotDir = path.join(__dirname, 'temporary screenshots');
if (!fs.existsSync(screenshotDir)) fs.mkdirSync(screenshotDir, { recursive: true });

const existing = fs.readdirSync(screenshotDir).filter(f => f.startsWith('screenshot-'));
const nextNum = existing.length > 0
  ? Math.max(...existing.map(f => parseInt(f.match(/screenshot-(\d+)/)?.[1] || '0'))) + 1
  : 1;

const filename = label
  ? `screenshot-${nextNum}-${label}.png`
  : `screenshot-${nextNum}.png`;

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
  await new Promise(r => setTimeout(r, 5000));
  await page.screenshot({
    path: path.join(screenshotDir, filename),
    fullPage: true,
  });
  console.log(`Screenshot saved: ${path.join(screenshotDir, filename)}`);
  await browser.close();
})();
