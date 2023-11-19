# 使用 Fiddler 抓包

## 下载 Fiddler

```bash
winget install "Telerik.Fiddler.Classic"
```

## 配置 Fiddler

### 脱离 Windows 安全限制

点击 `WinConfig` > `Exempt All` > `Save Changes`

### 设置 HTTPS 证书

点击 `Tools` > `Options` > `HTTPS` > `Decrypt HTTPS traffic` > `Ignore server certificate errors (unsafe)`

在弹出的窗口中，全部点击确定
