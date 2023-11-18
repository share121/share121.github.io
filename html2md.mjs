import TurndownService from "turndown";
import turndownPluginGfm from "turndown-plugin-gfm";
import fs from "fs";

const turndownService = new TurndownService();
turndownService.use(turndownPluginGfm.gfm);

console.log(
  turndownService.turndown(fs.readFileSync(process.argv[2], "utf-8"))
);
