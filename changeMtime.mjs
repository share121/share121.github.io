import { fileURLToPath } from "url";
import { promises as fss } from "fs";
import path from "path";
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

for await (const file of getAllFiles(path.join(__dirname, "docs"))) {
  const { atime, mtime } = await fss.stat(file);
  const fileContent = await fss.readFile(file, "utf-8");
  const frontMatter = matter(fileContent).data;
  const date = frontMatter.last_update?.date;
  if (typeof date === "number" && date !== mtime.getTime()) {
    await fss.lutimes(file, atime, new Date(date));
    console.log(file);
  }
}
