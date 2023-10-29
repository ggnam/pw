# Setup guide

## VSCode 설치

-   VSCode[^1] (https://code.visualstudio.com/)를 홈페이지에서 다운로드 받아 설치합니다.

## Node.js 설치

-   [Node.js](https://nodejs.org/ko/) 홈페이지에서 LTS 버전을 다운로드 받아 설치합니다.

## 레포지토리 클론

```shell
# 다음을 터미널에 입력하여 레포지토리를 클론합니다.
git clone https://github.com/ggnam/pw.git
```

## 패키지 설치

```shell
# 다음을 터미널에 입력하여 레포지토리 폴더로 이동합니다.
cd pw

# 다음을 터미널에 입력하여 패키지를 설치합니다.
npm install
```

## 정상 작동 확인

```shell
# 다음을 터미널에 입력하여 정상 작동을 확인합니다.
npx playwright test

# 다음과 같은 결과가 나오면 정상 작동입니다. (예시)
Running 1 test using 1 worker

  ✓  pw (1s)

  1 passed (1s)
```

[^1]: Visual Studio Code의 줄임말입니다.
