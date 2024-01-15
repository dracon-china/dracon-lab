# `@dracon-china/tsconfig`

> 本包提供了《文档规约》配套的 [tsconfig 可共享配置](https://www.npmjs.com/package/tsconfig#optionsconfig)。

## 安装

除了本包，你需要同时安装 [typescript](https://www.npmjs.com/package/typescript)：

```bash
npm install @dracon-china/tsconfig typescript -D
```

## 使用

在 `tsconfig.json` 中继承本包:

```json
{
  "extends": "@dracon-china/tsconfig/base"
}
```

### Node

```json
{
  "extends": "@dracon-china/tsconfig/node"
}
```

### Next

```json
{
  "extends": "@dracon-china/tsconfig/next"
}
```

### Nuxt

```json
{
  "extends": "@dracon-china/tsconfig/nuxt"
}
```

### Taro

```json
{
  "extends": "@dracon-china/tsconfig/taro"
}
```

### React Library

```json
{
  "extends": "@dracon-china/tsconfig/react-library"
}
```

### Vue Library

```json
{
  "extends": "@dracon-china/tsconfig/vue-library"
}
```
