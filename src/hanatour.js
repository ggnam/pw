const assert = require("node:assert");
const { chromium, devices } = require("playwright");

(async () => {
    const browser = await chromium.launch({
        headless: false,
    });
    const context = await browser.newContext(devices["iPhone 11"]);
    const page = await context.newPage();

    await page.goto("https://m.hanatour.com/dcr/");
})();
