import { test, expect } from "@playwright/test";

test.describe("테스트 그룹", () => {
    test("Get request", async ({ request }) => {
        const res = await request.get("https://reqres.in/api/users/1");
        const body = JSON.parse(await res.text());

        expect(body.data.first_name).toBe("George");
    });

    test("Post request", async ({ request }) => {
        const res = await request.post("https://reqres.in/api/users", {
            name: "Nam",
            job: "Developer",
        });

        const status = await res.status();
        console.log(status);

        expect(status).toBe(200);
    });
});
