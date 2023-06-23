import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { clothes, variants } from "../../../../lib/db/schema";
import { and, eq, ilike } from "drizzle-orm";

export async function GET(
  request: Request,
  { params: { term } }: { params: { term: string } }
) {
  try {
    const key = request.headers.get("store-id") || "1";

    console.log("key", key);
    console.log("term", term);

    const clothes_with_variants = await db
      .select()
      .from(clothes)
      .where(
        and(
          eq(clothes.storeId, parseInt(key)),
          ilike(clothes.name, `%${term}%`)
        )
      )
      .leftJoin(variants, eq(variants.clothesId, clothes.id));

    console.log("clothes_with_variants", clothes_with_variants);
    const clothesMap = new Map();
    clothes_with_variants.forEach((item) => {
      const clothesId = item.clothes.id;

      if (clothesMap.has(clothesId)) {
        const clothes = clothesMap.get(clothesId);

        // Check if the variant is not null and does not already exist
        if (
          item.variants &&
          !clothes.variants.some((variant) => variant.id === item.variants?.id)
        ) {
          clothes.variants.push(item.variants);
        }
      } else {
        const clothes = {
          ...item.clothes,
          variants: item.variants ? [item.variants] : [],
        };
        clothesMap.set(clothesId, clothes);
      }
    });

    const clothes_array = Array.from(clothesMap.values());

    return NextResponse.json(clothes_array);
  } catch (error) {
    console.log(error);
    return NextResponse.json({});
  }
}
