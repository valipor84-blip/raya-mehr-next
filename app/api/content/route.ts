import { NextResponse } from "next/server";
import { isAdmin } from "../../../lib/auth";
import { readContent, type SiteContent, writeContent } from "../../../lib/site-content";

export const runtime = "nodejs";

export async function GET() {
  return NextResponse.json(await readContent());
}

export async function PUT(request: Request) {
  if (!(await isAdmin())) return NextResponse.json({ message: "دسترسی غیرمجاز است." }, { status: 401 });
  const content = (await request.json()) as SiteContent;
  if (!content.heroTitle || !content.packages?.length) return NextResponse.json({ message: "اطلاعات ناقص است." }, { status: 400 });
  await writeContent(content);
  return NextResponse.json(content);
}
