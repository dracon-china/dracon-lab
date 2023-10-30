import { execa } from 'execa';
import { existsSync, writeFileSync } from 'fs';
import { join } from 'path';

(async function main() {
  const cwd = process.env.INIT_CWD;
  const options = {
    cwd,
    stdio: 'inherit',
  };
  // 是否安装了 husky
  if (!existsSync(join(cwd, 'node_modules/husky'))) {
    return console.error('请先安装 husky');
  }
  // 是否安装了 lint-staged
  if (!existsSync(join(cwd, 'node_modules/lint-staged'))) {
    return console.error('请先安装 lint-staged');
  }
  // 是否存在 .husky 文件夹
  if (!existsSync(join(cwd, '.husky'))) {
    await execa(`husky`, ['install'], options);
  }
  // 是否存在 pre-commit 钩子
  if (!existsSync(join(cwd, '.husky/pre-commit'))) {
    await execa(`husky`, ['add', '.husky/pre-commit', 'npx --no-install lint-staged'], options);
  }
  // 是否存在 commit-msg 钩子
  if (!existsSync(join(cwd, '.husky/commit-msg'))) {
    await execa(
      `husky`,
      ['add', '.husky/commit-msg', 'npx --no-install commitlint --edit "$1"'],
      options,
    );
  }
  // 是否存在 .lintstagedrc
  if (!existsSync(join(cwd, '.lintstagedrc'))) {
    writeFileSync(
      join(cwd, '.lintstagedrc'),
      `{
  "*.{md,json}": ["prettier --write --no-error-on-unmatched-pattern"],
  "*.{css,less,scss,vue,html}": ["stylelint --fix --allow-empty-input", "prettier --write"],
  "*.{js,jsx}": ["eslint --fix", "prettier --write"],
  "*.{ts,tsx}": ["eslint --fix", "prettier --parser=typescript --write"]
}`,
    );
  }

  // 是否存在 .commitlintrc
  if (!existsSync(join(cwd, '.commitlintrc'))) {
    writeFileSync(
      join(cwd, '.commitlintrc'),
      `{
  extends: ['@draco-china/commitlint']
}`,
    );
  }
})();
