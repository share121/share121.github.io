# 模板插件应用

uTools 的插件应用开发给予了开发者最大的自由度，你可以随心所欲的设计页面结构、样式、交互，对于特别擅长前端开发的同学，这没有什么问题，但对于非前端开发者，要做出漂亮的、高质量的前端 UI 是一件困难的事情。

我们发现在 uTools 使用环境中，很多插件应用的场景都有其共性，所以我们抽象出一套体验统一、高质量、高性能的通用模版，如果你想开发的插件应用场景适合使用此模版，那么你只需提供数据并提供一些回调函数即可。

## plugin.json 文件

要使用 uTools 模版，首先第一步就是删除 `plugin.json` 文件中的 `main` 属性。

```diff
- "main": "index.html"
```

## preload.js 文件

你可以在 `preload.js` 文件中增加一段代码，这段代码通过为 `window` 对象添加 `exports` 属性的方式来实现模版插件应用功能， `exports` 对象用于描述插件应用的模版模式，以及为模版行为设置回调。

### 无 UI 模式

```js
window.exports = {
  "features.code": {
    // 注意：键对应的是 plugin.json 中的 features.code
    mode: "none", // 用于无需 UI 显示，执行一些简单的代码
    args: {
      // 进入插件应用时调用
      enter: (action) => {
        // action = { code, type, payload }
        window.utools.hideMainWindow();
        // do some thing
        window.utools.outPlugin();
      },
    },
  },
};
```

### 列表模式

```js
window.exports = {
  "features.code": {
    // 注意：键对应的是 plugin.json 中的 features.code
    mode: "list", // 列表模式
    args: {
      // 进入插件应用时调用（可选）
      enter: (action, callbackSetList) => {
        // 如果进入插件应用就要显示列表数据
        callbackSetList([
          {
            title: "这是标题",
            description: "这是描述",
            icon: "", // 图标(可选)
          },
        ]);
      },
      // 子输入框内容变化时被调用 可选 (未设置则无搜索)
      search: (action, searchWord, callbackSetList) => {
        // 获取一些数据
        // 执行 callbackSetList 显示出来
        callbackSetList([
          {
            title: "这是标题",
            description: "这是描述",
            icon: "", // 图标
            url: "https://yuanliao.info",
          },
        ]);
      },
      // 用户选择列表中某个条目时被调用
      select: (action, itemData, callbackSetList) => {
        window.utools.hideMainWindow();
        const url = itemData.url;
        require("electron").shell.openExternal(url);
        window.utools.outPlugin();
      },
      // 子输入框为空时的占位符，默认为字符串"搜索"
      placeholder: "搜索",
    },
  },
};
```

### 文档模式

```js
window.exports = {
  "features.code": {
    // 注意：键对应的是 plugin.json 中的 features.code
    mode: "doc", // 文档模式
    args: {
      // 索引集合
      // indexes: require('./indexes.json')
      indexes: [
        {
          t: "这是标题",
          d: "这是描述",
          p: "doc/xxx.html", //页面, 只能是相对路径
        },
      ],
      // 子输入框为空时的占位符，默认为字符串"搜索"
      placeholder: "搜索",
    },
  },
};
```

## 示例项目

### 无 UI + 列表模式

- Chrome 小助手 [https://github.com/in3102/utools-chrome_helperopen in new window][8]

### 文档模式

- MDN 文档（包含 JavaScript、HTML、CSS、Web API/DOM、HTTP）[https://github.com/in3102/utools-mdn-docopen in new window][10]
- Python 文档 [https://github.com/in3102/utools-python-docopen in new window][11]
- Linux 命令文档 [https://github.com/in3102/utools-linux-docopen in new window][12]
- PHP 文档 [https://github.com/in3102/utools-php-docopen in new window][13]

## UI 展示

![docs.png](https://res.u-tools.cn/website/docs.png)

[8]: https://github.com/in3102/utools-chrome_helper
[10]: https://github.com/in3102/utools-mdn-doc
[11]: https://github.com/in3102/utools-python-doc
[12]: https://github.com/in3102/utools-linux-doc
[13]: https://github.com/in3102/utools-php-doc
