# 完整配置

## 基本配置

### `main`

- 类型：`String`

入口文件，当该配置为空时，表示插件应用为[模板插件应用][1]。`main` 与 `preload` 至少存在其一

```json
"main": "index.html"
```

### `preload`

- 类型：`String`

这是一个关键文件，你可以在此文件内调用 uTools、nodejs、electron 提供的 api。`main` 与 `preload` 至少存在其一

```json
"preload": "preload.js"
```

### `logo`

- 类型：`String`

此插件应用的图标，此为 **必选项**

```json
"logo": "logo.png"
```

### `platform`

- 类型：`Array`
- 可选值：`win32`, `darwin`, `linux`

插件应用支持的平台，此为 **可选项**，默认为全平台支持

```json
"platform": ["win32", "darwin", "linux"]
```

## 开发模式

### `development`

- 类型：`Object`

在开发模式下，可使用 `development` 配置覆盖 `main` 的值，在打包时，此字段会被删除

### `development.main`

- 类型：`String`

在开发模式下，入口文件可以是 http 协议，可以配合 webpack 等工具，在开发阶段进行热更新。

> preload.js 代码变更后无法自动热更新，可以将插件应用设置成 **隐藏插件应用后完全退出**，再次进入插件应用就可以应用最新的 preload.js 代码

```json
"development": {
    "main": "http://127.0.0.1:8000/index.html"
}
```

## 插件应用设置

### `pluginSetting`

- 类型：`Object`

插件应用设置，此为 **可选项**

### `pluginSetting.single`

- 类型：`Boolean`
- 默认：`true`

插件应用是否允许多开（默认不允许）。多开方式：分离插件应用后，再次创建

```json
"pluginSetting": {
    "single": false
}
```

### `pluginSetting.height`

- 类型：`Number`

插件应用高度。可动态修改（[参考][2]），该项被设置后，用户则不能再调整高度。最小值为 1。

```json
"pluginSetting": {
    "height": 200
}
```

## 插件应用功能

### `features`

- 类型：`Array<Object>`

features 描述了当 uTools 主输入框内容产生变化时，此插件应用是否显示在搜索结果列表中，一个插件应用可以有多个功能，一个功能可以提供多个命令供用户搜索

### `features.code`

- 类型：`String`

插件应用提供的某个功能的唯一标示，此为 **必选项**，且插件应用内不可重复

### `features.explain`

- 类型：`String`

对此功能的说明，将在搜索列表对应位置中显示

### `features.icon`

- 类型：`String`

功能图标，相对路径。支持 png、jpg、svg 格式，此为 **可选项**

### `features.mainPush`

- 类型：`Boolean`

是否向搜索面板推送信息，此为 **可选项**

### `features.platform`

- 类型：`Array`
- 可选值：`win32`, `darwin`, `linux`

功能适配平台 `["win32", "darwin", "linux"]`，此为 **可选项**

### `features.cmds`

- 类型：`Array<String|Object>`

该功能下可响应的命令集，支持 6 种类型，由 `cmds` 的类型或 `cmds.type` 决定，包括如下类型：

#### 关键字

- 结构：

```json
"cmds": [ "测试", "Ping" ]
```

#### 文本正则匹配 - 关键字

- 结构：

```json
"cmds": [
    {
        // 类型标记（必须）
        "type": "regex",
        // 关键字名称（必须）
        "label": "打开网址",
        // 正则表达式字符串
        // 注意: 正则表达式存如果在斜杠 "\" 需要多加一个，"\\"
        // 注意：“任意匹配的正则” 会被 uTools 忽视，如果要任意匹配请使用 "任意文本 - 关键字"。例如：/.*/ 、/(.)+/、/[\s\S]*/ ...
        "match": "/xxx/i",
        // 最少字符数 (可选)
        "minLength": 1,
        // 最多字符数 (可选)
        "maxLength": 1
    }
]
```

#### 任意文本 - 关键字

- 结构：

```json
"cmds": [
    {
        // 类型标记（必须）
        "type": "over",
        // 关键字名称（必须）
        "label": "百度一下",
        // 排除正则字符串 (任意文本中排除的部分) (可选)
        "exclude": "/xxx/",
        // 最少字符数 (可选)
        "minLength": 1,
        // 最多字符数 (默认最多为 10000) (可选)
        "maxLength": 500
    }
]
```

#### 图片 - 关键字

- 结构：

```json
"cmds": [
    {
        // 类型标记（必须）
        "type": "img",
        // 关键字名称（必须）
        "label": "图片编辑"
    }
]
```

#### 文件或文件夹 - 关键字

- 结构：

```json
"cmds": [
    {
        // 类型标记（必须）
        "type": "files",
        // 关键字名称（必须）
        "label": "提取文件名称",
        // 文件类型 - "file"、"directory" (可选)
        "fileType": "file",
        // 名称匹配正则字符串 (可选)
        "match": "/xxx/",
        // 最少文件数 (可选)
        "minLength": 1,
        // 最多文件数 (可选)
        "maxLength": 1
    }
]
```

#### 当前活动应用窗口 - 关键字

:::tip

可使用 uTools **窗口信息** 关键字查看窗口信息

:::

- 结构：

```json
"cmds": [
    {
        // 类型标记（必须）
        "type": "window",
        // 关键字名称（必须）
        "label": "置顶窗口",
        // 应用窗口匹配规则
        "match": {
            // 应用（必须）
            "app": ["xxx.app", "xxx.exe"],
            // 窗口标题正则 (可选)
            "title": "/xxxx/",
            // 窗口类 (Windows 专有) (可选)
            "class": ["xxx"]
        }
    }
]
```

## 完整配置下载

完整配置文件[下载][3]

[1]: ./template
[2]: ./api#setexpendheightheight
[3]: https://u.tools/docs/plugin.json
