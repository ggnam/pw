**모든 테스트 실행**

```shell
# npm run test
npx playwright test
```

**특정 테스트만 실행**

```shell
# npm run test:example
npx playwright test tests/example.test.ts
```

**디버그 모드로 실행**

```shell
# npm run test:debug
npx playwright test --debug
```

**Interactive UI 모드로 실행**

```shell
# npm run test:ui
npx playwright test --ui
```

---

**브라우저 지정**

```shell
# Chromium
npx playwright cr https://example.com

# Webkit
npx playwright wk https://example.com

# Firefox
npx playwright ff https://example.com
```
