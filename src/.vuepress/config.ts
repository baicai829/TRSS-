import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "白菜",
  description: "白菜の帮助文档",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
