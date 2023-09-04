export default {
    use: {
        // headless 모드 설정
        headless: false,

        // 어떤 브라우저를 사용할지 지정
        browserName: "chromium",

        // 뷰포트 사이즈 지정
        viewport: { width: 1280, height: 720 },

        // 타임아웃 설정
        timeout: 5000,
        slowMo: 1000,
    },
    testDir: "./tests",
    testIgnore: ["tests/test_runner.spec.ts", "tests/template.test.js"],
};
