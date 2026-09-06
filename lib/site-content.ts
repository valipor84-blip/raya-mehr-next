import { promises as fs } from "node:fs";
import path from "node:path";
import { defaultContent, type SiteContent } from "./site-types";

export { defaultContent, type SiteContent } from "./site-types";

const dataPath = path.join(process.cwd(), "data", "site-content.json");

export async function readContent(): Promise<SiteContent> {
  try {
    return { ...defaultContent, ...JSON.parse(await fs.readFile(dataPath, "utf8")) };
  } catch {
    await writeContent(defaultContent);
    return defaultContent;
  }
}

export async function writeContent(content: SiteContent) {
  await fs.mkdir(path.dirname(dataPath), { recursive: true });
  await fs.writeFile(dataPath, JSON.stringify(content, null, 2), "utf8");
}
