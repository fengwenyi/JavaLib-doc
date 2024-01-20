import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh',
  title: "JavaLib",
  description: "A Java Library",
  lastUpdated: true,

  themeConfig: {
    logo: '/logo-512x512.png',
    logoLink: '/2.2.7/index',
    lastUpdatedText: '更新时间',
    docFooter: {
      prev: '前一篇',
      next: '后一篇',
    },
    outline: {
      label: '页面导航',
    },
    i18nRouting: true,
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: '2.2.7',
        items: [
          { text: '2.2.7', link: '/2.2.7/index' },
        ]
      }
    ],

    sidebar: {
      '/2.2.7/': [
        {
          text: '转换',
          items: [
            { text: '日期时间工具类', link: '/2.2.7/DateTimeUtils' },
            { text: '进制转换工具类', link: '/2.2.7/HexUtils' },
            { text: 'JSON工具类', link: '/2.2.7/JsonUtils' },
            { text: 'XML工具类', link: '/2.2.7/XmlUtils' },
          ]
        },
        {
          text: '加解密',
          items: [
            { text: 'MD5工具类', link: '/2.2.7/Md5Utils' },
            { text: 'AES工具类', link: '/2.2.7/AesUtils' },
            { text: 'BASE64工具类', link: '/2.2.7/Base64Utils' },
            { text: 'RSA工具类', link: '/2.2.7/RsaUtils' },
            { text: 'SHA工具类', link: '/2.2.7/ShaUtils' },
          ]
        },
        {
          text: '网络',
          items: [
            { text: 'HTTP工具类', link: '/2.2.7/HttpUtils' },
          ]
        },
        {
          text: '其他',
          items: [
            { text: 'Bean工具类', link: '/2.2.7/BeanUtils' },
          ]
        },
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/fengwenyi/JavaLib' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2017-2024 Erwin Feng'
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换'
            }
          }
        }
      }
    }
  }
})