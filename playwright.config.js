const config = {
    timeout: 60000,
    retries: 0,
    use: {
        headless: false,
        viewport: { width: 1280, height: 720 },
        actionTimeout: 15000,
        ignoreHTTPSErrors: true,
        video: "retain-on-failure",
        screenshot: "only-on-failure",
    },
    projects: [
        {
            name: "Chromium",
            use: { browserName: "webkit" },
        },
        // {
        //     name: "Firefox",
        //     use: { browserName: "firefox" },
        // },
        // {
        //     name: "Webkit",
        //     use: { browserName: "webkit" },
        // },
    ],
    testDir: "./tests/",
};

export default config;
