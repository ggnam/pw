// Node에서는 test 및 assert 모듈을 기본적으로 제공합니다.
import test from "node:test"
import assert from "node:assert"

test.describe("A thing", () => {
    test.it("should work", () => {
        assert.strictEqual(1, 1);
    });

    test.it("should be ok", () => {
        assert.strictEqual(2, 2);
    });
});
