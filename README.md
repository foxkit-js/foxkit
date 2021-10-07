# foxkit

Foxkit is a collection of utility modules for CJS, ESM and TypeScript projects.

## Install

```shell
npm install foxkit
# or
yarn install foxkit
```

## Usage

### clamp

The `clamp` module provides the functions `clamp()` and `isClamped()`:

```js
import { clamp, isClamped } from "foxkit/clamp";

clamp({ value: 5, min: 0, max: 10 }); // => 5
clamp({ value: -5, min: 0 }); // => 0
clamp({ value: 100, max: 10 }); // => 10

isClamped({ value: 5, min: 0, max: 10 }); // => true
isClamped({ value: -5, min: 0 }); // => false
isClamped({ value: 100, max: 10 }); // => false
```

The `min` and `max` options are optional on both functions to serve as a complete replacement to `Math.min()` and `Math.max()`.

### forEach

The `forEach` module works much like `Array.prototype.forEach`, but also works for Strings and Objects. You may also optionally return `false` from the callback to perform a `break` in the internal `for ()` loop. To `continue` simply `return;`.

```js
const myObj = {
  foo: "foobar",
  lorem: "Lorem ipsum",
  foxkit: "Utility collection",
  unseen: "Can't see me in output :)"
};

forEach(myObj, (value, key) => {
  if (key === "unseen") return false;
  console.log(`${key}: ${value}`);
}); /* =>
foo: foobar
lorem: Lorem ipsum
foxkit: Utility collection
*/
```

### range

The `range` module returns an array with numbers based on the constraints provided in the options. You must provide either an `end` (inclusive) or `length` option. Negative `step` values are supported. Should you provide an invalid combination you may receive an empty array!

```js
range({ start: 1, end: 5 }); // => [1, 2, 3, 4, 5]
range({ start: 4, step: 0.5, length: 3 }); // => [4, 4.5, 5]
range({ start: 10, step: -2, end: 5 }); // => [10, 8, 6]
range({ start: 0, end: -5, step: 1 }); // => []
```

### sleep

The `sleep` module returns a Promise that resolves after the given amount of time. It will return `false` should the argument not be a positive number.

```js
await sleep(500); // => Promise<pending> (resolve after 500ms)
await sleep("fox"); // => false
```

## Other Modules

See our [foxkit-js](https://github.com/foxkit-js) github org page or search for "foxkit" on npm.

### See also

- [`modern-diacritics`](https://github.com/Mitsunee/modern-diacritics): library for ascii-folding that also includes a `slugify` function
