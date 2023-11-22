import { test, expect, devices } from "@playwright/test";

test.use({
    ...devices["iPhone 11"],
    viewport: {
        height: 720,
        width: 1280,
    },
});

test.only("로그인 실패 @login", async ({ page }) => {
    await page.goto("https://mqatour.hanatour.com/dcr/");

    // 광고 팝업 닫기
    await page.getByRole("button", { name: "닫기" }).click();

    // 마이페이지 버튼 클릭
    await page.getByText("마이페이지").click();

    // id, pw 입력 부분
    await page.getByPlaceholder("hana@hanatour.com").dblclick();
    await page.getByPlaceholder("hana@hanatour.com").fill("ggnam@hanatour.com");
    await page.getByPlaceholder("hana@hanatour.com").press("Tab");
    await page.getByPlaceholder(" ").fill("srkE8190!");

    await page.pause();

    await page.getByRole("button", { name: "로그인" }).click();
    await page.getByRole("button", { name: "확인" }).click();
});
