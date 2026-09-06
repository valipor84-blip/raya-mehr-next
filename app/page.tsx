"use client";

import { Baby, BookOpen, Gamepad2, GraduationCap, HeartHandshake, Instagram, Layers, Menu, MessageCircle, Phone, Sparkles, Star, Trophy, X } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { defaultContent, type SiteContent } from "../lib/site-types";
import { defaultDesign, type SiteDesign } from "../lib/design-types";
import type { Testimonial } from "../lib/testimonials";

const nav = [["خانه", "#home"], ["دوره‌ها و پکیج‌ها", "#packages"], ["درباره مدرس", "#teacher"], ["سوالات متداول", "#faq"], ["تماس با ما", "#contact"]];
const levels: [LucideIcon, string, string, string][] = [
  [Baby, "پکیج استارتر", "۲ تا ۴ سال", "آشنایی نرم و بازی‌محور با صداها و اولین کلمات انگلیسی."],
  [Sparkles, "پکیج مقدماتی", "۴ تا ۶ سال", "شناخت حروف، رنگ‌ها و واژه‌های روزمره با تصویر و بازی."],
  [BookOpen, "پکیج پایه", "۴ تا ۶ سال", "تثبیت واژگان پایه و ساخت جمله‌های کوتاه و کاربردی."],
  [Layers, "پکیج پیشرفته", "۶ تا ۸ سال", "خواندن و نوشتن ساده همراه با مکالمه‌های موقعیتی."],
  [Trophy, "پکیج فوق‌پیشرفته", "۸ تا ۱۰ سال", "گسترش واژگان، درک مطلب و گفت‌وگوهای طولانی‌تر."],
  [GraduationCap, "پکیج انگلیش مستری", "۱۰ تا ۱۲ سال", "تسلط بر چهار مهارت و آماده‌شدن برای مسیر دوزبانگی."],
];
const benefits: [LucideIcon, string, string][] = [[Baby,"آموزش متناسب با سن کودک","هر پکیج بر اساس توان ذهنی و علاقه‌های همان بازه سنی طراحی شده است."],[Gamepad2,"یادگیری بازی‌محور و لذت‌بخش","کودک بی‌آنکه احساس درس‌خواندن کند، زبان را در بازی تجربه می‌کند."],[Layers,"پکیج‌های کاربردی و مرحله‌به‌مرحله","مسیر مشخص از اولین کلمه تا مکالمه روان، بدون سرگردانی والدین."],[HeartHandshake,"همراهی و راهنمایی مدرس","در تمام مسیر پاسخ سوال‌های شما داده می‌شود و راهنمایی می‌شوید."]];
const faqs = [["از چه سنی آموزش زبان را شروع کنیم؟","از حدود ۲ سالگی می‌توان به شکل بازی‌محور و شنیداری شروع کرد. در این سن هدف، آشنایی گوش کودک با صداها و لذت بردن از زبان است، نه آموزش رسمی."],["کدام پکیج برای فرزند من مناسب‌تر است؟","پکیج‌ها بر اساس بازه سنی و میزان آشنایی قبلی کودک انتخاب می‌شوند. اگر مطمئن نیستید، کافی است سن و سابقه یادگیری فرزندتان را برای ما بنویسید تا مناسب‌ترین گزینه پیشنهاد شود."],["پکیج‌ها چگونه ارسال یا ارائه می‌شوند؟","پکیج‌ها به‌صورت بسته فیزیکی شامل کارت‌ها و ابزارهای آموزشی، همراه با راهنمای استفاده، به سراسر کشور ارسال می‌شوند."],["آیا والدین در طول مسیر راهنمایی می‌شوند؟","بله. برای هر پکیج راهنمای گام‌به‌گام والدین ارائه می‌شود و در طول مسیر می‌توانید سوال‌های خود را از مدرس بپرسید."]];

function Button({ children, href="#packages", gold=false }: {children: React.ReactNode; href?: string; gold?: boolean}) { return <a className={`button ${gold ? "gold" : ""}`} href={href}>{children}</a>; }
function Title({ kicker, title, text }: {kicker?: string; title: string; text?: string}) { return <div className="title">{kicker && <small>{kicker}</small>}<h2>{title}</h2>{text && <p>{text}</p>}</div>; }

export default function Home() {
  const [open,setOpen]=useState(false);
  const [content, setContent] = useState<SiteContent>(defaultContent);
  const [design,setDesign]=useState<SiteDesign>(defaultDesign);
  const [testimonials,setTestimonials]=useState<Testimonial[]>([]);
  useEffect(() => { fetch("/api/content").then((r) => r.ok ? r.json() : null).then((data) => data && setContent(data)).catch(() => {});fetch("/api/design").then(r=>r.ok?r.json():null).then(d=>d&&setDesign(d)).catch(()=>{});fetch("/api/testimonials").then(r=>r.ok?r.json():[]).then(setTestimonials).catch(()=>{}); }, []);
  const section=(key:keyof SiteDesign["sections"])=>({display:design.sections[key]?.visible===false?"none":undefined,order:design.sections[key]?.order});
  return <main className="siteMain">
    <header><a className="brand" href="#home"><img src="/images/logo.jpg" alt="لوگوی رایامهر"/><span><b>رایامهر</b><em>تربیت کودک دوزبانه</em></span></a><nav>{nav.map(([n,h])=><a key={h} href={h}>{n}</a>)}</nav><Button>مشاهده پکیج‌ها</Button><button className="menu" onClick={()=>setOpen(!open)} aria-label="منو">{open?<X/>:<Menu/>}</button>{open&&<div className="mobile">{nav.map(([n,h])=><a onClick={()=>setOpen(false)} key={h} href={h}>{n}</a>)}</div>}</header>
    <section className="hero" id="home"><div className="orb one"/><div className="orb two"/><div className="heroCopy"><span className="chip"><Star/>ویژه کودکان ۲ تا ۱۲ سال</span><h1>{content.heroTitle} <strong>{content.heroHighlight}</strong> شما</h1><p>{content.heroDescription}</p><div className="actions"><Button>انتخاب پکیج مناسب</Button><Button href="#teacher">آشنایی با مدرس</Button></div></div><div className="portrait"><img src={content.teacherImage} alt="مدرس زبان انگلیسی کودکان رایامهر"/><b>ABC</b><span><MessageCircle/> Hello! Let’s learn</span></div></section>
    <section className="section" id="packages"><Title kicker="مسیر یادگیری" title="مسیر یادگیری متناسب با سن کودک" text="کافی است سن فرزندتان را پیدا کنید؛ پکیج مناسب همان‌جاست."/><div className="grid packages">{content.packages.map((item,index)=>{const I=levels[index]?.[0] ?? Baby;return <article key={item.name} className="card"><div className="cardImg"><img src={item.image || content.packageImage} alt={`تصویر ${item.name}`}/><b>{item.age}</b></div><I/><h3>{item.name}</h3><p>{item.description}</p><Button href={`/order?package=${encodeURIComponent(item.name)}`}>مشاهده و سفارش</Button></article>})}</div></section>
    <section className="soft section"><Title kicker="مزیت‌ها" title="چرا رایامهر؟"/><div className="grid benefits">{benefits.map(([Icon,title,text])=>{const I=Icon;return <article key={title}><i><I/></i><h3>{title}</h3><p>{text}</p></article>})}</div></section>
    <section className="section teacher" id="teacher"><div className="teacherPic"><img src={content.teacherImage} alt="مدرس رایامهر"/></div><div><small>درباره مدرس</small><h2>{content.teacherTitle}</h2><p>{content.teacherDescription}</p><div className="facts"><div><b>طراحی مسیر آموزشی</b><span>از اولین کلمه تا مکالمه روان، مرحله‌به‌مرحله</span></div><div><b>تمرکز بر کودکان ۲ تا ۱۲ سال</b><span>محتوای متناسب با هر بازه سنی</span></div></div><Button href="#contact">بیشتر با من آشنا شوید</Button></div></section>
    <section className="soft section"><Title kicker="پکیج‌های منتخب" title="محبوب‌ترین پکیج‌های رایامهر" text="بسته‌های فیزیکی کامل، همراه با راهنمای والدین و پشتیبانی مدرس."/><div className="grid featured">{content.packages.slice(0,4).map((item)=><article key={item.name} className="feature"><img src={item.image || content.packageImage} alt={`بسته آموزشی ${item.name}`}/><b>{item.age}</b><h3>{item.name}</h3><p>{item.description}</p><strong>استعلام و ثبت سفارش</strong><Button href={`/order?package=${encodeURIComponent(item.name)}`}>مشاهده و سفارش</Button></article>)}</div></section>
    <section className="cta"><Star/><h2>آماده‌اید مسیر دوزبانه شدن کودک‌تان را شروع کنید؟</h2><Button href="/order" gold>انتخاب پکیج مناسب کودک من</Button></section>
    <section className="section faq" id="faq"><Title kicker="سوالات متداول" title="پرسش‌های همیشگی والدین"/>{faqs.map(([q,a])=><details key={q as string}><summary>{q}</summary><p>{a}</p></details>)}</section>
    <footer id="contact"><div><a className="brand" href="#home"><img src="/images/logo.jpg" alt="لوگوی رایامهر"/><span><b>رایامهر</b><em>تربیت کودک دوزبانه</em></span></a><p>پکیج‌های آموزش زبان انگلیسی کودکان، متناسب با سن و مسیر یادگیری فرزند شما.</p></div><div><b>لینک‌های مهم</b>{nav.map(([n,h])=><a key={h} href={h}>{n}</a>)}</div><div><b>راه‌های ارتباطی</b><a href={`tel:+${content.phone}`}><Phone/> {content.phone}</a><a href={`https://instagram.com/${content.instagram}`}><Instagram/> اینستاگرام رایامهر</a><a href={`https://wa.me/${content.whatsapp}`}><MessageCircle/> واتساپ</a></div></footer><div className="copyright">© {new Date().getFullYear()} رایامهر | تمامی حقوق محفوظ است.</div>
  </main>;
}
