import { defineUserConfig } from 'vuepress'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { sitemapPlugin } from "vuepress-plugin-sitemap2";
import { searchProPlugin } from "vuepress-plugin-search-pro";
// import { cut } from "nodejs-jieba";
import theme from "./theme";


export default defineUserConfig({
  lang: 'zh-CN',
  title: '用代码打点酱油的 bbruceyuan',
  description: '做了一个播客叫做打点酱油，平常写 Python, 对NLP、计算广告、大模型感兴趣，尝试做一些有意义的事情',

  // 这是我的 一些搜索 相关的配置
  head: [
    ['meta', { name: 'baidu-site-verification', content: 'codeva-6UT5nFOXMY' }],
    // ['meta', { name: '360-site-verification', content: 'b5c713d816b0111fd6e0f0a416d598b3' }],
    // ['meta', { name: 'sogou_site_verification', content: 'UBtsNHFicS' }]
  ],
  theme,
  plugins: [
    googleAnalyticsPlugin({
      id: 'G-H2HX76V70M',
    }),
    sitemapPlugin({
      hostname: "https://bbruceyuan.com",
    }),
    // 配置参考：https://github.com/miniapp-tool/mptool/blob/main/docs/.vuepress/config.ts
    // commid id: da07ca8
    searchProPlugin({
      // indexContent: true,
      autoSuggestions: false,
      // indexOptions: {
      //   tokenize: (text, fieldName) =>
      //     fieldName === "id" ? [text] : cut(text, true),
      // },
    }),
  ],
  markdown: {
    headers: {
      level: [2, 3, 4, 5],
    }
  }
})
