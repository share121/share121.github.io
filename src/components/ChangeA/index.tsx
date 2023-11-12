import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import he from "he";

export default function MyApp() {
  if (ExecutionEnvironment.canUseDOM) {
    new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === "childList") {
          const nodeArr = Array.from(mutation.addedNodes);
          while (nodeArr.length) {
            const e = nodeArr.pop();
            if (e instanceof HTMLAnchorElement && e.title.length > 0) {
              try {
                const t = JSON.parse(he.decode(e.title));
                if (typeof t === "object") {
                  e.removeAttribute("title");
                  for (const [k, v] of Object.entries(t)) {
                    e.setAttribute(k, v as string);
                    e[k] = v;
                  }
                }
              } catch {}
            }
            nodeArr.push(...Array.from(e.childNodes));
          }
        } else if (mutation.type === "attributes") {
          if (
            mutation.target instanceof HTMLAnchorElement &&
            mutation.target.title.length > 0
          ) {
            try {
              const t = JSON.parse(he.decode(mutation.target.title));
              if (typeof t === "object") {
                mutation.target.removeAttribute("title");
                for (const [k, v] of Object.entries(t)) {
                  mutation.target.setAttribute(k, v as string);
                  mutation.target[k] = v;
                }
              }
            } catch {}
          }
        }
      }
    }).observe(document.body, {
      childList: true,
      subtree: true,
      attributeFilter: ["title"],
    });
    window.addEventListener("load", () => {
      document
        .querySelectorAll(".markdown a")
        .forEach((e: HTMLAnchorElement) => {
          if (e.title.length > 0) {
            try {
              const t = JSON.parse(he.decode(e.title));
              if (typeof t === "object") {
                e.removeAttribute("title");
                for (const [k, v] of Object.entries(t)) {
                  e.setAttribute(k, v as string);
                  e[k] = v;
                }
              }
            } catch {}
          }
        });
    });
  }
}
