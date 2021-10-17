/* eslint-env mocha */
const { dedent } = require("../dist/dedent/index.cjs");
const { equal } = require("assert");

describe("dedent (cjs)", () => {
  it("dedents with default options", () => {
    const dd = dedent();
    equal(dd(`    test`), "test", "single-line test with spaces");
    equal(dd(`\ttest`), "test", "single-line test with tab");
    equal(
      dd(`
        test
          test
        \ttest
      `),
      `\ntest\n  test\n  test\n`,
      "multi-line test"
    );
  });
  it("clears empty lines", () => {
    equal(
      dedent()(`
        test
        \t\t\t
        test2
      `),
      `\ntest\n\ntest2\n`
    );
  });
  it("transforms CRLF to LF", () => {
    equal(dedent()(`\r\ntest\r\n\r\ntest2\r\n`), `\ntest\n\ntest2\n`);
  });
  it("can transform to tabs", () => {
    const dd = dedent({ useTabs: true });
    equal(
      dd(`
        test
          test
        \ttest
      `),
      `\ntest\n\ttest\n\ttest\n`,
      "test with only indents divisible by tabWidth"
    );
    equal(
      dd(`
        test
           3spaces
        \t\t2tabs
      `),
      `\ntest\n\t 3spaces\n\t\t2tabs\n`,
      "test with extra spaces incompatible with tabWidth"
    );
  });
  it("can use custom tabWidths", () => {
    const dd = dedent({ tabWidth: 4 });
    equal(
      dd(`
        0
          2
        \t4
      `),
      `\n0\n  2\n    4\n`
    );
  });
  it("can transform to tabs of custom width", () => {
    const dd = dedent({ useTabs: true, tabWidth: 4 });
    equal(
      dd(`
        lorem ipsum
            dolor sit
        amet
      `),
      `\nlorem ipsum\n\tdolor sit\namet\n`
    );
  });
  it("can trim empty lines at the start and end", () => {
    const dd = dedent({ trim: true });
    equal(
      dd(`
        test
      `),
      "test"
    );
  });
});
