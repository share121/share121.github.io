# uTools Server API

通过 uTools 的服务端 API，可以将你的应用和 uTools 用户关联，实现帐号互通、接收支付通知、查询用户支付记录等，为保护密钥安全，请仅在服务端调用接口。

## 获取用户基础信息接口

此接口用于获取 uTools 用户的基础信息、验证用户真实性，与第三方系统进行帐号打通，实现系统间免登录跳转等。

### 1.1 接口说明

**调用地址**：`https://open.u-tools.cn/baseinfo`

**请求方式**：`get`

**Header**： `Accept:application/json` 请求头中须添加此项，否则请求将失败

**请求参数**：

| 参数名       | 是否必填 | 说明                             |
| ------------ | -------- | -------------------------------- |
| plugin_id    | 是       | 插件应用 ID                      |
| access_token | 是       | uTools 用户的 access_token       |
| timestamp    | 是       | 时间戳（秒），误差需小于 10 分钟 |
| sign         | 是       | 签名                             |

### 1.2 获取当前用户临时 access_token

在 uTools 客户端中调用：

```js
// 获取用户服务端临时令牌，2 小时内有效
utools.fetchUserServerTemporaryToken().then((res) => {
  const access_token = res.token;
});
```

### 1.3 签名方法

1.  对请求参数按参数名升序排序
2.  对参数内容进行 `url_encode` 编码后，组合成 URL 参数形式的字符串，如：`access_token=aaaaaaa&plugin_id=ccccc&timestamp=1624329435`
3.  使用 HMAC 方法对字符串生成带有密钥的哈希值，得到签名

```js
// 以下为 php 代码演示签名过程
// 参数
$params = [
  "plugin_id" => "zueadppw", // 可在开发者插件应用中获得
  "access_token" => "user access_token 32位",
  "timestamp" => "1624329435",
];


// 1. 按照键名对数组进行升序排序
ksort($params);

// 2. 生成 URL-encode 之后的请求字符串
$str = http_build_query($params);

// 3. 使用 HMAC 方法生成带有密钥的哈希值
$secret = "your secret 32位"; // secret 在开发者插件应用中通过重置获取
$sign = hash_hmac("sha256", $str, $secret);
```

### 1.4 返回值

若调用成功（http 状态码 200），将返回如下信息：

```json
{
  "resource": {
    "avatar": "https://res.u-tools.cn/assets/avatars/eZCBIawAkspLw8Xg.png",
    "member": 1, // 是否 uTools 会员（0: 否，1: 是）
    "nickname": "却步.",
    "open_id": "00a50cd81c37c4e381e8161b2d762158", // uTools 用户 ID, 对于此插件应用不变且唯一
    "timestamp": 1624329616
  },
  "sign": "4dbf21a9d5a0f0e3906a0180522fd6393b4e91f738d57cafddf309afc6c547bb" // 签名算法与 1.3 相同
}
```

若调用失败，将返回如下信息：

```json
{
  "message": "The given data was invalid.", // message 字段始终存在
  "errors": {
    // 可能没有详细错误信息
    "access_token": ["access token 必须是 32 个字符。"]
  }
}
```

HTTP 状态码说明

| http 状态码 | 说明                                                   |
| ----------- | ------------------------------------------------------ |
| 200         | 成功返回                                               |
| 400         | 客户端错误                                             |
| 401         | 未知用户（sign 错误，access_token 错误等）             |
| 403         | 无权限访问（access_token 过期）                        |
| 404         | 未找到用户（不存在此用户或违反 uTools 相关协议被禁用） |
| 422         | 请求的参数未通过验证                                   |
| 500         | uTools 暂时无法提供服务                                |

## 用户支付成功回调接口

当用户通过 uTools 在你的插件应用内完成支付，且在开发者工具中配置了回调地址，在收到付款时，会将信息推送到配置的回调地址。

### 2.1 接口说明

**请求方式**：`post`

**Header**：`contentType: application/json`

**请求参数**：

```json
{
  "resource": {
    "attach": "", // 附加数据
    "body": "会员1年", // 支付内容
    "created_at": "2021-06-18 16:42:16", // 订单生成时间
    "goods_id": "6n193s7P95p9gA13786YkwQ5oxHpVW4f", // 商品ID
    "open_id": "a331127d654761ac91d086b942aae7b6", // uTools 用户 ID
    "order_id": "KMFSOZt5cMe5A0ClkdCAAyPasyXZJzP6", // uTools 订单号
    "out_order_id": "123456", // 外部订单号
    "paid_at": "2021-06-18 16:42:36", // 用户支付时间
    "pay_fee": 1, // 支付金额（分）
    "plugin_id": "FFFFFFFF",
    "status": 10, // 是否支付（0: 未支付，10: 已支付）
    "timestamp": 1624346603 // 请求发送时间戳
  },
  "sign": "53e8ab69b940483abd04427fdaf2de9b5294509943df5393b7bf1913af9055fa"
}
```

### 2.2 注意事项

1.  当处理完成后，请返回字符串 `SUCCESS`
2.  如果返回值为其他，uTools 会延时后再次通知，最多通知 5 次，时间间隔 \[15, 30, 60, 300, 600\] 秒。
3.  通知最长等待 10 秒。
4.  避免消息伪造，请务必验证 sign，签名方式与获取用户基础信息接口 1.3 一致

## 支付订单查询接口

此接口用于主动查询订单支付状态。

#### 3.1 接口说明

**调用地址**: `https://open.u-tools.cn/payments/record`

**请求方式**: `get`

**Header**: `Accept:application/json` 请求头中须添加此项，否则请求将失败

请求参数：

| 参数名       | 是否必填 | 说明                             |
| ------------ | -------- | -------------------------------- |
| plugin_id    | 是       | 插件应用 ID                      |
| out_order_id | 是       | 第三方订单号                     |
| timestamp    | 是       | 时间戳（秒），误差需小于 10 分钟 |
| sign         | 是       | 签名，与 1.3 签名方法一致        |

### 3.2 返回值

若调用成功（http 状态码 200），将返回如下信息：

```json
{
  "resource": {
    "attach": "", // 附加数据
    "body": "会员1年", // 支付内容
    "created_at": "2021-06-18 16:42:16", // 订单生成时间
    "goods_id": "6n193s7P95p9gA13786YkwQ5oxHpVW4f", // 商品ID
    "open_id": "a331127d654761ac91d086b942aae7b6", // uTools 用户 ID
    "order_id": "KMFSOZt5cMe5A0ClkdCAAyPasyXZJzP6", // uTools 订单号
    "out_order_id": "123456", // 外部订单号
    "paid_at": "", // 用户支付时间
    "pay_fee": 1, // 支付金额（分）
    "plugin_id": "FFFFFFFF",
    "status": 0, // 是否支付（0: 未支付，10: 已支付）
    "timestamp": 1624346603 // 请求发送时间戳
  },
  "sign": "dbb3d05f6e794ca3b2bc2fa7ef45c3f7cd6a3b20c601b37317863b67998d535e"
}
```

HTTP 状态码说明

| http 状态码 | 说明                           |
| ----------- | ------------------------------ |
| 200         | 成功返回                       |
| 400         | 客户端错误                     |
| 401         | 未知用户（sign 错误）          |
| 403         | 无权限访问（timestamp 已过期） |
| 404         | 未找到插件应用                 |
| 422         | 请求的参数未通过验证           |
| 500         | uTools 暂时无法提供服务        |

## 创建商品接口

此接口用于动态创建商品，主要解决不固定金额商品问题，一般为一次性使用，通过此 API 创建的商品不会出现在开发者工具的商品列表中。

#### 3.1 接口说明

**调用地址**: `https://open.u-tools.cn/goods`

**请求方式**: `post`

**Header**: `Accept:application/json` 请求头中须添加此项，否则请求将失败

请求参数：

| 参数名    | 是否必填 | 说明                             |
| --------- | -------- | -------------------------------- |
| plugin_id | 是       | 插件应用 ID                      |
| total_fee | 是       | 商品总金额（分）                 |
| title     | 是       | 商品名称                         |
| timestamp | 是       | 时间戳（秒），误差需小于 10 分钟 |
| sign      | 是       | 签名，与 1.3 签名方法一致        |

### 3.2 返回值

若调用成功（http 状态码 200），将返回如下信息：

```json
{
  "message": "ZyxrbSpWBH360pSWG0ueYI3rKSWXMcic"
}
```

> 返回内容为 goods_id，可在 [openPayment][1] 中使用

HTTP 状态码说明

| http 状态码 | 说明                           |
| ----------- | ------------------------------ |
| 200         | 成功返回                       |
| 400         | 客户端错误                     |
| 401         | 未知用户（sign 错误）          |
| 403         | 无权限访问（timestamp 已过期） |
| 404         | 未找到插件应用                 |
| 422         | 请求的参数未通过验证           |
| 500         | uTools 暂时无法提供服务        |

[1]: https://u.tools/docs/developer/api.html#openpayment-options-callback
