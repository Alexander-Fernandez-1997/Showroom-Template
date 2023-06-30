import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { and, eq } from "drizzle-orm";
import { orders } from "@/lib/db/schema";
import { getMercadoId } from "utils/mercadoPago";

export async function POST(request: Request) {
  try {
    const key = request.headers.get("store-id") || "1";
    const { slug } = await request.json();

    console.log("slug", slug);
    console.log("key", key);

    const order = await db
      .select({
        id: orders.id,
        total: orders.total,
      })
      .from(orders)
      .where(and(eq(orders.slug, slug), eq(orders.storeId, parseInt(key))))
      .limit(1);

    console.log("order", order);

    const { id, total } = order[0];

    console.log("id", id);
    console.log("total", total);

    const items = [
      {
        id: id,
        title: "Compra en tienda",
        quantity: 1,
        currency_id: "ARS",
        unit_price: total,
      },
    ];

    const preferenceId = await getMercadoId(items);

    return NextResponse.json({ preferenceId });
  } catch (error) {
    console.log(error);
    return NextResponse.json(error.message, { status: 400 });
  }
}
