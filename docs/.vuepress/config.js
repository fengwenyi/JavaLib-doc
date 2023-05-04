import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'JavaLib',
  description: 'Java开发常用工具类',
  head: [['link', { rel: 'icon', href: '/images/logo/favicon.ico' }]],
  theme: defaultTheme({
    logo: '/images/logo/logo-512x512.png',
    // 默认主题配置
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '指南',
        link: '/guide/',
      },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          children: [
            '/guide/',
            '/guide/getting-started.md',
            '/guide/DateTimeUtils.md',
            '/guide/JsonUtils.md',
            '/guide/AesUtils.md',
            '/guide/Base64Utils.md',
            '/guide/HexUtils.md',
            '/guide/HttpUtils.md',
            '/guide/IdUtils.md',
            '/guide/Md5Utils.md',
            '/guide/RsaUtils.md',
            '/guide/ShaUtils.md',
            '/guide/XmlUtils.md',
          ],
        },
      ],
    },
    contributorsText: '贡献者',
    lastUpdatedText: '最后更新时间',
    tip: '提示',
    warning: '注意',
    danger: '警告',
    repo: 'https://github.com/fengwenyi/JavaLib',
    editLinkText: '编辑',
    docsRepo: 'https://github.com/fengwenyi/JavaLib-doc',
    docsDir: 'docs'
  }),
  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: '搜索',
        },
      },
    }),
  ],
})