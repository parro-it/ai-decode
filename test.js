import test from "tape-async";
import aiDecode from ".";
import { fs } from "ai-node";
import concat from "ai-concat";

const fixture = `${__dirname}/fixtures/test`;

test("exports a function", async t => {
  t.is(typeof fs.readFile, "function");
});

test("decode an iterable", async t => {
  const string = await concat.obj(aiDecode(fs.readFile(fixture)));
  t.deepEqual(string, ["test line 1\nline 2\n"]);
});
