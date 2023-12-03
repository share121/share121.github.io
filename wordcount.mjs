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

let sum = 0;
for await (const file of getAllFiles(
  path.join(__dirname, "docs"),
  path.join(__dirname, "blog")
)) {
  if ([".md", ".mdx"].includes(path.extname(file))) {
    const content =
      matter(await fss.readFile(file, "utf-8"))
        .content.match(/(\p{L}+)/gu)
        ?.join("") ?? "";
    sum += content.length;
    console.log(path.basename(file), content.length, "字");
  }
}
console.log("总计", sum, "字");
