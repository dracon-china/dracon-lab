import { execa } from 'execa';
import { existsSync, writeFileSync } from 'fs';
import { join } from 'path';

(async function main() {
  const cwd = process.env.PWD;
  // 是否安装了 stylelint
  if (!existsSync(join(cwd, 'node_modules/stylelint'))) {
    return console.error('请先安装 stylelint');
  }

  // 是否存在 .stylelintrc 文件
  if (!existsSync(join(cwd, '.stylelintrc'))) {
    writeFileSync(
      join(cwd, '.stylelintrc'),
      JSON.stringify(
        {
          $schema: 'https://json.schemastore.org/stylelintrc',
          extends: ['@draco-china/stylelint'],
        },
        null,
        2,
      ),
    );
  }

  // 是否存在 .stylelintignore 文件
  if (!existsSync(join(cwd, '.stylelintignore'))) {
    await execa('ln', ['-s', '.gitignore', '.stylelintignore'], {
      cwd,
      stdio: 'inherit',
    });
  }
})();
