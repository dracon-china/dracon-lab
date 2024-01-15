import { execa } from "execa";
import { existsSync, writeFileSync } from "fs";
import { join } from "path";

(async function main() {
  const cwd = process.env.INIT_CWD;
  // 是否安装了 eslint
  if (!existsSync(join(cwd, "node_modules/eslint"))) return console.error("请先安装 eslint");
  // 是否存在 .eslintrc 文件
  if (!existsSync(join(cwd, ".eslintrc.js"))) {
    writeFileSync(
      join(cwd, ".eslintrc.js"),
      `module.exports = {
  ...require('@dracon-china/eslint'),
  ignorePatterns: ['.eslintrc.js'],
}`
    );
  }
  // 是否存在 .eslintignore 文件
  if (!existsSync(join(cwd, ".eslintignore"))) {
    await execa(`ln`, ["-s", ".gitignore", ".eslintignore"], { cwd });
  }
})();
