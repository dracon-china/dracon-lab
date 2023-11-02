import { defineConfig } from 'dumi';
import { SiteThemeConfig } from 'dumi-theme-antd-style';

const themeConfig: Partial<SiteThemeConfig> = {
  name: 'draco.icu',
  logo: '/logo.svg',
  hero: {
    actions: [
      {
        link: '/ai/programming-tools',
        text: 'AI 导航',
      },
      {
        link: '/resume',
        text: '关于我',
      },
    ],
    features: [
      {
        title: '内容丰富',
        image: '🌈',
        description:
          '提供基础知识的介绍和使用示例，还包括深入的概念讲解、最佳实践和常见问题解答，帮助你更好地理解和应用这些技术',
      },
      {
        title: '全文搜索',
        image: '🔍',
        description:
          '让你可以轻松搜索标题、正文、示例代码等内容。无论你是在寻找特定的组件用法、工具类的代码片段，还是查找特定主题的教程和解决方案，都可以通过多关键词搜索快速找到需要的信息',
      },
      {
        title: '学习资源',
        image: '📚',
        description:
          '提供丰富的学习资源。无论你是想深入学习 JavaScript、Vue、React、Node.j，还是了解小程序、Flutter、Deno、HTML、CSS 等技术',
      },
    ],
  },
  footerConfig: {
    bottom: `Open-source MIT Licensed - Powered by Draco`,
    columns: [
      {
        items: [
          {
            openExternal: true,
            title: 'Report Bug',
            url: `https://github.com/draco-china/draco-lab/issues/new/choose`,
          },
        ],
        title: 'Community',
      },
      {
        items: [
          {
            openExternal: true,
            title: 'GitHub',
            url: `https://github.com/draco-china/draco-lab`,
          },
        ],
        title: 'Help',
      },
    ],
  },
  hideHomeNav: true,
  siteToken: {
    headerHeight: 64,
    footerHeight: 300,
    sidebarWidth: 240,
    tocWidth: 176,
    contentMaxWidth: 960,
  },
};

export default defineConfig({
  fastRefresh: true,
  hash: true,
  codeSplitting: { jsStrategy: 'granularChunks' },
  resolve: {
    docDirs: ['src'],
    atomDirs: [
      {
        type: 'apps',
        dir: '../../apps',
      },
      {
        type: 'packages',
        dir: '../../packages',
      },
      {
        type: 'tools',
        dir: '../../tools',
      },
    ],
  },
  outputPath: 'dist',
  favicons: ['/logo.svg'],
  themeConfig: {
    prefersColor: { default: 'auto' },
    socialLinks: {
      github: 'https://github.com/draco-china/draco-lab',
    },
    ssr: {},
    sitemap: { hostname: 'https://draco.icu' },
    github: 'https://github.com/draco-china/draco-lab',
    sidebar: {
      '/tools': [
        {
          title: '工具包',
          children: [
            {
              title: 'commitlint',
              link: '/tools/commitlint',
            },
            {
              title: 'eslint',
              link: '/tools/eslint',
            },
            {
              title: 'markdownlint',
              link: '/tools/markdownlint',
            },
            {
              title: 'prettier',
              link: '/tools/prettier',
            },
            {
              title: 'stylelint',
              link: '/tools/stylelint',
            },
            {
              title: 'tsconfig',
              link: '/tools/tsconfig',
            },
          ],
        },
      ],
    },
    ...themeConfig,
  },
});
