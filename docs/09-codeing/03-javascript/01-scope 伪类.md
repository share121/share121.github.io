---
last_update:
  date: 1694267720813
---

## 示例

```js
tr.querySelectorAll("> td"); // 报错
tr.querySelectorAll(":scope > td"); // 成功
```

## 用法

选择 **自身**，相当于 less 中的 `&`
