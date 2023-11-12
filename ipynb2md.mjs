import { fileURLToPath } from "url";
import path from "path";
import { exec } from "child_process";
import chokidar from "chokidar";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const watch = chokidar
  .watch([path.join(__dirname, "docs"), path.join(__dirname, "blog")])
  .on("ready", () => {
    watch
      .on("add", (path) => {
        if (path.endsWith(".ipynb")) {
          ipy2md(path);
        }
      })
      .on("change", (path) => {
        if (path.endsWith(".ipynb")) {
          ipy2md(path);
        }
      });
  });

/**
 * 转换 ipynb 到 markdown
 * @param {string} file
 */
async function ipy2md(file) {
  console.log(`[${new Date().toLocaleTimeString()}] 开始转换 "${file}"`);
  try {
    await execAsync(`jupyter nbconvert --to markdown "${file}"`);
    console.log(`[${new Date().toLocaleTimeString()}] 转换完成 "${file}"`);
  } catch (error) {
    console.error(
      `无法执行：\`jupyter nbconvert --to markdown "${file}"\`\n错误消息：\`${error}\``
    );
  }
}

/**
 * 执行命令
 * @param {string} cmd
 * @returns {Promise<{stdout: string; stderr: string}, string>}
 */
function execAsync(cmd) {
  return new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        reject(error);
      }
      resolve({ stdout, stderr });
    });
  });
}
