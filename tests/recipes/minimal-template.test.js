import { test, expect } from "@playwright/test";

test.describe("테스트 그룹입니다.", () => {
    test("첫 번째 테스트입니다.", async ({ page }) => {
        await page.goto("http://example.com");
        const title = await page.title();
        await page.waitForTimeout(3000);

        expect(title).toBe("Example Domain");
    });

    test("두 번째 테스트입니다.", async ({ page }) => {
        await page.goto("http://example.com");
        const title = await page.title();
        await page.waitForTimeout(5000);

        expect(title).toBe("Example Domain");
    });
});
