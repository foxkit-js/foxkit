/* eslint-env mocha */
import { clamp } from "../dist/clamp/index.js";
import { strictEqual } from "assert";

describe("clamp (esm)", () => {
  it("returns min for smaller value", () => {
    strictEqual(clamp({ value: 2, min: 5 }), 5);
  });
  it("returns min where min is 0 and value is negative", () => {
    strictEqual(clamp({ value: -2, min: 0 }), 0);
  });
  it("returns value with smaller min", () => {
    strictEqual(clamp({ value: 2, min: 0 }), 2);
  });
  it("returns max for larger value", () => {
    strictEqual(clamp({ value: 10, max: 5 }), 5);
  });
  it("returns max where max is 0 and value is positive", () => {
    strictEqual(clamp({ value: 2, max: 0 }), 0);
  });
  it("returns value with larger max", () => {
    strictEqual(clamp({ value: 5, max: 10 }), 5);
  });
  it("returns value for value between min and max", () => {
    strictEqual(clamp({ value: 5, min: 0, max: 10 }), 5);
  });
  it("returns value as only arg", () => {
    strictEqual(clamp({ value: 5 }), 5);
  });
});
