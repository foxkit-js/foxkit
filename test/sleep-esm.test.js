/* eslint-env mocha */
import { sleep } from "../dist/sleep/index.js";
import { strictEqual } from "assert";

describe("sleep (esm)", () => {
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
