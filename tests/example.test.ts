const { chromium } = require("playwright");

(async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    // Hook before navigating to the page
    context.on("beforeNavigate", (params) => {
        console.log(`Navigating to: ${params.url}`);
    });

    // Hook after the page loads
    page.on("load", () => {
        console.log("Page loaded.");
    });

    await page.goto("http://example.com");

    // Hook before taking a screenshot
    page.on("beforeScreenshot", (params) => {
        console.log(`Taking screenshot of ${params.width}x${params.height}`);
    });

    // Take a screenshot
    await page.screenshot({ path: "example.png" });

    await browser.close();
})();
