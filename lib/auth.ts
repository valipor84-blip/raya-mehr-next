import crypto from "node:crypto";
import { cookies } from "next/headers";

const cookieName = "raya_admin_session";
const secret = () => process.env.ADMIN_SECRET || "only-for-local-development-change-this";
const password = () => process.env.ADMIN_PASSWORD || "raya-mehr-1405";

function signature(value: string) {
  return crypto.createHmac("sha256", secret()).update(value).digest("hex");
}

export function correctPassword(input: string) {
  return input.length === password().length && crypto.timingSafeEqual(Buffer.from(input), Buffer.from(password()));
}

export async function setSession() {
  const value = "admin";
  const store = await cookies();
  store.set(cookieName, `${value}.${signature(value)}`, { httpOnly: true, sameSite: "lax", path: "/", maxAge: 60 * 60 * 8 });
}

export async function clearSession() {
  const store = await cookies();
  store.set(cookieName, "", { httpOnly: true, path: "/", maxAge: 0 });
}

export async function isAdmin() {
  const store = await cookies();
  const token = store.get(cookieName)?.value;
  return token === `admin.${signature("admin")}`;
}
