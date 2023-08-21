const { test, expect } = require("@playwright/test");

test.describe("Example.com 테스트", () => {
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

    test("should contain correct text", async ({ page }) => {
        await page.goto("http://example.com");
        const textContent = await page.textContent("h1");
        expect(textContent).toBe("Example Domain");
    });

    test("should navigate to correct site", async ({ page }) => {
        await page.goto("http://example.com");
        await page.click("a");
        await page.waitForNavigation(); // Wait for navigation to complete before URL check
        const url = page.url();
        expect(url).toContain("iana.org");
    });
});
