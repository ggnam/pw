import { test, expect, devices } from "@playwright/test";

import dotenv from "dotenv";

const env = dotenv.config()
const username = process.env.USERNAME
const password = process.env.PASSWORD

test.use({
    ...devices["iPhone 11"],
    viewport: {
        height: 720,
        width: 1280,
    },
});

test.only("로그인 실패 @login", async ({ page }) => {
    page.on("console", (msg) => {
        console.log(msg);
    });

    // page.on("requestfinished", (request) => {
    //     request.response().then((response) => {
    //         // Only log 300 and 400
    //         if (response.status() >= 300 && response.status() < 500) {
    //             console.log(response.status());
    //             console.log(response.headers());
    //             console.log(response.request().url());
    //         }
    //     });
    // });

    await page.goto("https://m.hanatour.com/dcr/");

    // 광고 팝업 닫기
    await page.getByRole("button", { name: "닫기" }).click();

    // 마이페이지 버튼 클릭
    await page.getByText("마이페이지").click();

    await page.waitForTimeout(3000)
    
    await page.getByPlaceholder("hana@hanatour.com").click();
    
    await page.getByPlaceholder("hana@hanatour.com").fill(username);
    
    await page.getByPlaceholder("hana@hanatour.com").press("Tab");
    await page.getByPlaceholder(" ").fill("wrong password");

    await page.getByRole("button", { name: "로그인" }).isVisible();
    
    await expect(page.getByRole("button", { name: "확인" })).toBeVisible();
});
