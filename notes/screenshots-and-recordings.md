## Screenshot

```js
const { chromium } = require("playwright");

(async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("http://whatsmyuseragent.org/");
    await page.screenshot({ path: `example.png` });
    await browser.close();
})();
```

## Recording

```js
const { chromium } = require("playwright"); // Or 'firefox' or 'webkit'.

(async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext({
        recordVideo: {
            dir: "videos/",
        },
    });
    const page = await context.newPage();
    await page.goto("http://example.com/");
    // Other actions...
    await page.close();
    await browser.close();
})();
```
