import { test, expect } from "@playwright/test";

test.describe("테스트 그룹", () => {
    test("첫 번째 테스트입니다.", async ({ page }) => {
        await page.goto("http://example.com");
        const title = await page.title();
        expect(title).toBe("Example Domain");
    });

    test("두 번째 테스트입니다.", async ({ page }) => {
        await page.goto("http://example.com");
        const title = await page.title();
        expect(title).toBe("Example Domain");
    });
});
