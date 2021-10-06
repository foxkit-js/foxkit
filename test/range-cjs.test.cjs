/* eslint-env mocha */
const { range } = require("../dist/range/index.cjs");
const { deepEqual, strictEqual } = require("assert");

describe("range (esm)", () => {
  it("returns 0 to 5 given only end of 5", () => {
    deepEqual(range({ end: 5 }), [0, 1, 2, 3, 4, 5]);
  });
  it("returns 1 to 5 given start of 1 and end of 5", () => {
    deepEqual(range({ start: 1, end: 5 }), [1, 2, 3, 4, 5]);
  });
  it("returns valid range from 1 to 3 in steps of 0.5", () => {
    deepEqual(range({ start: 1, end: 3, step: 0.5 }), [1, 1.5, 2, 2.5, 3]);
  });
  it("supports range with negative step", () => {
    deepEqual(range({ start: 0, end: -5, step: -1 }), [0, -1, -2, -3, -4, -5]);
  });
  it("respects length of 10 property for range from 0 to 100", () => {
    deepEqual(range({ end: 100, length: 10 }), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
  it("returns false with no end and no length argument", () => {
    strictEqual(range({ start: 0 }), false);
  });
  it("returns false for step of 0 argument", () => {
    strictEqual(range({ end: 3, step: 0 }), false);
  });
  it("returns empty array for a start greater than end, but positive step", () => {
    deepEqual(range({ start: 10, end: 0, step: 1 }), []);
  });
  it("returns empty array for a start less than end, but negative step", () => {
    deepEqual(range({ start: 0, end: 10, step: -1 }), []);
  });
});
