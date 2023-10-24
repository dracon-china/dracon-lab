# `@draco-china/tsconfig`

> 本包提供了《文档规约》配套的 [tsconfig 可共享配置](https://www.npmjs.com/package/tsconfig#optionsconfig)。

## 安装

除了本包，你需要同时安装 [typescript](https://www.npmjs.com/package/typescript)：

```bash
npm install @draco-china/tsconfig typescript -D
```

## 使用

在 `tsconfig.json` 中继承本包:

```json
{
  "extends": "@draco-china/tsconfig/base"
}
```

### Node

```json
{
  "extends": "@draco-china/tsconfig/node"
}
```

### Next

```json
{
  "extends": "@draco-china/tsconfig/next"
}
```

### Nuxt

```json
{
  "extends": "@draco-china/tsconfig/nuxt"
}
```

### Taro

```json
{
  "extends": "@draco-china/tsconfig/taro"
}
```

### React Library

```json
{
  "extends": "@draco-china/tsconfig/react-library"
}
```

### Vue Library

```json
{
  "extends": "@draco-china/tsconfig/vue-library"
}
```
