const config = {
    timeout: 60000,
    retries: 0,

    // config.js 파일로 설정을 분리하는 것과 마찬가지로, projects 배열을 사용하여 설정을 분리할 수 있습니다.
    // 여기서는 브라우저별로 다른 설정을 사용하고 있습니다.
    projects: [
        {
            name: "chromium",
            use: { browserName: "chromium" },
        },
        {
            name: "firefox",
            use: { browserName: "firefox" },
        },
        {
            name: "webkit",
            use: { browserName: "webkit" },
        },
    ],
    testDir: "./tests/recipes",
};

export default config;
