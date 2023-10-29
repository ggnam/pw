# Playwright commands

!!! warning 주의사항
`playwright` 명령어 앞에 `npx`를 붙여주세요. 특정 IDE에서는 `node_modules/.bin`을 자동으로 PATH에 넣어주지만, 터미널이나 VSCode에서는 그렇지 않습니다!

!!! tip 터미널 help 도움말을 잘 활용하자.
`npx playwright help <command>`를 입력하여 Playwright 명령어에 대한 도움말을 확인할 수 있습니다.

    - `npx playwright help test`
    - `npx playwright help install`
    - `npx playwright help codegen`
    - `npx playwright help open`

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
# Chromium (Chrome)
npx playwright cr https://hanatour.com

# Webkit (Safari)
npx playwright wk https://hanatour.com

# Firefox
npx playwright ff https://hanatour.com
```

## Codegen

```shell
# npm run codegen
# Inspector를 통해 코드를 생성할 수 있습니다.
npx playwright codegen https://hanatour.com
```
