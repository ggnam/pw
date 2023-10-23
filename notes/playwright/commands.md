# Playwright commands

!!! warning 주의사항
    `playwright` 명령어 앞에 `npx`를 붙여주세요. 특정 IDE에서는 `node_modules/.bin`을 자동으로 PATH에 넣어주지만, 터미널이나 VSCode에서는 그렇지 않습니다!


## 모든 테스트 실행

```shell
# npm run test
npx playwright test
```

## 특정 테스트만 실행

```shell
# npm run test:example
npx playwright test tests/example.test.ts
```

## 디버그 모드로 실행

```shell
# npm run test:debug
npx playwright test --debug
```

## Interactive UI 모드로 실행

```shell
# npm run test:ui
npx playwright test --ui
```

---

## 브라우저 지정도 가능

```shell
# Chromium
npx playwright cr https://example.com

# Webkit
npx playwright wk https://example.com

# Firefox
npx playwright ff https://example.com
```
