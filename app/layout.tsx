import type { Metadata } from "next";
import "./globals.css";
import { readDesign } from "../lib/site-design";

export const metadata: Metadata = {
  title: "رایامهر | آموزش زبان انگلیسی کودکان",
  description: "پکیج‌های آموزش زبان انگلیسی کودکان ۲ تا ۱۲ سال؛ مسیری شیرین برای تربیت کودک دوزبانه.",
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const d=await readDesign();
  const vars={"--site-primary":d.primaryColor,"--site-accent":d.accentColor,"--site-bg":d.backgroundColor,"--site-heading":d.headingColor,"--site-text":d.textColor,"--site-font-size":`${d.fontSize}px`,"--site-button-radius":`${d.buttonRadius}px`,"--site-card-radius":`${d.cardRadius}px`} as React.CSSProperties;
  return <html lang="fa" dir="rtl"><body style={vars}>{children}</body></html>;
}
