import { NextResponse } from "next/server";
import { eq, and, desc } from "drizzle-orm";
import { db } from "@/lib/db";
import { orders } from "@/lib/db/schema";

export async function GET(
  request: Request,
  { params: { client } }: { params: { client: string } }
) {
  try {
    const key = request.headers.get("store-id") || "1";

    console.log("entro a orders/client/client/recent");
    console.log(client, key);

    const orders_query = await db
      .select()
      .from(orders)
      .where(
        and(
          eq(orders.clientId, parseInt(client)),
          eq(orders.storeId, parseInt(key))
        )
      )
      .orderBy(desc(orders.createdAt))
      .limit(3);

    console.log("this is orders query", orders_query);

    return NextResponse.json(orders_query);
  } catch (error) {
    console.log(error);
    return NextResponse.json([]);
  }
}
