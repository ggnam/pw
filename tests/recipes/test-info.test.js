// 이 파일에서는 `testinfo` 객체에 대해 공부합니다.

import { test, expect } from "@playwright/test";

test.describe("테스트 그룹입니다.", () => {
    // testinfo 객체를 사용하면 테스트에 대한 정보를 얻을 수 있습니다.
    // 테스트 이름, 테스트 파일 경로, 테스트 성공여부 등 다양한 정보를 얻을 수 있습니다.

    // https://playwright.dev/docs/api/class-testinfo
    // 위 경로로 이동하면 testinfo 객체에 대한 정보를 얻을 수 있습니다.
    test("`testinfo` 객체에 대해 공부해봅시다.", async ({ page }, testinfo) => {
        await page.goto("http://example.com");
        const title = await page.title();
        // await page.waitForTimeout(3000);
        expect(title).toBe("Example Domain");

        console.log(testinfo.title);
        console.log(testinfo.file);
        console.log(testinfo.status);
    });
});
