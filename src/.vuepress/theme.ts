import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "/",

  author: {
    name: "白菜",
    url: "https://bcbot.icu",
  },

  iconAssets: "fontawesome-with-brands",

  logo: "https://theme-hope-assets.vuejs.press/logo.svg",

  repo: "vuepress-theme-hope/vuepress-theme-hope",

  docsDir: "src",

  // 导航栏
  navbar,

  // 侧边栏
  sidebar,

  // 页脚
  footer: "默认页脚",
  displayFooter: true,

  // 加密配置
  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  },

  // 多语言配置
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  // hotReload: true,

  /* 在这里配置主题提供的插件 */
    plugins: {
    components: {
        /* 组件 */
        components: [
          "BiliBili", // 哔哩哔哩视频嵌入
          "VPCard",   // 卡片
        ],
      },
    copyCode: {
        showInMobile: true // 在移动端启用复制代码
       }, 
      mdEnhance: {
        /* MdEnhance 插件配置
         * https://theme-hope.vuejs.press/zh/config/plugins/md-enhance.html 
         */
        hint: true,	       // 提示容器
        figure: true,      // 启用 figure 图片描述
        imgLazyload: true, // 启用图片懒加载
        imgMark: true,     // 启用图片标记
        imgSize: true,     // 启用图片大小
        codetabs: true,    // 多行代码块
        mark: true,        // 标记        
        align: true,       // 自定义对齐
        tasklist: true,    // 任务列表
        attrs: true,       // 属性支持
        demo: true,        // 代码演示
        include: true,     // 导入文件
        footnote: true,    // 启用脚注
        sub: true,	       // 启用下角标
        sup: true,	       // 启用上角标
        tabs: true,        // 启用选项卡
        vPre: true,        // 启用 v-pre 容器

      playground: {
        presets: ["ts", "vue"],
      },
      
      stylize: [
      // 样式化
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
            };
          },
        },
      ],
    },
  },
});
