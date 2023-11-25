# 快速上手

hey，开发者，终于和你见面了。

从这里开始，你将了解如何从零开始创造一个 uTools 插件应用。这是非常容易的事情，你不必学习一些特有的无法应用在其他领域的知识，只需要使用你已经熟悉的技术（Javascript、HTML、CSS），如果你了解一些 Nodejs 的相关 API，那将再好不过，它能够与本地操作系统有更多的交互，实现更为强大的功能。

## plugin.json

在你觉得合适的地方新建一个文件夹，并创建 `plugin.json` 文件。这是最重要的一个文件，用来说明这个插件应用将如何与 uTools 集成，最基本的格式如下：

```json
{
  "main": "index.html",
  "logo": "logo.png",
  "features": [
    {
      "code": "hello",
      "explain": "hello world",
      "cmds": ["hello", "你好"]
    }
  ]
}
```

#### 字段说明

`main`：入口文件，如果没有定义入口文件，此插件应用将变成一个[模版插件应用][3]

`logo`：插件应用的图标

`features`：唯一比较复杂的就是 features 了，首先它是一个数组，每个数组元素用来描述这个插件应用提供的一个相对独立的功能，例如 uTools 中的 **编码小助手** 插件应用，提供了 **md5**、**时间戳**、**随机数** 等功能。

`features.code`：插件应用某个功能的识别码，在进入插件应用时会传递给你的代码，可用于区分不同的功能，显示不同的 UI

`features.cmds`：通过哪些方式可以进入这个功能，中文会自动支持 **拼音** 及 **拼音首字母**，无须重复添加

#### 创建入口文件

根据 `main` 中的定义，在 `plugin.json` 的同级目录，创建一个 `index.html` 文件：

```html
<!DOCTYPE html>
<html>
  <body>
    hello world
  </body>
</html>
```

## 开发者中心

好了，一个 hello world 插件应用已经开发好了，我们让它集成到 uTools 中。

1. 安装 **uTools 开发者工具**，新建一个项目，并选择刚刚创建的 `plugin.json` 文件。![create.png](https://res.u-tools.cn/website/developer.png)
2. 点击 **开启运行**。

![manage.png](https://res.u-tools.cn/website/developer2.png)

3. 退出开发者工具，在 uTools 中输入 `hello`，`你好`，`nh` 均可以到达你的插件应用 ![open.png](https://res.u-tools.cn/website/open.png)![hello.png](https://res.u-tools.cn/website/hello.png)
4. 当你已经实现了插件应用所需的功能，通过 **开发者工具** 管理界面，点击 **打包**，就可以获得一个打包好的 `.upx` 文件，复制或拖入 uTools 主输入框中即可以进行安装。![AslhIx.png](https://res.u-tools.cn/website/install.png)
5. 如果你想与其他用户分享你的插件应用，可以选择 **插件应用发布** 将插件应用提交给 uTools，审核通过后用户可在插件应用市场中下载安装。
