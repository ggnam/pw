# Playwright hooks

!!! note
    - `test.beforeAll()`
    - `test.beforeEach()`
    - `test.afterEach()`
    - `test.afterAll()`

```javascript
const { test } = require('@playwright/test');

// 모든 테스트가 실행되기 전에 일부 코드를 실행하려면 test.beforeAll를 사용하세요.
test.beforeAll(async ({ browser }) => {
  // 이 코드는 파일의 모든 테스트가 실행되기 전에 수행됩니다.
  const context = await browser.newContext();
  // 어떤 리디렉션에 대해서도 자동으로 기다립니다.
  context.setDefaultNavigationTimeout(0);
});

// 해제를 위해 test.afterAll을 사용하세요.
test.afterAll(async ({ browser }) => {
  // 이 코드는 파일의 모든 테스트가 끝난 후에 실행됩니다.
  await browser.close();
});

// 파일의 각 테스트가 실행되기 전에 일부 코드를 실행하려면 test.beforeEach를 사용하세요.
test.beforeEach(async ({ page }) => {
  // 이 코드는 파일의 각 테스트가 실행되기 전에 수행됩니다.
  // 여기에서의 Page는 각 테스트가 받는 페이지 컨텍스트를 참조합니다.
  await page.goto('https://example.com');
});

// 여기에 테스트를 작성하세요
test('예제 테스트', async ({ page }) => {
  const title = await page.title();
  expect(title).toBe('Example Domain');
});
```