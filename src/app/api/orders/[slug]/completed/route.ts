import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { and, eq } from "drizzle-orm";
import { address, orders, ordersItems } from "@/lib/db/schema";

export async function GET(
  request: Request,
  { params: { slug } }: { params: { slug: string } }
) {
  try {
    const key = request.headers.get("store-id") || "1";

    console.log("key", key);
    console.log("slug", slug);

    const update_order = await db
      .update(orders)
      .set({
        status: "to ship",
        paymentStatus: "paid",
      })
      .where(and(eq(orders.storeId, parseInt(key)), eq(orders.slug, slug)))
      .returning();

    const order = update_order[0];

    const order_items_query = await db
      .select()
      .from(ordersItems)
      .where(eq(ordersItems.orderId, order.id));

    const order_direction = await db
      .select()
      .from(address)
      .where(eq(address.id, order.shippingAddressId));

    // insert order items into order

    const order_result = {
      ...order,
      order_items: order_items_query,
      address: order_direction[0],
    };

    return NextResponse.json(order_result);
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      error: error.message,
    });
  }
}
