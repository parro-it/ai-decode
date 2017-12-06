import AsyncIterable from "asynciterable";
import { TextDecoder } from "util";

/**
 * Decode a Buffer async iterable into a String async iterable.
 * @param  {AsyncIterable} iterable The source iterable to decode. It must emit Buffer instances
 * @param  {String} encoding The encoding to use for the conversion. Default to 'utf8'
 * @return {AsyncIterable}          An async iterable that iterates over the decode String s
 */
export default function aiDecode(iterable, encoding = "utf8") {
  const decoder = new TextDecoder(encoding);
  const generator = iterable[Symbol.asyncIterator] || iterable[Symbol.iterator];
  const iterator = generator.call(iterable);

  return new AsyncIterable(async (write, end) => {
    let item = {};
    while (!item.done) {
      item = await iterator.next();
      if (!item.done) {
        write(decoder.decode(item.value, { stream: true }));
      }
    }
    const lastChunk = decoder.decode();
    if (lastChunk) {
      write(lastChunk);
    }
    end();
  });
}
