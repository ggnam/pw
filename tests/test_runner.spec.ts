import { test, expect } from "@playwright/test";

test.describe.skip("Example.com 테스트", () => {
    test("should display correct title", async ({ page }) => {
        await page.goto("http://example.com");
        const title = await page.title();
        expect(title).toBe("Example Domain");
    });

    test("should have correct URL", async ({ page }) => {
        await page.goto("http://example.com");
        const url = page.url();
        expect(url).toBe("http://example.com/");
    });

    test("로그인", async ({ page }) => {
        await page.goto("http://example.com");
        const textContent = await page.textContent("h1");
        expect(textContent).toBe("Example Domain");
    });
});
