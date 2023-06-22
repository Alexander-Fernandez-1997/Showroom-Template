import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { clothes, variants } from "../../../../lib/db/schema";
import { eq } from "drizzle-orm";

export async function GET(request: Request) {
  try {
    const key = request.headers.get("store-id") || "1";

    const clothes_with_variants = await db
      .select()
      .from(clothes)
      .where(eq(clothes.storeId, parseInt(key)))
      .limit(10)
      .leftJoin(variants, eq(clothes.id, variants.clothesId));

    const clothes_array = clothes_with_variants.map((clothes) => {
      return {
        ...clothes.clothes,
        variants: clothes.variants,
      };
    });

    return NextResponse.json(clothes_array);
  } catch (error) {
    console.log(error);
    return NextResponse.json([]);
  }
}
