import { promises as fs } from "node:fs";
import path from "node:path";
export type Testimonial={id:string;name:string;relation:string;text:string;rating:number};
const filePath=path.join(process.cwd(),"data","testimonials.json");
const defaults:Testimonial[]=[{id:"1",name:"مادر آریا",relation:"پکیج استارتر",text:"کودکم با علاقه بازی می‌کند و اولین کلمات انگلیسی را با شادی تکرار می‌کند.",rating:5},{id:"2",name:"مادر باران",relation:"پکیج مقدماتی",text:"راهنمای مرحله‌به‌مرحله برای ما خیلی کاربردی بود و می‌دانستیم هر روز چه کار کنیم.",rating:5},{id:"3",name:"مادر یسنا",relation:"پکیج پایه",text:"کیفیت کارت‌ها و فعالیت‌ها عالی است؛ یادگیری برای فرزندم تبدیل به بازی شده است.",rating:5}];
export async function readTestimonials():Promise<Testimonial[]>{try{return JSON.parse(await fs.readFile(filePath,"utf8"));}catch{await writeTestimonials(defaults);return defaults;}}
export async function writeTestimonials(items:Testimonial[]){await fs.mkdir(path.dirname(filePath),{recursive:true});await fs.writeFile(filePath,JSON.stringify(items,null,2),"utf8");}
