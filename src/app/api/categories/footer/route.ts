import { db } from "@/lib/db";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";
import { categories } from "@/lib/db/schema";

export async function GET(request: Request) {
  try {
    const key = request.headers.get("store-id") || "1";

    const categories_query = await db
      .select()
      .from(categories)
      .where(eq(categories.storeId, parseInt(key)))
      .limit(4);

    return NextResponse.json(categories_query);
  } catch (error) {
    console.log(error);
    return NextResponse.json([]);
  }
}
