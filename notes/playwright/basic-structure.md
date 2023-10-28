# Playwright 구조

## Test runner 형태로 실행

```js
test('테스트 이름이 들어갑니다.', async ({ page }) => {
  // 1. 페이지 이동
  await page.goto('https://playwright.dev/');

  // 2. 페이지에서 DOM요소 또는 텍스트 가져오기
  const name = await page.innerText('.navbar__title');
  
  // 3. 단언 (assertion) 실행, '실제 값'과 '기대 값'을 비교합니다.
  // 실제 테스트가 이루어지는 부분입니다.
  expect(name).toBe('Playwright');
});
```

## Library 형태로 실행
!!! question "Library 형태로 실행하면 뭐가 좋나요?"
    별다른 셋업 과정없이 패키지만 설치하면 `node playwright.js`와 같은 명령어로 테스트를 실행하고 결과를 확인할 수 있습니다.
```js
const { chromium } = require('playwright');

(async () => {
  // 1. Chrome을 킨다.
  const browser = await chromium.launch();

  // 2. 새로운 탭을 생성한다.
  const context = await browser.newContext();
  const page = await context.newPage();

  // 3. 페이지를 열고 스크린샷을 찍는다.
  await page.goto('http://whatsmyuseragent.org/');
  await page.screenshot({ path: `example.png` });

  // 4. 브라우저를 닫는다.
  await page.close();
  await browser.close();
})();
```


## 테스트를 그룹핑 해보자!

!!! tip
    실무에서의 테스트 케이스 수는 적게는 수십개에서 많게는 **수백, 수천개**가 될 수 있습니다. 이렇게 많은 테스트 케이스를 관리하기 위해서는 테스트를 그룹핑하여 관리하는 것이 좋습니다.
    
```js
test.describe('테스트 그룹입니다.', () => {
  
  // Hook을 이용하여 각 테스트 케이스가 실행되기 전에 페이지를 이동합니다.
  test.beforeEach(async ({ page }) => {
    await page.goto('http://example.com');
  });

  test('첫 번째 테스트입니다.', async ({ page }) => {
    // ... perform original test
    const title = await page.title();
    expect(title).toBe('Example Domain');
  });

  test('두 번째 테스트입니다.', async ({ page }) => {
    // ... perform another test
    const url = await page.url();
    expect(url).toBe('http://example.com/');
  });
});
```