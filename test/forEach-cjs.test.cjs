/* eslint-env mocha */
const { forEach } = require("../dist/forEach/index.cjs");
const { strictEqual, deepEqual } = require("assert");

describe("forEach (cjs)", () => {
  it("iterates over arrays", () => {
    const arr = ["foo", "bar", "baz"];
    const res = new Array();
    forEach(arr, (value, index, self) => {
      strictEqual(value, self[index]);
      res.push(value);
    });
    deepEqual(arr, res);
  });
  it("iterates over objects", () => {
    const obj = {
      foo: "foobar",
      lorem: "ipsum",
      dolor: "sit amet"
    };
    const res = new Object();
    forEach(obj, (value, key, self) => {
      strictEqual(value, self[key]);
      res[key] = value;
    });
    deepEqual(obj, res);
  });
  it("iterates over strings", () => {
    const str = "Sample Text";
    let res = "";
    forEach(str, (value, index, self) => {
      strictEqual(value, self[index]);
      res += value;
    });
    strictEqual(str, res);
  });
  it("breaks when callback returns false", () => {
    const arr = [10, 20, 30, 40, 50];
    const res = new Array();
    forEach(arr, val => {
      res.push(val);
      if (val >= 30) return false;
    });
    deepEqual(res, [10, 20, 30]);
  });
});
