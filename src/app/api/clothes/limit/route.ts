import { db } from "../../../../lib/db/index";
import { NextResponse } from "next/server";
import { clothes, variants } from "../../../../lib/db/schema";
import { eq, inArray } from "drizzle-orm";

export async function GET(request: Request) {
  try {
    const key = request.headers.get("store-id") || "1";

    const clothes_with_variants = await db
      .select()
      .from(clothes)
      .where(eq(clothes.storeId, parseInt(key)))
      .limit(10)
      .leftJoin(variants, eq(clothes.id, variants.clothesId));

    return NextResponse.json(clothes_with_variants);
  } catch (error) {
    console.log(error);
    return NextResponse.json([]);
  }
}
