import { fileURLToPath } from "url";
import path from "path";
import { promises as fss } from "fs";
import matter from "gray-matter";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * 获取所有文件
 * @param {...string} paths
 * @returns {AsyncGenerator<string, void, void>}
 */
async function* getAllFiles(...paths) {
  const temp = [...paths];
  while (temp.length) {
    const dirPath = temp.pop();
    for (const file of (await fss.readdir(dirPath)).map((file) =>
      path.join(dirPath, file)
    ))
      if ((await fss.stat(file)).isDirectory()) temp.push(file);
      else yield file;
  }
}

/**
 * 分词
 * @param {string} str
 * @returns {{segment: string; index: number; input: string}[]}
 */
function splitWord(str) {
  let segmenter = new Intl.Segmenter(undefined, { granularity: "grapheme" });
  return [...segmenter.segment(str)];
}

let sum_letter = 0,
  sum_char = 0,
  sum_file = 0;
for await (const file of getAllFiles(
  path.join(__dirname, "docs"),
  path.join(__dirname, "blog")
)) {
  if ([".md", ".mdx"].includes(path.extname(file))) {
    const content = matter(await fss.readFile(file, "utf-8")).content;
    const letter_count = splitWord(
      content.match(/(\p{L}+)/gu)?.join("") ?? ""
    ).length;
    const char_count = splitWord(content).length;
    sum_letter += letter_count;
    sum_char += char_count;
    sum_file++;
    console.log(path.basename(file), char_count, letter_count, "字");
  }
}
console.log("总计", sum_char, sum_letter, "字", "共", sum_file, "个文件");
