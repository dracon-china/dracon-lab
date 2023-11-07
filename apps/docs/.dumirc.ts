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
        title: 'AI 导航',
        image: '🤖',
        description: 'AI 导航，帮助你快速找到你想要的 AI 工具',
      },
      {
        title: '内容丰富',
        image: '🌈',
        description: '内容丰富，包含 AI 工具导航、组件库、工具类、Hooks、开发环境、规范配置等文档',
      },
      {
        title: '全文搜索',
        image: '🔍',
        description: '支持全文搜索，帮助你快速找到你想要的内容',
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
  socialLinks: {
    github: 'https://github.com/draco-china/draco-lab',
  },
  github: 'https://github.com/draco-china/draco-lab',
};

const isProd = process.env.NODE_ENV === 'production';

const ssrConfig = isProd && {
  // svgr: {},
  routePrefetch: {},
  manifest: {},
  // clientLoader: {},
  ssr: {
    // platform: 'vercel',
  },
  // apiRoute: {
  //   platform: 'vercel',
  // },
};

export default defineConfig({
  fastRefresh: true,
  hash: true,
  polyfill: false,
  codeSplitting: { jsStrategy: 'granularChunks' },
  ...ssrConfig,
  resolve: {
    docDirs: [
      'src',
      {
        type: 'tools',
        dir: '../../tools',
      },
    ],
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
    ...themeConfig,
    prefersColor: { default: 'auto' },
    sitemap: { hostname: 'https://draco.icu' },
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
  },
});
