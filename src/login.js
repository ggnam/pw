const { chromium } = require("playwright");

async function runLoginTest() {
    // Playwright setup
    const browser = await chromium.launch({
        headless: false,
        slowMo: 2000,
    });
    const context = await browser.newContext({
        viewport: {
            width: 1920,
            height: 1080,
        },
        recordVideo: {
            dir: "videos/",
        },
    });
    const page = await context.newPage();

    await page.goto("http://localhost:8080");

    await page.screenshot({ path: `screenshots/1.png` });

    await page.fill("#username", "hnt");
    await page.fill("#password", "1234");

    await page.screenshot({ path: `screenshots/2.png` });

    await page.click('button[type="submit"]');

    await page.waitForSelector("#login-status");

    const loginStatus = await page.textContent("#login-status");

    context.close();
    browser.close();

    console.log(loginStatus);
}

runLoginTest();
