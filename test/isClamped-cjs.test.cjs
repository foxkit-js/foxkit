/* eslint-env mocha */
const { isClamped } = require("../dist/clamp/index.cjs");
const { strictEqual } = require("assert");

describe("isClamped (cjs)", () => {
  it("returns false for min > value", () => {
    strictEqual(isClamped({ value: 2, min: 5 }), false);
  });
  it("returns true for min < value", () => {
    strictEqual(isClamped({ value: 2, min: 0 }), true);
  });
  it("returns false max < value", () => {
    strictEqual(isClamped({ value: 10, max: 5 }), false);
  });
  it("returns true for max > value", () => {
    strictEqual(isClamped({ value: 5, max: 10 }), true);
  });
  it("returns true for value between min and max", () => {
    strictEqual(isClamped({ value: 5, min: 0, max: 10 }), true);
  });
  it("returns true for value as only arg", () => {
    strictEqual(isClamped({ value: 5 }), true);
  });
});
