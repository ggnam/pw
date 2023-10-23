# 테스트 케이스 스킵과 특정 테스트 케이스만 실행

!!! note
    - `test.skip()`
    - `test.only()`

```javascript
const { test, expect } = require('@playwright/test');

test('this test will run', async ({ page }) => {
  await page.goto('https://example.com');
  const title = await page.title();
  expect(title).toBe('Example Domain');
});

// 해당 테스트 케이스는 실행되지 않습니다.
test.skip('this test will not run', async ({ page }) => {
  await page.goto('https://example.com');
  const url = await page.url();
  expect(url).toBe('https://doesnt-exist.com');
});

// 해당 테스트 케이스만 실행됩니다.
test.only('this test will run alone', async ({ page }) => {
  await page.goto('https://example.com');
  const textContent = await page.textContent('h1');
  expect(textContent).toBe('Example Domain');
});
```