import { promises as fs } from "node:fs";
import path from "node:path";
import { NextResponse } from "next/server";
import { isAdmin } from "../../../lib/auth";

export const runtime = "nodejs";
const allowed = new Set(["image/jpeg", "image/png", "image/webp"]);
export async function POST(request: Request) {
  if (!(await isAdmin())) return NextResponse.json({ message: "دسترسی غیرمجاز است." }, { status: 401 });
  const form = await request.formData(); const file = form.get("file"); const kind = form.get("kind");
  if (!(file instanceof File) || !allowed.has(file.type) || !["teacher", "packages"].includes(String(kind))) return NextResponse.json({ message: "فقط تصویر JPG، PNG یا WebP قابل قبول است." }, { status: 400 });
  if (file.size > 5 * 1024 * 1024) return NextResponse.json({ message: "حجم تصویر باید کمتر از ۵ مگابایت باشد." }, { status: 400 });
  const extension = file.type === "image/png" ? "png" : file.type === "image/webp" ? "webp" : "jpg";
  const filename = `${kind}-${Date.now()}.${extension}`; const directory = path.join(process.cwd(), "public", "uploads");
  await fs.mkdir(directory, { recursive: true }); await fs.writeFile(path.join(directory, filename), Buffer.from(await file.arrayBuffer()));
  return NextResponse.json({ path: `/uploads/${filename}` });
}
