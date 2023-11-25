import TurndownService from "turndown";
import turndownPluginGfm from "turndown-plugin-gfm";
import * as cheerio from "cheerio";
import fs from "fs";

const $ = cheerio.load(fs.readFileSync(process.argv[2]), null, false);

$("a[href]").each(function () {
  if ($(this).text().trim() === "#") $(this).replaceWith("");
});

{
  const temp = [...$.root().children()];
  while (temp.length) {
    const item = temp.pop();
    if (item.type === "tag" && ["code", "pre"].includes(item.name)) continue;
    if (item.type === "text") {
      item.data = item.data.replaceAll("{", "&#123;");
      item.data = item.data.replaceAll("<", "&lt;");
    }
    temp.push(...(item.children ?? []));
  }
}

const turndownService = new TurndownService({
  headingStyle: "atx",
  hr: "---",
  bulletListMarker: "-",
  codeBlockStyle: "fenced",
  linkStyle: "referenced",
}).use(turndownPluginGfm.gfm);

console.log(turndownService.turndown($.xml()).replaceAll(" ", " "));
