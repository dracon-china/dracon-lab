# 🌟 Dracon Lab | [在线预览](https://draco.icu)

前端组件库、工具类、TypeScript 类型、Hooks、开发环境及规范配置文档

## 📒 目录介绍

```tree
├── apps                    应用包根目录
│   ├── docs                文档应用
│   └── **                  应用开发
├── packages                组件包根目录
│   ├── **                  组件目录
│   │   ├── src             组件主目录
│   │   │   ├── index.ts    组件注册
│   │   │   └── **.**       组件开发
├── tools                   工具包根目录
│   ├── **                  工具目录
│   │   └── **.*            工具开发
├── lerna.json              lerna 配置
├── nx.json                 nx 配置
├── package.json            项目配置
├── pnpm-lock.yaml          pnpm lock
├── pnpm-workspace.yaml     pnpm workspace
├── tsconfig.json           typescript 配置
├── LICENSE                 许可
└── README.md               项目描述
```

其余文件可自行查阅了解。

## 🤖 命令介绍

| 名称                 | 描述                | 备注                               |
| -------------------- | ------------------- | ---------------------------------- |
| `pnpm release`       | 组件打包发布        | 使用 `lerna publish`               |
| `pnpm build`         | 组件打包            | 使用 `nx run-many`                 |
| `pnpm lint`          | 代码检查美化        | 使用 `nx run-many`                 |
| `pnpm test`          | 组件测试            | 使用 `nx run-many`                 |
| `pnpm test:coverage` | 代码覆盖率查看      | 使用 `nx run-many`                 |
| `pnpm docs:start`    | 启动文档            | 启动 `apps/docs`                   |
| `pnpm docs:build`    | 编译文档            | 编辑 `apps/docs`                   |
| `pnpm graph:start`   | 启动依赖图分析      | 使用 `nx graph`                    |
| `pnpm graph:build`   | 生成依赖分析图      | 生成 `apps/graph` 静态站点         |
| `pnpm clean`         | 删除 `node_modules` | 从所有包中删除 `node_modules` 目录 |
| `pnpm deps`          | 升级依赖包          | 使用 `pnpm up`                     |

## LICENSE

MIT
