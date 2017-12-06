import AsyncIterable from "asynciterable";
import { TextDecoder } from "util";

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
