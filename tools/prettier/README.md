# `@dracon-china/prettier`

> 本包提供了《编码规约》配套的 [stylelint 可共享配置](https://stylelint.io/user-guide/configure) 可共享配置。

## 安装

除了本包，你需要同时安装 [stylelint](https://www.npmjs.com/package/stylelint)：

```bash
npm install @dracon-china/stylelint stylelint -D
```

## 使用

在你的 `.prettierrc.js` 中继承本包:

```javascript
module.exports = require('@dracon-china/prettier');

// or

module.exports = {
  ...require('@dracon-china/prettier'),
};
```
