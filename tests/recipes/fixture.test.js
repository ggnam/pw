// 이 파일에서는 Playwright `fixture`에 대해 알아보겠습니다.

import { test, expect } from "@playwright/test";

test.only("basic test", async ({
    page,
    context,
    browser,
    browserName,
    request,
}) => {
    await page.goto("https://playwright.dev/");

    await expect(page).toHaveTitle(/Playwright/);

    // console.debug(page);
    // console.debug(context);
    // console.debug(browser);
    // console.debug(browserName);
    // console.debug(request);
});
