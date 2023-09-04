const { describe, it } = require("node:test");
const assert = require("assert");

describe("A thing", () => {
    it("should work", () => {
        assert.strictEqual(1, 1);
    });

    it("should be ok", () => {
        assert.strictEqual(2, 2);
    });
});
