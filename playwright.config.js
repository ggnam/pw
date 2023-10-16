const config = {
    timeout: 60000,
    retries: 0,
    use: {
        headless: true,
        viewport: { width: 1280, height: 720 },
        actionTimeout: 15000,
        ignoreHTTPSErrors: true,
        video: "retain-on-failure",
        screenshot: "only-on-failure",
    },
    projects: [
        {
            name: "Chromium",
            use: { browserName: "chromium" },
        },
        {
            name: "Firefox",
            use: { browserName: "firefox" },
        },
        {
            name: "Webkit",
            use: { browserName: "webkit" },
        },
    ],
    testDir: "./tests/practice-1",
};

export default config;
