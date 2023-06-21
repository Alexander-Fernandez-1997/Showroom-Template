import { db } from "../../../../lib/db/index";
import { NextResponse } from "next/server";
import { clothes, variants } from "../../../../lib/db/schema";
import { eq, inArray } from "drizzle-orm";

export async function GET(request: Request) {
  try {
    console.log("request.headers" + request.headers);
    const key = request.headers.get("store-id") || "1";
    const clothes_query = await db
      .select()
      .from(clothes)
      .where(eq(clothes.storeId, parseInt(key)))
      .limit(10);

    const clothes_ids: number[] = clothes_query.map((clothe) => clothe.id);

    const variants_query = await db
      .select()
      .from(variants)
      .where(inArray(variants.clothesId, clothes_ids));

    const result = clothes_query.map((clothe) => {
      const variant = variants_query.find(
        (variant) => variant.clothesId === clothe.id
      );
      return { ...clothe, variants: variant };
    });

    return NextResponse.json(result);
  } catch (error) {
    console.log(error);
    return NextResponse.json([]);
  }
}
