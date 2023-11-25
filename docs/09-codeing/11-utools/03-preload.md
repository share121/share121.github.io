# preload.js

当你在 `plugin.json` 中配置了 `preload` 属性，将载入对应的预加载脚本。

在传统的 Web 开发中，所有的 JavaScript 脚本都在浏览器沙盒中运行，权限被严格限制，所能实现的功能非常有限。

通过 `preload.js` 能够帮你突破沙盒限制，进入一个崭新的 JavaScript 世界。

`preload.js` 是一个特殊且单独的文件，不需要与其他业务代码编译在一起，在此文件中可以访问 `nodejs`、`electron`、`uTools` 提供的 api，并挂载到 `window` 对象中，你其他的普通 JavaScript 代码就可以访问这些 api。

```js
// 开发者可以暴露自定义 API 供后加载脚本使用

// preload.js 中使用 nodejs
const { readFileSync } = require("fs");

window.readConfig = function () {
  const data = readFileSync("./config.json");
  return data;
};

// index.html 后加载的内容可以使用 window.readConfig() 方法，但不能使用 Node.js 特性
console.log(window.readConfig()); // 正常执行
console.log(readFileSync("./config.json")); // 报错
```

通过这种机制可以获得强大的底层能力，配合 HTML、CSS 丰富的表现力，完全可以按你理想中的样子去设计程序。

但是，更强大的能力如果不受约束就会伴随着更大风险，在使用预加载脚本时，应该时刻注意只提供必要且最小权限的 api 供后加载脚本使用。

（如果你想把插件应用提交到 uTools 插件应用市场供其他用户下载使用，`preload.js` 必须是明文代码，且精简清晰可读）
