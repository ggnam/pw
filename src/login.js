const { chromium } = require("playwright");

async function runLoginTest() {
    const browser = await chromium.launch({
        headless: false,
        slowMo: 1500,
    });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("http://localhost:8080");

    await page.fill("#username", "hnt");
    await page.fill("#password", "1234");

    await page.click('button[type="submit"]');

    await page.waitForSelector("#login-status");

    const loginStatus = await page.textContent("#login-status");

    console.log(loginStatus);
}

runLoginTest();
