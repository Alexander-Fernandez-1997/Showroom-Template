import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { orders } from "../../../../../lib/db/schema";
import { and, eq } from "drizzle-orm";

export async function POST(request: Request) {
  try {
    const key = request.headers.get("store-id") || "1";
    const { slug, provider } = await request.json();

    console.log("slug", slug);
    console.log("provider", provider);

    interface UpdateOrder {
      shippingProviderName: string;
      shippingProviderType: string;
      shippingPrice: number;
    }

    const order_update_body: UpdateOrder = {
      shippingProviderName: provider.name,
      shippingProviderType: provider.type,
      shippingPrice: provider.price,
    };

    const updatedOrder = await db
      .update(orders)
      .set(order_update_body)
      .where(and(eq(orders.slug, slug), eq(orders.storeId, parseInt(key))))
      .returning();

    console.log("updatedOrder", updatedOrder);

    NextResponse.json(updatedOrder);
  } catch (error) {
    console.log("error", error);
    NextResponse.json(error);
  }
}
