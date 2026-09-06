import { NextResponse } from "next/server";
import { isAdmin } from "../../../lib/auth";
import { readDesign,writeDesign,type SiteDesign } from "../../../lib/site-design";
export const runtime="nodejs";
export async function GET(){return NextResponse.json(await readDesign());}
export async function PUT(request:Request){if(!(await isAdmin()))return NextResponse.json({message:"دسترسی غیرمجاز است."},{status:401});const design=await request.json() as SiteDesign;if(!/^#[0-9a-fA-F]{6}$/.test(design.primaryColor)||!/^#[0-9a-fA-F]{6}$/.test(design.accentColor))return NextResponse.json({message:"رنگ واردشده معتبر نیست."},{status:400});await writeDesign(design);return NextResponse.json(design);}
