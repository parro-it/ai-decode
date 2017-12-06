import test from "tape-async";
import aiDecode from ".";

test("exports a function", async t => {
  t.is(typeof aiDecode, "function");
});
