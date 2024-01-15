import { existsSync, writeFileSync } from "fs";
import { join } from "path";

(async function main() {
  const cwd = process.env.INIT_CWD;
  // 是否安装了 typescript
  if (!existsSync(join(cwd, "node_modules/typescript")))
    return console.error("请先安装 typescript");
  // 是否存在 .tsconfig.json 文件
  if (existsSync(join(cwd, "tsconfig.json"))) return;
  writeFileSync(
    join(cwd, "tsconfig.json"),
    JSON.stringify(
      {
        $schema: "https://json.schemastore.org/tsconfig",
        extends: ["@dracon-china/tsconfig/base"],
      },
      null,
      2
    )
  );
})();
