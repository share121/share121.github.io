import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import enhanceHyperlink from "./src/rehype/enhance-hyperlink";
import math from "remark-math";
import katex from "rehype-katex";
import { themes } from "prism-react-renderer";

const lightCodeTheme = themes.github;
const darkCodeTheme = themes.vsDark;

const config: Config = {
  title: "Any Doc",
  tagline: "Any Doc 很酷",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://share121.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",
  deploymentBranch: "gh-pages",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "share121", // Usually your GitHub org/user name.
  projectName: "share121.github.io", // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-CN",
    locales: ["zh-CN"],
  },

  themes: [
    "@docusaurus/theme-live-codeblock",
    "@docusaurus/theme-mermaid",
    // ... Your other themes.
    [
      // @ts-ignore
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      // @ts-ignore
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        highlightSearchTermsOnTargetPage: true,
        indexPages: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        language: ["en", "zh"],
        // ```
      },
    ],
  ],
  presets: [
    [
      "classic",
      {
        docs: {
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          sidebarPath: require.resolve("./sidebars.js"),
          remarkPlugins: [math],
          rehypePlugins: [katex, enhanceHyperlink],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/share121/share121.github.io/edit/main/",
          routeBasePath: "/",
        },
        blog: {
          blogTitle: "博客",
          blogDescription: "博客",
          blogSidebarCount: "ALL",
          showReadingTime: true,
          blogSidebarTitle: "近期文章",
          remarkPlugins: [math],
          rehypePlugins: [katex, enhanceHyperlink],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/share121/share121.github.io/edit/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      } satisfies Preset.Options,
    ],
  ],
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-n8MVd4RsNIU0tAv4ct0nTaAbDJwPJzDEaqSD1odI+WdtXRGWt2kTvGFasHpSy3SV",
      crossorigin: "anonymous",
    },
    // Video.js 外观
    {
      href: "https://unpkg.com/@videojs/themes@1/dist/city/index.css",
      type: "text/css",
    },
  ],
  markdown: {
    mermaid: true,
  },
  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: false,
      },
    },
    navbar: {
      title: "Any Doc",
      hideOnScroll: true,
      logo: {
        alt: "Any Doc Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "文档",
        },
        { to: "blog", label: "博客", position: "left" },
        {
          href: "https://gitee.com/share121/share121",
          label: "Gitee",
          position: "right",
        },
        {
          href: "https://gitlab.com/share121/share121.gitlab.io",
          label: "GitLab",
          position: "right",
        },
        {
          href: "https://github.com/share121/share121.github.io",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    tableOfContents: {
      maxHeadingLevel: 6,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: [
        "dart",
        "batch",
        "powershell",
        "python",
        "javascript",
        "typescript",
        "bash",
        "diff",
        "json",
      ],
      magicComments: [
        // Remember to extend the default highlight class name as well!
        {
          className: "theme-code-block-highlighted-line",
          line: "highlight-next-line",
          block: { start: "highlight-start", end: "highlight-end" },
        },
        {
          className: "code-block-error-line",
          line: "error-next-line",
          block: { start: "error-start", end: "error-end" },
        },
      ],
    },
    colorMode: {
      respectPrefersColorScheme: true,
    },
    zoom: {
      background: {
        dark: "var(--ifm-background-color)",
      },
      config: {
        margin: 32,
      },
    },
  } satisfies Preset.ThemeConfig,
  plugins: [
    [
      "@docusaurus/plugin-pwa",
      {
        offlineModeActivationStrategies: ["always"],
        pwaHead: [
          {
            tagName: "link",
            rel: "icon",
            href: "/img/docusaurus.png",
          },
          {
            tagName: "link",
            rel: "manifest",
            href: "/manifest.webmanifest", // your PWA manifest
          },
          {
            tagName: "meta",
            name: "theme-color",
            content: "#25C2A0",
          },
          {
            tagName: "meta",
            name: "description",
            content:
              "来我们的文档网站，轻松搜索和分类文档，获取丰富的学习资源。无论您是学生、职业人士还是自由职业者，我们的网站都能满足您的需求。开始探索我们的文档世界吧！",
          },
          {
            tagName: "meta",
            name: "apple-mobile-web-app-capable",
            content: "yes",
          },
          {
            tagName: "meta",
            name: "apple-mobile-web-app-status-bar-style",
            content: "#fff",
          },
          {
            tagName: "link",
            rel: "apple-touch-icon",
            href: "/img/docusaurus.png",
          },
          {
            tagName: "link",
            rel: "mask-icon",
            href: "/img/docusaurus.svg",
            color: "#2e8555",
          },
          {
            tagName: "meta",
            name: "msapplication-TileImage",
            content: "/img/docusaurus.png",
          },
          {
            tagName: "meta",
            name: "msapplication-TileColor",
            content: "#fff",
          },
        ],
      },
    ],
    [
      "@docusaurus/plugin-ideal-image",
      {
        max: 4096, // max resized image's size.
        min: 128, // min resized image's size. if original is lower, use that size.
        steps: 32, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
    require.resolve("docusaurus-plugin-image-zoom"),
  ],
};

export default config;
