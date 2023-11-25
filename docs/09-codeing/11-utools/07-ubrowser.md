# ubrowser API

uTools browser 简称 ubrowser，是根据 uTools 的特性，量身打造的一个可编程浏览器。利用 ubrowser 可以轻而易举连接一切互联网服务，且与 uTools 完美结合。

ubrowser 拥有优雅的链式调用接口，可以用口语化的数行代码，实现一系列匪夷所思的操作。例如：

1、RPA 自动化脚本

2、网页魔改

3、网页抓取

基本 demo：

```js
// 打开"必应" 并搜索 "uTools"
utools.ubrowser
  .goto("https://cn.bing.com")
  .value("#sb_form_q", "uTools")
  .click("#sb_form_go")
  .run({ width: 1000, height: 600 });
```

## API 列表

### `useragent(userAgent)`

- `userAgent` String

> 设置 User-Agent

### `goto(url, headers, timeout)`

- `url` String
- `headers` Object (可选)

  > &#123; Referer: string, userAgent: string }

- `timeout` Integer (可选)

  > 超时 默认 60000 ms

> 前往

### `viewport(width, height)`

- `width` Integer
- `height` Integer

> 页面大小

### `hide()`

> 隐藏 ubrowser 窗口

### `show()`

> 显示 ubrowser 窗口

### `css(cssCode)`

- `cssCode` String

> 注入样式

### `press(key, ...modifier)`

- `key` String
- `modifier` String (可选)

  > ctrl | shift | alt | meta

> 键盘按键

### `paste(text)`

- `text` String (可选)

  > 文本字符串 | 图片 base64

> 执行粘贴

### `screenshot(arg, savePath)`

- `arg` String | Object (可选)

> String - 要截取的 DOM 元素

> Object - 截图位置和大小 &#123; x: Integer, y: Integer, width: Integer, height: Integer }

> 为空 截取整个窗口

- `savePath` String (可选)

  > 图片保存路径,，也可以是完整 PNG 文件路径（默认存储在临时目录）

> 部分网页截图

### `pdf(options, savePath)`

- `options` Object (可选)

  > &#123; marginsType: 0 | 1 | 2, pageSize: ('A3' | 'A4' | 'A5' | 'Legal' | 'Letter' | 'Tabloid') | &#123; width: Integer, height: Integer } }
  >
  > 与 [Electron APIopen in new window][1] 一致

- `savePath` String (可选)

  > 图片保存路径，也可以是完整 pdf 文件路径（默认存储在临时目录）

> 保存页面为 PDF

### `device(arg)`

- `arg` String | Object

  > String - 'iPhone 11' | 'iPhone X' | 'iPad' | 'iPhone 6/7/8 Plus' | 'iPhone 6/7/8' | 'iPhone 5/SE' | 'HUAWEI Mate10' | 'HUAWEI Mate20' | 'HUAWEI Mate30' | 'HUAWEI Mate30 Pro'

  > Object - &#123; size: &#123; width: Integer, height: Integer }, useragent: String }

> 模拟设备

### `cookies(name)`

- `name` String (可选)

> 为空获取全部 cookie 获取 cookie

### `setCookies(name, value)`

- `name` String
- `value` String

> 设置 cookie

### `setCookies(cookies)`

- `cookies` Array

  > \[&#123; name: String, value: String }, &#123; name: String1, value: String1 }\]

> 设置 cookie

### `removeCookies(name)`

- `name` String

> 删除 cookie

### `clearCookies(url)`

- `url` String (可选)

  > 如果在执行"goto"前执行 url 参数必需

> 清空 cookie

### `devTools(mode)`

- `mode` String (可选)

  > 'right' | 'bottom' | 'undocked' | 'detach' 默认为 'detach'

> 打开开发者工具

### `evaluate(func, ...params)`

- `func` Function

  > 在网页内执行的函数

- `param` Any (可选)

  > 传递给 func 的参数

> 执行 JS 函数，如果有返回值将加入到返回结果中

#### 示例

```js
evaluate(
  (param1, param2) => {
    return document.querySelector("div").innerText;
  },
  "param1",
  "param2"
);
```

### `wait(ms)`

- `ms` Integer

  > 等待的毫秒数

> 等待

### `wait(selector, timeout)`

- `selector` String

  > DOM 元素

- `timeout` Integer (可选)

  > 超时 默认 60000 ms

> 等待 DOM 元素出现

### `wait(func, timeout，...params)`

- `func` Function

  > 在网页内执行的函数，返回 true 结束等待

- `timeout` Integer (可选)

  > 超时 默认 60000 ms

- `param` Any (可选)

  > 传递给 func 的参数

> 等待 JS 函数执行返回 true

### `when(selector)`

- `selector` String

  > DOM 元素

> 当元素存在时执行直到碰到 end() 方法

### `when(func, ...params)`

- `func` Function

  > 在网页内执行的函数，返回 true 执行

- `param` Any (可选)

  > 传递给 func 的参数

> 当 JS 函数执行返回 true 时执行, 直到碰到 end() 方法

### `end()`

> 与 when 配套使用

### `click(selector)`

- `selector` String

> 单击元素

### `mousedown(selector)`

- `selector` String

> 元素触发按下鼠标左键

### `mouseup(selector)`

- `selector` String

> 元素触发释放鼠标左键

### `file(selector, payload)`

- `selector` String

  > input type='file' 元素

- `payload` String | Array | Buffer

  > 文件路径 或 路径集合 或 文件 Buffer

> 为网页中的 file input 赋值

### `value(selector, val)`

- `selector` String

  > input textarea select 元素

- `val` String

> 为网页中的 input textarea select 元素赋值

### `check(selector, checked)`

- `selector` String

  > checkbox radio 元素

- `checked` Boolean

  > 是否选中

> checkbox radio 元素选中或取消选中

### `focus(selector)`

- `selector` String

> 元素获得焦点

### `scroll(selector)`

- `selector` String

> 滚动到元素位置

### `scroll(y)`

- `y` Integer

> Y 轴滚动

### `scroll(x, y)`

- `x` Integer
- `y` Integer

> X 轴和 Y 轴滚动

### `download(url, savePath)`

- `url` String

  > 下载文件的 URL

- `savePath` String (可选)

  > 保存路径(保存所在文件夹或文件绝对路径)

> 文件下载

### `run(options)`

- `options` Object

  - `Object`
    - show Boolean (可选) 是否显示
    - width Integer (可选) 宽度 默认为 800
    - height Integer (可选) 高度 默认为 600
    - x Integer (可选) 位置 X
    - y Integer (可选) 位置 Y
    - center Boolean (可选) 窗口在屏幕居中
    - minWidth Integer (可选) 窗口的最小宽度。默认值为 0
    - minHeight Integer (可选) 窗口的最小高度。默认值为 0
    - maxWidth Integer (可选) 窗口的最大宽度。默认无限制
    - maxHeight Integer (可选) 窗口的最大高度。默认无限制
    - resizable Boolean (可选) 窗口是否可以改变尺寸。默认值为 true
    - movable Boolean (可选) 窗口是否可以移动，在 Linux 中无效。默认值为 true
    - minimizable Boolean (可选) 窗口是否可以最小化，在 Linux 中无效。默认值为 true
    - maximizable Boolean (可选) 窗口是否可以最大化动，在 Linux 中无效。默认值为 true
    - alwaysOnTop Boolean (可选) 窗口是否永远置顶。默认值为 false
    - fullscreen Boolean (可选) 窗口是否全屏。默认值为 false
    - fullscreenable Boolean (可选) 窗口是否可以进入全屏状态。默认值为 true
    - enableLargerThanScreen Boolean (可选) 是否允许改变窗口的大小使之大于屏幕的尺寸，仅适用于 macOS，因为其它操作系统默认允许 大于屏幕的窗口。 默认值为 false
    - opacity Number (可选) 设置窗口初始的不透明度，介于 0.0 (完全透明) 和 1.0 (完全不透明) 之间。仅支持 Windows 和 macOS 。

- `返回` Promise

> 启动 ubrowser 运行实例

### `run(ubrowserId)`

- `ubrowserId` Integer

  > 1.  run(options) 运行结束后, 当 ubrowser 实例窗口仍然显示时返回
  > 2.  utools.getIdleUBrowsers() 中获得

- `返回` Promise

> 运行在闲置状态(已运行结束，未关闭)的 ubrowser 实例上

## ubrowser 管理

### `getIdleUBrowsers()`

- `返回` Array

> 获取闲置的 ubrowser

#### 示例

```js
console.log(utools.getIdleUBrowsers());
// [{ id: number, title: string, url: string, x: number, y: number, width: number, height: number }]
```

### `setUBrowserProxy(config)`

- `config` Object

  > 与 [Electron APIopen in new window][2] 一致

- `返回` Boolean

> 设置 ubrowser 代理

#### 示例

```js
utools.setUBrowserProxy({
  proxyRules: "http=foopy:80;ftp=foopy2",
});
```

### `clearUBrowserCache()`

- `返回` Boolean

> 清空 ubrowser 缓存

#### 示例

```js
utools.clearUBrowserCache();
```

[1]: https://www.electronjs.org/docs/api/web-contents#contentsprinttopdfoptions
[2]: https://www.electronjs.org/docs/api/session#sessetproxyconfig
