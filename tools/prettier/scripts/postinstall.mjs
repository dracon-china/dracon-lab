import { existsSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

(async function main() {
  const cwd = process.env.PWD;
  // 是否安装了 prettier
  if (!existsSync(join(cwd, 'node_modules/prettier'))) return console.error('请先安装 prettier');
  // 是否存在 .prettierrc.js 文件
  if (!existsSync(join(cwd, '.prettierrc.js'))) {
    writeFileSync(
      join(cwd, '.prettierrc.js'),
      `module.exports = require('@draco-china/prettier');\n`,
    );
  }
  // 是否存在 .editorconfig 文件
  if (!existsSync(join(cwd, '.editorconfig'))) {
    writeFileSync(
      join(cwd, '.editorconfig'),
      `# Editor configuration, see http://editorconfig.org
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
insert_final_newline = true
trim_trailing_whitespace = true

[*.md]
max_line_length = off
trim_trailing_whitespace = false
`,
    );
  }

  // 是否存在 .prettierignore 文件
  if (!existsSync(join(cwd, '.prettierignore'))) {
    // 读取 .gitignore 文件
    const gitignore = readFileSync(join(cwd, '.gitignore')).toString();
    writeFileSync(
      join(cwd, '.prettierignore'),
      `${gitignore}

# Images
*.svg
*.ico

# Others
.*rc
*ignore
.editorconfig
`,
    );
  }
})();
