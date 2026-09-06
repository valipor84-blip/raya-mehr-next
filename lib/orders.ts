import { promises as fs } from "node:fs";
import path from "node:path";

export type OrderStatus = "new" | "contacted" | "completed";
export type Order = { id: string; createdAt: string; status: OrderStatus; parentName: string; phone: string; childName: string; childAge: string; packageName: string; city: string; message: string };
const file = path.join(process.cwd(), "data", "orders.json");

export async function readOrders(): Promise<Order[]> {
  try { return JSON.parse(await fs.readFile(file, "utf8")); } catch { return []; }
}
async function writeOrders(orders: Order[]) { await fs.mkdir(path.dirname(file), { recursive: true }); await fs.writeFile(file, JSON.stringify(orders, null, 2), "utf8"); }
export async function createOrder(input: Omit<Order, "id" | "createdAt" | "status">) {
  const orders = await readOrders();
  const order: Order = { ...input, id: crypto.randomUUID(), createdAt: new Date().toISOString(), status: "new" };
  orders.unshift(order); await writeOrders(orders); return order;
}
export async function updateOrderStatus(id: string, status: OrderStatus) {
  const orders = await readOrders(); const index = orders.findIndex((item) => item.id === id);
  if (index < 0) return null; orders[index] = { ...orders[index], status }; await writeOrders(orders); return orders[index];
}
