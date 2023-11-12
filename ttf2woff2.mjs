import { fileURLToPath } from "url";
import path from "path";
import { promises as fss } from "fs";
import ttf2woff2 from "ttf2woff2";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * 获得所有文件
 * @param {string[]} dirPath
 */
async function* getAllFiles(...dirPath) {
  const dirPaths = [...dirPath];
  while (dirPaths.length) {
    const dirPath = dirPaths.pop();
    for (const file of (await fss.readdir(dirPath)).map((e) =>
      path.join(dirPath, e)
    ))
      if ((await fss.stat(file)).isDirectory()) dirPaths.push(file);
      else yield file;
  }
}

for await (const file of getAllFiles(path.join(__dirname, "static", "fonts"))) {
  if (path.extname(file) === ".ttf") {
    console.log("开始处理", file);
    await fss.writeFile(
      path.join(
        path.dirname(file),
        path.basename(file, path.extname(file)) + ".woff2"
      ),
      ttf2woff2(await fss.readFile(file))
    );
    console.log("处理完成", file);
  }
}
