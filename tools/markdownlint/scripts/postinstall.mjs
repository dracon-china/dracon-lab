import { execa } from "execa";
import { existsSync, writeFileSync } from "fs";
import { join } from "path";

(async function main() {
  const cwd = process.env.INIT_CWD;
  // 是否安装了 markdownlint
  if (!existsSync(join(cwd, "node_modules/markdownlint"))) {
    return console.error("请先安装 markdownlint");
  }

  // 是否存在 .markdownlint.json 文件
  if (!existsSync(join(cwd, ".markdownlint.json"))) {
    writeFileSync(
      join(cwd, ".markdownlint.json"),
      JSON.stringify(
        {
          $schema: "https://json.schemastore.org/markdownlint",
          extends: "@dracon-china/markdownlint",
        },
        null,
        2
      )
    );
  }

  // 是否存在 .markdownlintignore 文件
  if (!existsSync(join(cwd, ".markdownlintignore"))) {
    await execa("ln", ["-s", ".gitignore", ".markdownlintignore"], {
      cwd,
      stdio: "inherit",
    });
  }
})();
