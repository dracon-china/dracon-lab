# `@draco-china/commitlint`

> 本包提供了《Git 规约》配套的 [commitlint 可共享配置](https://commitlint.js.org/#/concepts-shareable-config)，用于对 git commit message 进行校验。

## 安装

除了本包，你需要同时安装 [husky](https://www.npmjs.com/package/husky) 和 [lint-staged](https://www.npmjs.com/package/lint-staged)：

### npm

```bash
npm install husky lint-staged @draco-china/commitlint -D
```

## 使用

### 方法一

在你的 `package.json` 中继承本包:

```json
{
  "commitlint": {
    "extends": ["@draco-china/commitlint"]
  }
}
```

### 方法二

在你的 `commitlint.config.js` 中继承本包:

```javascript
module.exports = {
  extends: ['@draco-china/commitlint'],
};
```

## lint-staged 配置

在你的 `package.json` 中:

```json
{
  // ...
  "lint-staged": {
    "*.{md,json}": ["prettier --write --no-error-on-unmatched-pattern"],
    "*.{css,less,scss,vue,html}": ["stylelint --fix", "prettier --write"],
    "*.{js,jsx}": ["eslint --fix", "prettier --write"],
    "*.{ts,tsx}": ["eslint --fix", "prettier --parser=typescript --write"]
  }
  //...
}
```

在你的 `.lintstagedrc` 中:

```json
{
  "*.{md,json}": ["prettier --write --no-error-on-unmatched-pattern"],
  "*.{css,less,scss,vue,html}": ["stylelint --fix", "prettier --write"],
  "*.{js,jsx}": ["eslint --fix", "prettier --write"],
  "*.{ts,tsx}": ["eslint --fix", "prettier --parser=typescript --write"]
}
```

## husky 配置

### 设置 commit-msg

```bash
npx husky .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
```

### 设置 pre-commit

```bash
npx husky .husky/pre-commit 'npx --no-install lint-staged'
```

## 使用 git-cz

在你的 `package.json` 中:

```json
{
  // ...
  "scripts": {
    "commit": "git-cz"
  }
  //...
}
```

更多信息可参考 [commitlint 文档](https://commitlint.js.org/#/guides-local-setup?id=install-husky)。
