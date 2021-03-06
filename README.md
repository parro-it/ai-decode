# ai-decode

[![Travis Build Status](https://img.shields.io/travis/parro-it/ai-decode/master.svg)](http://travis-ci.org/parro-it/ai-decode)
[![NPM downloads](https://img.shields.io/npm/dt/ai-decode.svg)](https://npmjs.org/package/ai-decode)

> Decode a Buffer async iterable into a String async iterable.
>
> **_This module is part of
> [Async iterable fun](https://github.com/parro-it/ai-fun), a complete toolset
> of modules to work with async iterables._**

## Usage

description of the example

```js
import aiDecode from 'ai-decode';

for (const item of aiDecode()) {
  yield item;
};
```

This will output

```

```

## API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### aiDecode

Decode a Buffer async iterable into a String async iterable.

**Parameters**

-   `iterable` **AsyncIterable** The source iterable to decode. It must emit Buffer instances
-   `encoding` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The encoding to use for the conversion. Default to 'utf8' (optional, default `"utf8"`)

Returns **AsyncIterable** An async iterable that iterates over the decode String s

## Install

With [npm](https://npmjs.org/) installed, run

```bash
npm install --save ai-decode
```

## See Also

-   [`parro-it/ai-fun`](https://github.com/parro-it/ai-fun) - A collection of modules to easy deal with async iterables.

-   [`noffle/common-readme`](https://github.com/noffle/common-readme) - « a common readme for node ».

## License

MIT Licensed
© 2017 Andrea Parodi
