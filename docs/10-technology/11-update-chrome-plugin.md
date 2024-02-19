---
last_update:
  date: 1708178661178
---

# 更新 Chrome 扩展

```js title="1-获得扩展数据"
JSON.stringify(
  [
    ...document
      .querySelector("extensions-manager")
      .shadowRoot.querySelector("#items-list")
      .shadowRoot.querySelectorAll("extensions-item"),
  ].map((e) => ({
    id: e.shadowRoot
      .querySelector("#extension-id")
      .innerText.replace(/^ID.*?(\w)/, "$1"),
    name: e.shadowRoot.querySelector("#name").innerText,
    version: e.shadowRoot.querySelector("#version").innerText,
  }))
);
```

```js title="2-打开 crx 搜搜"
location.href = "https://www.crxsoso.com";
```

```js title="3-检查扩展更新"
(async () => {
  const input = prompt("请输入扩展数据");
  if (typeof input === "string") {
    const data = JSON.parse(input);
    const updateList = [];
    for (let item of data) {
      try {
        const rawHtml = await fetch(
          `https://www.crxsoso.com/webstore/detail/${item.id}`
        ).then((e) => e.text());
        const $ = new DOMParser().parseFromString(rawHtml, "text/html");
        const newVersion = [
          ...[...$.querySelectorAll("#right-info > div")].filter(
            (e) => e.innerText === "版本"
          )[0].nextElementSibling.childNodes,
        ]
          .filter((e) => e instanceof Text)
          .map((e) => e.textContent)
          .join("")
          .trim();
        if (item.version != newVersion) {
          updateList.push({
            名称: item.name,
            当前版本: item.version,
            最新版本: newVersion,
            网址: `https://www.crxsoso.com/webstore/detail/${item.id}`,
          });
        }
      } catch {
        updateList.push({
          名称: item.name,
          当前版本: item.version,
          最新版本: "无法获取最新版本",
          网址: `https://www.crxsoso.com/webstore/detail/${item.id}`,
        });
      }
    }
    if (updateList.length) {
      console.log("发现以下更新");
      console.table(updateList);
      for (let item of updateList) {
        console.log(item.名称, item.网址);
      }
    } else {
      console.log("扩展都是最新版本了");
    }
  }
})();
```
