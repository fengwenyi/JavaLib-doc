import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'

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
            '/guide/DateTimeUtils.md',
            '/guide/JsonUtils.md',
            '/guide/HttpUtils.md'
          ],
        },
      ],
    }
  }),
})