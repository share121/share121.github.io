import { fileURLToPath } from "url";
import { promises as fss } from "fs";
import path from "path";
import matter from "gray-matter";
import chokidar from "chokidar";

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
 * 改变文件的修改日期
 * @param {string} file
 * @param {Stats} [stats]
 */
async function changDate(file, stats) {
  try {
    stats ??= await fss.stat(file);
    const { atime, mtime } = stats;
    const fileContent = await fss.readFile(file, "utf-8");
    const frontMatter = matter(fileContent);
    const date = frontMatter.data?.last_update?.date;
    if (date === undefined) {
      await fss.writeFile(
        file,
        `---\nlast_update:\n  date: ${mtime.getTime()}\n---\n\n${fileContent}`,
        "utf-8"
      );
      await fss.lutimes(file, atime, mtime);
      console.log(`[${new Date().toLocaleTimeString()}]`, file);
    } else if (typeof date === "number" && date !== mtime.getTime()) {
      await fss.writeFile(
        file,
        matter.stringify(frontMatter.content, {
          ...frontMatter.data,
          last_update: {
            ...frontMatter.data.last_update,
            date: mtime.getTime(),
          },
        }),
        "utf-8"
      );
      await fss.lutimes(file, atime, mtime);
      console.log(`[${new Date().toLocaleTimeString()}]`, file);
    }
  } catch {
    setTimeout(() => {
      changDate(file);
    }, 1000);
  }
}

for await (const file of getAllFiles(path.join(__dirname, "docs"))) {
  if (file.endsWith(".md") || file.endsWith(".mdx")) changDate(file);
}
