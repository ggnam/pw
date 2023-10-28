# Playwright 환경 설정

!!! tip 
    `playwright.config.js` 또는 `playwright.config.ts` 파일을 생성하여 Playwright의 기본 설정을 변경할 수 있습니다.

## `playwright.config.js`

```js
module.exports = {
  // 웹 사이트의 기본 URL을 설정합니다.
  baseURL: 'https://m.hanatour.com',

  use: {
    // 테스트를 실행할 브라우저를 설정합니다.
    // 'chromium', 'firefox', 'webkit' 중 선택할 수 있습니다.
    // 기본값은 'chromium'입니다.
    browserName: 'webkit',

    // 테스트 중 브라우저가 화면에 표시되도록 설정합니다.
    headless: false,

    // 테스트 실행시 뷰포트의 크기를 설정합니다.
    viewport: { width: 1280, height: 720 },
    
    // 다크모드를 에뮬레이팅 할 수 있습니다.
    colorScheme: 'dark',

    // 테스트 실행 중 파일을 다운로드할 수 있도록 설정합니다.
    // 기본값은 false입니다.
    acceptDownloads: true,
    
    // 브라우저 컨텍스트에 권한을 부여할 수도 있습니다.
    // 여기서는 위치 정보 권한을 부여했습니다.
    // 이 외에도 'notifications', 'camera', 'microphone', 
    // 'background-sync', 'ambient-light-sensor', 'accelerometer', 
    // 등의 권한을 부여할 수 있습니다.
    permissions: ['geolocation'],
    
    /************************************
     ******** Emulating options *********
     ************************************/
    
    // 테스트를 실행할 때 사용할 언어를 설정합니다.
    // i18n (Internationalization) 테스트에 유용합니다.
    locale: 'ko-KR',
    
    // 테스트를 실행할 때 사용할 타임존도 에뮬레이팅 할 수 있습니다.
    // i18n (Internationalization) 테스트에 유용합니다.
    timezoneId: 'Europe/Paris',
    
    /*********************************
     ******* Recording options *******
     *********************************/
    
    // 테스트 실행 중 동영상을 녹화할 수 있습니다.
    // 녹화된 동영상은 아래 명시된 `videos/` 폴더에 저장됩니다.
    video: {
      dir: 'videos/',
      size: { width: 1280, height: 720 },
    },
    
    // 테스트 실행 중 스크린샷을 찍을 수 있습니다.
    // 'on', 'off', 'only-on-failure' 중 선택할 수 있습니다.
    screenshot: 'on',
    
    // 테스트 실행 중 트레이스를 수집할 수 있습니다.
    // 디버깅 용도로 사용합니다.
    trace: 'on',
  },
  
  // 테스트의 타임아웃을 설정합니다. 
  // 기본값은 30000ms (30초) 입니다.
  // 여기서는 60000ms, 즉 60초로 설정했습니다.
  timeout: 60000,

  // 테스트를 병렬로 실행할지 설정합니다. 
  workers: 1,

  // 실패한 테스트를 반복 실행하는 횟수를 설정합니다.
  // 0이면 반복 실행하지 않습니다. 기본값은 0입니다.
  retries: 2,
};
```