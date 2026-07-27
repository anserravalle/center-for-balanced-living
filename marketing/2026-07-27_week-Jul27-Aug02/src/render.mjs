import { chromium } from 'playwright-core';
import { readFileSync, readdirSync } from 'fs';
import path from 'path';

// Usage: node render.mjs <htmlFile> <outPrefix>
const [htmlFile, outPrefix] = process.argv.slice(2);
if (!htmlFile || !outPrefix) { console.error('args: <htmlFile> <outPrefix>'); process.exit(1); }

// locate installed chromium
const base = '/opt/pw-browsers';
const dir = readdirSync(base).find(d => d.startsWith('chromium-'));
const exe = path.join(base, dir, 'chrome-linux', 'chrome');

const browser = await chromium.launch({ executablePath: exe, args: ['--no-sandbox','--force-color-profile=srgb'] });
const page = await browser.newPage({ deviceScaleFactor: 2 });
const url = 'file://' + path.resolve(htmlFile);
await page.goto(url, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(300);

const handles = await page.$$('.canvas');
let n = 0;
for (const h of handles) {
  n++;
  const id = await h.getAttribute('data-name');
  const name = id ? `${outPrefix}-${id}.png` : `${outPrefix}-${String(n).padStart(2,'0')}.png`;
  await h.screenshot({ path: path.join('out', name) });
  console.log('wrote out/' + name);
}
await browser.close();
console.log('done:', n, 'canvases');
