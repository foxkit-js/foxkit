/* eslint-env mocha */
const { sleep } = require("../dist/sleep/index.cjs");
const { strictEqual } = require("assert");

describe("sleep (cjs)", () => {
  it("approx. waits for set amount of time", done => {
    let hasFinished = false;
    sleep(200).then(() => {
      hasFinished = true;
    });
    setTimeout(() => {
      strictEqual(hasFinished, false);
    }, 150);
    setTimeout(() => {
      strictEqual(hasFinished, true);
      done();
    }, 250);
  });
  it("rejects time of 0", () => {
    strictEqual(sleep(0), false);
  });
  it("rejects negative time", () => {
    strictEqual(sleep(-5), false);
  });
});
