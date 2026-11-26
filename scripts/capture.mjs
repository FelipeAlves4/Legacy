import { chromium } from "playwright-core";
import { mkdir, access } from "node:fs/promises";
import path from "node:path";

const edge =
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const executablePath =
  process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH ||
  (await access(edge).then(
    () => edge,
    () => undefined,
  ));
const browser = await chromium.launch({
  headless: true,
  ...(executablePath ? { executablePath } : {}),
});
const base = process.env.TEST_BASE_URL || "http://localhost:3000";
const output = path.resolve("artifacts", "screenshots");
await mkdir(output, { recursive: true });

try {
  for (const [name, width, height] of [
    ["desktop", 1440, 900],
    ["mobile", 390, 844],
  ]) {
    const page = await browser.newPage({
      viewport: { width, height },
      deviceScaleFactor: 1,
      reducedMotion: "reduce",
    });
    await page.goto(base, { waitUntil: "networkidle" });
    for (
      let y = 0;
      y < (await page.evaluate(() => document.documentElement.scrollHeight));
      y += height
    ) {
      await page.evaluate((y) => window.scrollTo(0, y), y);
      await page.waitForTimeout(50);
    }
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.screenshot({
      path: path.join(output, `${name}.png`),
      fullPage: true,
    });
    await page.screenshot({ path: path.join(output, `${name}-hero.png`) });
    const size = await page.evaluate(() => ({
      viewport: innerWidth,
      content: document.documentElement.scrollWidth,
    }));
    if (size.content > size.viewport)
      throw new Error(`${name} horizontal overflow: ${JSON.stringify(size)}`);
    console.log(`${name}: ${size.viewport}px, no horizontal overflow`);
    await page.close();
  }
  const page = await browser.newPage();
  for (const width of [360, 768, 1024, 1920]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(base, { waitUntil: "domcontentloaded" });
    const size = await page.evaluate(() => ({
      viewport: innerWidth,
      content: document.documentElement.scrollWidth,
    }));
    if (size.content > size.viewport)
      throw new Error(
        `${width}px horizontal overflow: ${JSON.stringify(size)}`,
      );
    console.log(`${width}px: no horizontal overflow`);
  }
  await page.close();
} finally {
  await browser.close();
}
