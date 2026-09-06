"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import type { Article } from "../../../lib/article-content";
const normalize=(value:string)=>decodeURIComponent(value).trim().replace(/ي/g,"ی").replace(/ك/g,"ک");
export default function ArticlePage(){const params=useParams<{slug:string}>();const [article,setArticle]=useState<Article|null|undefined>(undefined);useEffect(()=>{fetch("/api/articles").then(r=>r.json()).then((all:Article[])=>setArticle(all.find(x=>normalize(x.slug)===normalize(params.slug))||null));},[params.slug]);if(article===undefined)return <main className="orderPage">در حال بارگذاری مقاله...</main>;if(!article)return <main className="orderPage" dir="rtl"><a className="back" href="/articles">← بازگشت به مقالات</a><p>مقاله پیدا نشد.</p></main>;return <main className="orderPage" dir="rtl"><a className="back" href="/articles">← بازگشت به مقالات</a><article className="articlePage"><img src={article.image} alt={article.title}/><small>{article.date}</small><h1>{article.title}</h1><p>{article.content}</p></article></main>}
