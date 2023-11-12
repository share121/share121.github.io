const visit = require("unist-util-visit");

const plugin = () => {
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

module.exports = plugin;
