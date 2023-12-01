import { visit } from "unist-util-visit";

export default () => {
  const transformer = async (ast) => {
    visit(ast, "element", (node) => {
      if (node.tagName === "a" && (node.properties?.title ?? "").length > 0) {
        try {
          const props = JSON.parse(node.properties.title);
          if (typeof props === "object") {
            node.properties.title = "";
            for (const [k, v] of Object.entries(props)) {
              node.properties[k] = v;
            }
          }
        } catch {}
      }
    });
  };
  return transformer;
};
