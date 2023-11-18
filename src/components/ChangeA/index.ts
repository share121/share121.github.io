import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import he from "he";

async function run(element: HTMLAnchorElement) {
  try {
    const t = JSON.parse(he.decode(element.title));
    if (typeof t === "object") {
      element.removeAttribute("title");
      for (const [k, v] of Object.entries(t)) {
        console.log(k, v);
        if (k === "lanzoui") {
          fetch(
            `https://util.huoxinwl.cn/utilApi/lanzou/getDownloadUrl?path=${encodeURIComponent(
              element.href
            )}${v === null ? "" : `&pwd=${v}`}`
          )
            .then((e) => e.text())
            .then((e) => (element.href = e));
        } else {
          element.setAttribute(k, v as string);
          element[k] = v;
        }
      }
    }
  } catch {}
}

export default function MyApp() {
  if (ExecutionEnvironment.canUseDOM) {
    new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === "childList") {
          mutation.addedNodes.forEach((e) => {
            if (e instanceof HTMLAnchorElement && e.title.length > 0) run(e);
            if (e instanceof Element) {
              e.querySelectorAll("a[title]").forEach((e: HTMLAnchorElement) => {
                if (e.title.length > 0) run(e);
              });
            }
          });
        } else if (mutation.type === "attributes") {
          if (
            mutation.target instanceof HTMLAnchorElement &&
            mutation.target.title.length > 0
          ) {
            run(mutation.target);
          }
        }
      }
    }).observe(document.body, {
      childList: true,
      subtree: true,
      attributeFilter: ["title"],
    });
    if (document.readyState === "loading") {
      // 此时加载尚未完成
      document.addEventListener("DOMContentLoaded", () => {
        document
          .querySelectorAll(".markdown a[title]")
          .forEach((e: HTMLAnchorElement) => {
            if (e.title.length > 0) run(e);
          });
      });
    } else {
      // `DOMContentLoaded` 已经被触发
      document
        .querySelectorAll(".markdown a[title]")
        .forEach((e: HTMLAnchorElement) => {
          if (e.title.length > 0) run(e);
        });
    }
  }
}
