import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { categories } from "../../../lib/db/schema";
import { eq } from "drizzle-orm";

export async function GET(request: Request) {
  try {
    const key = request.headers.get("store-id") || "1";

    const categories_query = await db
      .select()
      .from(categories)
      .where(eq(categories.storeId, parseInt(key)));

    return NextResponse.json(categories_query);
  } catch (error) {
    console.log(error);
    return NextResponse.json([]);
  }
}
