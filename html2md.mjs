import TurndownService from "turndown";
import turndownPluginGfm from "turndown-plugin-gfm";
import * as cheerio from "cheerio";
import fs from "fs";

const sourceURL = new URL(process.argv[3]);

const $ = cheerio.load(
  fs.readFileSync(process.argv[2]),
  { baseURI: sourceURL },
  false
);

$("a[href]").each(function () {
  let a = new URL($(this).prop("href"));
  if (
    a.origin === sourceURL.origin &&
    a.pathname === sourceURL.pathname &&
    a.search === sourceURL.search &&
    a.username === sourceURL.username &&
    a.password === sourceURL.password &&
    ["", "#"].includes($(this).text().trim())
  ) {
    $(this).replaceWith("");
  }
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
