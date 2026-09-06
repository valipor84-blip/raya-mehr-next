import { NextResponse } from "next/server";
import { clearSession, correctPassword, isAdmin, setSession } from "../../../lib/auth";

export async function GET() {
  return NextResponse.json({ authenticated: await isAdmin() });
}

export async function POST(request: Request) {
  const { password } = await request.json();
  if (typeof password !== "string" || !correctPassword(password)) return NextResponse.json({ message: "رمز عبور درست نیست." }, { status: 401 });
  await setSession();
  return NextResponse.json({ authenticated: true });
}

export async function DELETE() {
  await clearSession();
  return NextResponse.json({ authenticated: false });
}
