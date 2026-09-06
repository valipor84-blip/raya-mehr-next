import { promises as fs } from "node:fs";
import path from "node:path";
export type Article={id:string;slug:string;title:string;excerpt:string;content:string;image:string;date:string};
const file=path.join(process.cwd(),"data","articles.json");
const defaults:Article[]=[{id:"start-language",slug:"شروع-زبان-کودکان",title:"آموزش زبان انگلیسی کودکان را از چه سنی شروع کنیم؟",excerpt:"راهنمایی ساده برای انتخاب زمان و روش درست شروع آموزش زبان به کودک.",content:"شروع آموزش زبان برای کودکان باید با بازی، داستان، آهنگ و تجربه‌های کوتاه همراه باشد. هدف اولیه ایجاد علاقه و آشنایی گوش کودک با زبان است، نه حفظ کردن و فشار آموزشی.",image:"/images/packages.jpg",date:"۱۴۰۵/۰۶/۱۵"},{id:"game-learning",slug:"یادگیری-بازی-محور",title:"چرا یادگیری بازی‌محور برای کودکان مؤثر است؟",excerpt:"بازی چگونه به کودک کمک می‌کند زبان را با علاقه و ماندگاری بیشتر یاد بگیرد؟",content:"وقتی کودک در فضای بازی یاد می‌گیرد، زبان را یک فعالیت لذت‌بخش می‌بیند. تکرار واژه‌ها در بازی و تصویر، یادگیری را طبیعی‌تر و ماندگارتر می‌کند.",image:"/images/teacher.jpg",date:"۱۴۰۵/۰۶/۱۰"}];
export async function readArticles(){try{return JSON.parse(await fs.readFile(file,"utf8")) as Article[]}catch{await writeArticles(defaults);return defaults}}
export async function writeArticles(articles:Article[]){await fs.mkdir(path.dirname(file),{recursive:true});await fs.writeFile(file,JSON.stringify(articles,null,2),"utf8")}
