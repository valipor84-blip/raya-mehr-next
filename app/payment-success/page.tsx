"use client";
import { useEffect, useState } from "react";
export default function PaymentSuccess(){const [packageName,setPackageName]=useState("");useEffect(()=>setPackageName(new URLSearchParams(location.search).get("package")||"پکیج انتخابی"),[]);return <main className="orderPage" dir="rtl"><section className="orderBox success"><small>رایامهر</small><h1>درخواست شما با موفقیت ثبت شد</h1><p>درخواست «{packageName}» دریافت شد. برای هماهنگی و ارسال لینک پرداخت، به‌زودی با شما تماس می‌گیریم.</p><a className="button" href="/">بازگشت به صفحه اصلی</a></section></main>}
