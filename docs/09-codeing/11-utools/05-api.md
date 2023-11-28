# uTools API

在插件应用初始化完成时，uTools 会自动在你的 window 对象上挂载 utools 对象。

## 事件

你可以根据需要，事先定义好一些回调函数，uTools 会在事件产生时主动调用它们。

### `onPluginEnter(callback)`

- `callback` Function

  - `Object`

    - `code` String

      > plugin.json 配置的 feature.code

    - `type` String

      > plugin.json 配置的 feature.cmd.type，可以为 "text"、"img"、 "files"、 "regex"、 "over"、"window"

    - `payload` String | Object | Array

      > feature.cmd.type 对应匹配的数据

    - `option` undefined | Object

      > feature.mainPush 设置为 ture ，且当用户选择 onMainPush 返回的选项进入时

> 进入插件应用时，uTools 将会主动调用这个方法。

#### 示例

```js
utools.onPluginEnter(({ code, type, payload, option }) => {
  console.log("用户进入插件应用", code, type, payload);
});

/*
type 为 "files" 时， payload 值示例
[
	{
		"isFile": true,
		"isDirectory": false,
		"name": "demo.js",
		"path": "C:\\demo.js"
	}
]

type 为 "window" 时， payload 值示例
{
	"id": 264584,
	"class": "Chrome_WidgetWin_1",
	"title": "demo",
	"x": -8,
	"y": -8,
	"width": 1936,
	"height": 1056,
	"appPath": "C:\\demo.exe",
	"pid": 232,
	"app": "demo.exe"
}

type 为 "img" 时， payload 值示例
data:image/png;base64,...

type 为 "text"、"regex"、 "over" 时， payload 值为进入插件应用时的主输入框文本
*/
```

### `onMainPush(callback, selectCallback)`

- `callback` Function

  - `Object`

    - `code` String

      > plugin.json 配置的 feature.code

    - `type` String

      > plugin.json 配置的 feature.cmd.type，可以为 "text"、"img"、 "files"、 "regex"、 "over"、"window"

    - `payload` String | Object | Array

      > feature.cmd.type 对应匹配的数据

  - `返回` Array

    > 返回内容，协议如下 \[\{ icon: '图标.png', text: '文本内容', title: '鼠标移动到选项时显示的提示' }, ...\]

- `selectCallback` Function

  - `Object`

    - `code` String

      > plugin.json 配置的 feature.code

    - `type` String

      > plugin.json 配置的 feature.cmd.type，可以为 "text"、"img"、 "files"、 "regex"、 "over"、"window"

    - `payload` String | Object | Array

      > feature.cmd.type 对应匹配的数据

    - `option` Object

      > callback 中返回的列表其中选项

  - `返回` undefined | Boolean

    > 返回 true 表示进入插件应用

> 向搜索面板推送消息(需要 feature.mainPush 设置为 true)

#### 示例

```js
function callback({ code, type, payload }) {
  return [
    {
      icon: "icon.png",
      text: "选项1",
      title: "help text",
    },
    {
      text: "选项2",
      anyField: "xxxx",
    },
  ];
}
function selectCallback({ code, type, payload, option }) {
  if (option.xxx) {
    // 返回 true 表示需要进入插件应用处理
    return true;
  }
  // 不进入插件应用 "执行粘贴文本"
  utools.hideMainWindowPasteText(option.text);
}
utools.onMainPush(callback, selectCallback);
```

### `onPluginOut(callback)`

- `callback` Function

  - `processExit` Boolean

    > 是否完全退出插件应用

> 插件应用退出时，uTools 将会主动调用这个方法。

#### 示例

```js
utools.onPluginOut((processExit) => {
  if (processExit) {
    console.log("插件应用完全退出");
  } else {
    console.log("插件应用隐藏后台");
  }
});
```

### `onPluginDetach(callback)`

- `callback` Function

> 用户对插件应用进行分离操作时，uTools 将会主动调用这个方法。

#### 示例

```js
utools.onPluginDetach(() => {
  console.log("插件应用已作为系统窗口使用");
});
```

### `onDbPull(callback)`

- `callback` Function

> 当此插件应用的数据在其他设备上被更改后同步到此设备时，uTools 将会主动调用这个方法

#### 示例

```js
utools.onDbPull(() => {
  console.log("onDbPull");
});
```

## 窗口交互

### `hideMainWindow(isRestorePreWindow)`

- `isRestorePreWindow` Boolean

  > 是否焦点回归到前面的活动窗口，默认 true

- `返回` Boolean

> 执行该方法将会隐藏 uTools 主窗口，包括此时正在主窗口运行的插件应用，分离的插件应用不会被隐藏。

#### 示例

```js
utools.hideMainWindow();
```

### `showMainWindow()`

- `返回` Boolean

> 执行该方法将会显示 uTools 主窗口，包括此时正在主窗口运行的插件应用。

#### 示例

```js
utools.showMainWindow();
```

### `setExpendHeight(height)`

- `height` Integer
- `返回` Boolean

> 执行该方法将会修改插件应用窗口的高度。

#### 示例

```js
utools.setExpendHeight(100);
```

### `setSubInput(onChange, placeholder, isFocus)`

- `onChange` Function

  - `Object`
    - `text` String

  > 子输入框文本修改时触发

- `placeholder` String (可选)

  > 子输入框占位符

- `isFocus` Boolean (可选)

  > 子输入框是否获得焦点，默认 true

- `返回` Boolean

> 设置子输入框，进入插件应用后，原本 uTools 的搜索条主输入框将会变成子输入框，子输入框可以为插件应用所使用。

![main.png](https://res.u-tools.cn/website/main.png)

主输入框

![main.png](https://res.u-tools.cn/website/subInput.png)

子输入框

#### 示例

```js
utools.setSubInput(({ text }) => {
  console.log(text);
}, "搜索");
```

### `removeSubInput()`

- `返回` Boolean

> 移除已经设置的子输入框，在插件应用切换到其他页面时可以重新设置子输入框为其所用。

#### 示例

```js
utools.removeSubInput();
```

### `setSubInputValue(value)`

- `value` String
- `返回` Boolean

> 直接对子输入框的值进行设置。

#### 示例

```js
utools.setSubInputValue("uTools");
```

### `subInputFocus()`

- `返回` Boolean

> 子输入框获得焦点

#### 示例

```js
utools.subInputFocus();
```

### `subInputSelect()`

- `返回` Boolean

> 子输入框获得焦点并选中

#### 示例

```js
utools.subInputSelect();
```

### `subInputBlur()`

- `返回` Boolean

> 子输入框失去焦点，插件应用获得焦点

#### 示例

```js
utools.subInputBlur();
```

### `outPlugin()`

- `返回` Boolean

> 执行该方法将会退出当前插件应用。（插件应用进入后台，进程并未结束）

#### 示例

```js
utools.outPlugin();
```

### `redirect(label, payload)`

- `label` Array | String

  > Array\[0\]: 插件应用名称，Array\[1\]: 功能关键字 | 功能关键字

- `payload` String | Object
- `返回` Boolean

> 该方法可以携带数据，跳转到另一个插件应用进行处理，如果用户未安装对应的插件应用将引导进入插件应用市场下载。

#### 示例

```js
// 跳转到插件应用「聚合翻译」并翻译内容
utools.redirect(["聚合翻译", "翻译"], "hello world");

// 找到 “翻译” 关键字，并自动跳转到对应插件应用
utools.redirect("翻译", "hello world");

// 跳转到插件应用「OCR 文字识别」并识别图片中文字
utools.redirect(["OCR 文字识别", "OCR 文字识别"], {
  type: "img",
  data: "data:image/png;base64,", // base64
});

// 跳转到插件应用「JSON 编辑器」查看 Json 文件
utools.redirect(["JSON 编辑器", "Json"], {
  type: "files",
  data: "/path/test.json", // 支持数组
});
```

### `showOpenDialog(options)`

- `options` Object

  > 与 [Electron API dialog.showOpenDialogSyncopen in new window][1] options 一致

- `返回` Array | undefined

  > 返回选择的文件数组，用户取消返回 undefined

> 弹出文件选择框

#### 示例

```js
utools.showOpenDialog({
  filters: [{ name: "plugin.json", extensions: ["json"] }],
  properties: ["openFile"],
});
```

### `showSaveDialog(options)`

- `options` Object

  > 与 [Electron API dialog.showSaveDialogSyncopen in new window][2] options 一致

- `返回` String | undefined

  > 返回选择的路径，用户取消返回 undefined

> 弹出文件保存框

#### 示例

```js
utools.showSaveDialog({
  title: "保存位置",
  defaultPath: utools.getPath("downloads"),
  buttonLabel: "保存",
});
```

### `findInPage(text, options)`

- `text` String

  > 要搜索的内容(必填)

- `options` Object (可选)

  > 与 [Electron API contentsfindinpagetext-optionsopen in new window][3] options 一致

> 插件应用页面中查找内容

#### 示例

```js
utools.findInPage("utools");
```

### `stopFindInPage(action)`

- `action` String

  > "clearSelection" | "keepSelection" | "activateSelection", 默认 "clearSelection"
  >
  > 与 [Electron API contentsstopfindinpageactionopen in new window][4] 一致

> 停止插件应用页面中查找

#### 示例

```js
utools.stopFindInPage();
```

### `startDrag(file)`

- `file` String | Array

  > 文件路径 或 文件路径集合

> 原生拖拽文件到其他窗口

#### 示例

```js
utools.startDrag("/path/to/file");
```

### `createBrowserWindow(url, options, callback)`

- `url` String

  > 相对路径的 html 文件

- `options` Object

  > 与 [Electron API new BrowserWindowopen in new window][5] 参数一样，注意：preload 需配置相对位置

- `callback` Function (可选)

  > `url` 加载完成时回调

- `返回` Object

  > 返回 uTools API 构建的 [BrowserWindowopen in new window][6] 对象。 _保留了大部分实例方法_

> 创建浏览器窗口

#### 示例

```js
const ubWindow = utools.createBrowserWindow(
  "test.html",
  {
    show: false,
    title: "测试窗口",
    webPreferences: {
      preload: "preload.js",
    },
  },
  () => {
    // 显示
    ubWindow.show();
    // 置顶
    ubWindow.setAlwaysOnTop(true);
    // 窗口全屏
    ubWindow.setFullScreen(true);
    // 向子窗口传递数据
    ubWindow.webContents.send("ping");
    require("electron").ipcRenderer.sendTo(ubWindow.webContents.id, "ping");
    // 执行脚本
    ubWindow
      .executeJavaScript(
        'fetch("https://jsonplaceholder.typicode.com/users/1").then(resp => resp.json())'
      )
      .then((result) => {
        console.log(result); // Will be the JSON object from the fetch call
      });
  }
);
console.log(ubWindow);
```

```js
// 在新建窗口 JavaScript 中接收父窗口传递过来的数据
const { ipcRenderer } = require("electron");
ipcRenderer.on("ping", (event, data) => {
  console.log(event);
  console.log(data);
});
```

### `isDarkColors()`

> 是否深色模式

#### 示例

```js
utools.onPluginEnter(({ code, type, payload }) => {
  document.body.className = utools.isDarkColors() ? "dark-mode" : "";
});
```

## 动态增减功能

很多时候，插件应用中会提供一些功能供用户进行个性化设置（例如：**网页快开** 插件应用），这部分配置无法在 `plugin.json` 事先定义好，所以我们提供了以下方法对插件应用功能进行动态增减。

### `getFeatures(codes)`

- `codes` Array (可选)

  > 为空，获取所有

- `返回` Array

> 获取插件应用动态创建的功能。

```js
// 获取所有动态功能
const features = utools.getFeatures();
console.log(features);
// 获取特定 code
const features = utools.getFeatures(["code-1", "code-2"]);
console.log(features);
```

### `setFeature(feature)`

- `feature` Object

  > 格式与 `plugin.json` 中配置的格式一致

  - `code` String
  - `explain` String
  - `icon` String (可选)
  - `platform` Array (可选)
  - `cmds` Array

- `返回` Boolean

> 为本插件应用动态新增某个功能。

```js
utools.setFeature({
  code: "hosts",
  explain: "hosts切换",
  // "icon": "res/xxx.png",
  // "icon": "data:image/png;base64,xxx...",
  // "platform": ["win32", "darwin", "linux"]
  cmds: ["hosts"],
});
```

### `removeFeature(code)`

- `code` String
- `返回` Boolean

> 动态删除本插件应用的某个功能。

```js
utools.removeFeature("code");
```

## 用户

获取当前用户头像、昵称

### `getUser()`

- `返回` Object

  > \{ avatar: String, nickname: String, type: 'member' | 'user' } | null

> 获取当前用户，未登录账号返回 `null`

```js
console.log(utools.getUser());
```

### `fetchUserServerTemporaryToken()`

- `返回` Promise

  > Promise\<\{ token: string, expired_at: number }>

> 获取用户服务端临时令牌，用于[获取用户基础信息接口][7]

```js
utools.fetchUserServerTemporaryToken().then((ret) => {
  console.log(ret);
});
```

## 付费

### `isPurchasedUser()`

- `返回` Object

  > Boolean | String

> 是否付费用户，返回 `true` 表示永久授权，返回 `"yyyy-mm-dd hh:mm:ss"` 表示授权到期时间

```js
if (utools.isPurchasedUser()) {
  // 已付费的合法用户，可使用插件应用完整功能
}
```

### `openPurchase(options, callback)`

- `options`

  - `goodsId` String

    > 商品 ID，在 “ uTools 开发者工具” 插件应用中创建

  - `outOrderId` String (可选)

    > 第三方服务生成的订单号（6 - 64 字符）

  - `attach` String (可选)

    > 第三方服务附加数据，在查询 API 和支付通知中原样返回，可作为自定义参数使用（最多 256 字符）

- `callback`

  > 购买成功后回调

> 打开付费 (软件付费模式)

```js
utools.openPurchase({ goodsId: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" }, () => {
  // 购买完成，解锁全部功能
});
```

### `openPayment(options, callback)`

- `options`

  - `goodsId` String

    > 商品 ID，在 “uTools 开发者工具” 插件应用中创建

  - `outOrderId` String (可选)

    > 第三方服务生成的订单号（6 - 64 字符）

  - `attach` String (可选)

    > 第三方服务附加数据，在查询 API 和支付通知中原样返回，可作为自定义参数使用（最多 256 字符）

- `callback`

  > 支付成功后回调

> 打开支付（服务付费模式）

```js
utools.openPayment({ goodsId: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" }, () => {
  // 用户完成支付
});
```

### `fetchUserPayments()`

- `返回` Promise

  > Promise\<\{ order_id: string, out_order_id: string, open_id:string, pay_fee: number, body: string, attach: string, goods_id: string, paid_at: string,created_at }\[\]>

> 获取用户支付记录

```js
utools.fetchUserPayments().then((ret) => {
  console.log(ret);
  /**
  	    {
        "order_id": "ZsVSwEDoR7PPs6vWdAGplEpEpNjn8xb4", // utools 订单号
        "out_order_id": "", // 外部订单号
        "open_id": "a331127d654761ac91d086b942aae7b6", uTools 用户 ID, 对于此插件应用不变且唯一
        "pay_fee": 1, // 支付金额（分）
        "body": "会员1年", // 支付内容
        "attach": "", // 附加数据
        "goods_id": "6n193s7P95p9gA13786YkwQ5oxHpVW4f", // 商品 ID
        "paid_at": "2021-06-18 16:55:26", // 支付时间
        "created_at": "2021-06-18 16:55:11" // 订单生成时间
    }
  */
});
```

## 输入

### `hideMainWindowPasteFile(file)`

- `file` String | Array

  > 文件路径或文件路径集合

- `返回` Boolean

> 粘贴文件

#### 示例

```js
utools.hideMainWindowPasteFile("/path/to/file");
```

### `hideMainWindowPasteImage(img)`

- `img` String | Uint8Array

  > 图片路径 或 base64 或 Uint8Array

- `返回` Boolean

> 粘贴图像

#### 示例

```js
// 路径
utools.hideMainWindowPasteImage("/path/to/img.png");
// base64
utools.hideMainWindowPasteImage("data:image/png;base64,xxxxxxxxx");
```

### `hideMainWindowPasteText(text)`

- `text` String

  > 字符串文本

- `返回` Boolean

> 粘贴文本

#### 示例

```js
utools.hideMainWindowPasteText("Hi, uTools");
```

### `hideMainWindowTypeString(text)`

- `text` String

  > 任意文本包括 Emoji 符号字符

- `返回` Boolean

> 输入字符串（输入法原理）

#### 示例

```js
// 输入一句文本
utools.hideMainWindowTypeString("uTools 新一代效率工具平台 - 🐼👏🦄👨‍👩‍👧‍👦🚵🏻");
```

## 工具

屏幕取色 & 屏幕截图

### `screenColorPick(callback)`

- `callback` Function

  > 取色结束回调

  - `Object`
    - `hex` String
    - `rgb` String

> 屏幕取色

#### 示例

```js
utools.screenColorPick(({ hex, rgb }) => {
  console.log(hex); // #FFFFFF
  console.log(rgb); // RGB(0, 0, 0)
});
```

### `screenCapture(callback)`

- `callback` Function

  > 截图结束回调

  - `String`

    > 图片的 Base64 字符串

> 屏幕截图

#### 示例

```js
utools.screenCapture((base64Str) => {
  utools.redirect("识别图片中文字", { type: "img", data: base64Str });
});
```

## 模拟

模拟敲击键盘 和 鼠标点击

### `simulateKeyboardTap(key, ...modifier)`

- `key` String

  > 键值

- `modifier` String (可选)

  > 功能键

> 模拟键盘按键

#### 示例

```js
// 模拟键盘敲击 Enter
utools.simulateKeyboardTap("enter");
// windows linux 模拟粘贴
utools.simulateKeyboardTap("v", "ctrl");
// macos 模拟粘贴
utools.simulateKeyboardTap("v", "command");
// 模拟 Ctrl + Alt + A
utools.simulateKeyboardTap("a", "ctrl", "alt");
```

### `simulateMouseMove(x, y)`

- `x` Integer
- `y` Integer

> 模拟鼠标移动

#### 示例

```js
utools.simulateMouseMove(100，100)
```

### `simulateMouseClick(x, y)`

- `x` Integer (可选)
- `y` Integer (可选)

> 模拟鼠标左键单击

#### 示例

```js
utools.simulateMouseClick(100，100)
```

### `simulateMouseRightClick(x, y)`

- `x` Integer (可选)
- `y` Integer (可选)

> 模拟鼠标右键单击

#### 示例

```js
utools.simulateMouseRightClick(100，100)
```

### `simulateMouseDoubleClick(x, y)`

- `x` Integer (可选)
- `y` Integer (可选)

> 模拟鼠标双击

#### 示例

```js
utools.simulateMouseDoubleClick(100，100)
```

## 屏幕

### `getCursorScreenPoint()`

- `返回` Object

  > \{ x: Integer, y: Integer }

> 获取鼠标绝对位置

#### 示例

```js
const point = utools.getCursorScreenPoint();
console.log(point.x, point.y);
```

### `getPrimaryDisplay()`

- `返回` Object

  > [Display 对象 open in new window][8]

> 获取主显示器

#### 示例

```js
const display = utools.getPrimaryDisplay();
console.log(display);
```

### `getAllDisplays()`

- `返回` Array

  > [Display 对象 open in new window][9] 集合

> 获取所有显示器

#### 示例

```js
const displays = utools.getAllDisplays();
console.log(displays);
```

### `getDisplayNearestPoint(point)`

- `point` Object
- `返回` Object

  > [Display 对象 open in new window][10]

> 获取位置所在的显示器

#### 示例

```js
const display = utools.getDisplayNearestPoint({ x: 100, y: 100 });
console.log(display);
```

### `getDisplayMatching(rect)`

- `rect` Object
- `返回` Object

  > [Display 对象 open in new window][11]

> 获取矩形所在的显示器

#### 示例

```js
const display = utools.getDisplayMatching({
  x: 100,
  y: 100,
  width: 200,
  height: 200,
});
console.log(display);
```

### `desktopCaptureSources(options)`

- `options` Object
- `返回` Promise

> 录屏源 [参考 Electron API desktopCapturer getSourcesopen in new window][12]

#### 示例

```js
(async () => {
  const ousrces = await utools.desktopCaptureSources({
    types: ["window", "screen"],
  });
  const stream = await navigator.mediaDevices.getUserMedia({
    audio: false,
    video: {
      mandatory: {
        chromeMediaSource: "desktop",
        chromeMediaSourceId: ousrces[0].id,
        minWidth: 1280,
        maxWidth: 1280,
        minHeight: 720,
        maxHeight: 720,
      },
    },
  });
  const video = document.querySelector("video");
  video.srcObject = stream;
  video.onloadedmetadata = (e) => video.play();
})();
```

## 复制

### `copyFile(file)`

- `file` String | Array
- `返回` Boolean

> 复制文件到系统剪贴板

#### 示例

```js
// 复制单个文件
utools.copyFile("/path/to/file");
// 复制多个文件
utools.copyFile(["/path/to/file1", "/path/to/file2"]);
```

### `copyImage(img)`

- `img` String | Buffer
- `返回` Boolean

> 复制图片到系统剪贴板

#### 示例

```js
// 路径
utools.copyImage("/path/to/img.png");
// base64
utools.copyImage("data:image/png;base64,xxxxxxxxx");
```

### `copyText(text)`

- `text` String
- `返回` Boolean

> 复制文本

#### 示例

```js
utools.copyText("Hi, uTools");
```

### `getCopyedFiles()`

- `返回` Array

> 获取复制的文件或文件夹

#### 示例

```js
utools.getCopyedFiles();
// 返回 [{ isFile: true, isDirectory: false, name: 'test.png', path: '/path/to/test.png' }]
```

## 系统

### `showNotification(body, clickFeatureCode)`

- `body` String
- `clickFeatureCode` String (可选)

  > plugin.json 配置的 feature.code，点击通知进入插件应用功能(该 feature.cmds 至少包含一个搜索字符串关键字)

> 显示系统通知

#### 示例

```js
utools.showNotification("Hi, uTools");
```

### `shellOpenPath(fullPath)`

- `fullPath` String

> 系统默认方式打开给定的文件

#### 示例

```js
utools.shellOpenPath("/path/to/file");
```

### `shellShowItemInFolder(fullPath)`

- `fullPath` String

> 系统文件管理器中显示给定的文件

#### 示例

```js
utools.shellShowItemInFolder("/path/to/file");
```

### `shellOpenExternal(url)`

- `url` String

> 系统默认的协议打开 URL

#### 示例

```js
// 浏览器打开
utools.shellOpenExternal("https://u.tools");
```

### `shellBeep()`

> 播放哔哔声

#### 示例

```js
utools.shellBeep();
```

### `getNativeId()`

- `返回` String

> 获取本地 ID

#### 示例

```js
// 存储只与当前设备相关的信息
const nativeId = utools.getNativeId();
utools.dbStorage.setItem(nativeId + "/key", "native value");
```

### `getAppName()`

- `返回` String

> 获取软件名称

#### 示例

```js
console.log(utools.getAppName());
```

### `getAppVersion()`

- `返回` String

> 获取软件版本

#### 示例

```js
console.log(utools.getAppVersion());
```

### `getPath(name)`

- `name` String

  > 你可以通过名称请求以下的路径:

  - `home` 用户的 home 文件夹（主目录）
  - `appData` 当前用户的应用数据文件夹，默认对应：
    - `%APPDATA%` Windows 中
    - `~/Library/Application Support` macOS 中
  - `userData` 储存你应用程序设置文件的文件夹，默认是 appData 文件夹附加应用的名称
  - `temp` 临时文件夹
  - `exe` 当前的可执行文件
  - `desktop` 当前用户的桌面文件夹
  - `documents` 用户文档目录的路径
  - `downloads` 用户下载目录的路径
  - `music` 用户音乐目录的路径
  - `pictures` 用户图片目录的路径
  - `videos` 用户视频目录的路径
  - `logs` 应用程序的日志文件夹

- `返回` String

> 获取路径

#### 示例

```js
// 获取下载路径
console.log(utools.getPath("downloads"));
```

### `getFileIcon(filePath)`

- `filePath` String

  > 文件路径、文件扩展名、"folder"

- `返回` String

> 获取文件图标

#### 示例

```js
// 获取扩展名为 "txt" 的文件图标
utools.getFileIcon(".txt");
// 获取文件夹图标
utools.getFileIcon("folder");
// 获取文件图标
utools.getFileIcon("D:\\test.url");
```

### `readCurrentFolderPath()`

- `返回` Promise

> 读取当前文件管理器窗口路径 (linux 不支持)

#### 示例

```js
utools.readCurrentFolderPath().then((dir) => {
  console.log(dir);
});
```

### `readCurrentBrowserUrl()`

- `返回` Promise

> 读取当前浏览器窗口 URL (linux 不支持)

> MacOS 支持浏览器 Safari、Chrome、Microsoft Edge、Opera、Vivaldi、Brave

> Windows 支持浏览器 Chrome、Firefox、Edge、IE、Opera、Brave

#### 示例

```js
utools.readCurrentBrowserUrl().then((url) => {
  console.log(url);
});
```

### `isDev()`

> 判断插件应用是否在开发环境

#### 示例

```js
if (utools.isDev()) {
  console.log("coding");
}
```

### `isMacOS()`

> 是否 MacOS 操作系统

#### 示例

```js
if (utools.isMacOS()) {
  console.log("mac");
}
```

### `isWindows()`

> 是否 Windows 操作系统

#### 示例

```js
if (utools.isWindows()) {
  console.log("windows");
}
```

### `isLinux()`

> 是否 Linux 操作系统

#### 示例

```js
if (utools.isLinux()) {
  console.log("linux");
}
```

[1]: https://www.electronjs.org/docs/api/dialog#dialogshowopendialogsyncbrowserwindow-options
[2]: https://www.electronjs.org/docs/api/dialog#dialogshowsavedialogsyncbrowserwindow-options
[3]: https://www.electronjs.org/docs/api/web-contents#contentsfindinpagetext-options
[4]: https://www.electronjs.org/docs/api/web-contents#contentsstopfindinpageaction
[5]: https://www.electronjs.org/docs/api/browser-window#new-browserwindowoptions
[6]: https://www.electronjs.org/docs/api/browser-window
[7]: https://u.tools/docs/developer/server-api.html#%E8%8E%B7%E5%8F%96%E7%94%A8%E6%88%B7%E5%9F%BA%E7%A1%80%E4%BF%A1%E6%81%AF%E6%8E%A5%E5%8F%A3
[8]: https://www.electronjs.org/docs/api/structures/display
[9]: https://www.electronjs.org/docs/api/structures/display
[10]: https://www.electronjs.org/docs/api/structures/display
[11]: https://www.electronjs.org/docs/api/structures/display
[12]: https://www.electronjs.org/zh/docs/latest/api/desktop-capturer
