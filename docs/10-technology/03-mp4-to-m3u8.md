---
last_update:
  date: 1699758327723
---

# 如何把 mp4 转为 m3u8

```bash
ffmpeg -i "input.mp4" -c copy -hls_time 20 -hls_list_size 0 "output.m3u8"
```

- `-i`：指定输入文件；
- `-hls_time`：指定切片时长；
- 最后一个参数：指定输出文件名。

:::tip

其他参数不要乱调。

:::
