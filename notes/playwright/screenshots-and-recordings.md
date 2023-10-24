# 테스트 시 스크린샷과 녹화

## 스크린샷

```js
// Library 형태로 실행해봅시다.
const { chromium } = require("playwright");

(async () => {
    // 1. Chrome을 킨다.
    const browser = await chromium.launch();

    // 2. 새로운 탭을 생성한다.
    const context = await browser.newContext();
    const page = await context.newPage();

    // 3. 페이지를 열고 스크린샷을 찍는다.
    await page.goto("http://whatsmyuseragent.org/");
    await page.screenshot({ path: `example.png` });

    // 4. 브라우저를 닫는다.
    await page.close();
    await browser.close();
})();
```

## 동영상 녹화

```js
// Library 형태로 실행해봅시다.
const { chromium } = require("playwright");

(async () => {
    const browser = await chromium.launch();

    const context = await browser.newContext({
        recordVideo: {
            dir: "videos/",
        },
    });
    const page = await context.newPage();
    await page.goto("http://example.com/");

    await page.close();
    await browser.close();
})();
```

## 옵션
- [참고](./config.md#playwrightconfigjs)