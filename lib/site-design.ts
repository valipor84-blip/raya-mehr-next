import { promises as fs } from "node:fs";
import path from "node:path";
import { defaultDesign, type SiteDesign } from "./design-types";
export { defaultDesign, type SiteDesign } from "./design-types";
const filePath=path.join(process.cwd(),"data","site-design.json");
export async function readDesign():Promise<SiteDesign>{try{const saved=JSON.parse(await fs.readFile(filePath,"utf8"));return {...defaultDesign,...saved,sections:{...defaultDesign.sections,...saved.sections}};}catch{await writeDesign(defaultDesign);return defaultDesign;}}
export async function writeDesign(design:SiteDesign){await fs.mkdir(path.dirname(filePath),{recursive:true});await fs.writeFile(filePath,JSON.stringify(design,null,2),"utf8");}
