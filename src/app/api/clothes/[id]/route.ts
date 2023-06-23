// const query = `SELECT * FROM clothes WHERE id = ${id} AND store_id = ${storeId}; SELECT * FROM variants WHERE clothes_id = ${id};SELECT * FROM reviews WHERE clothes_id = ${id};`;
import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { clothes, reviews, variants } from "../../../../lib/db/schema";
import { eq } from "drizzle-orm";

export async function GET(
  request: Request,
  { params: { id } }: { params: { id: string } }
) {
  try {
    const key = request.headers.get("store-id") || "1";

    const clothes_with_variants_reviews = await db
      .select()
      .from(clothes)
      .where(eq(clothes.storeId, parseInt(key)) && eq(clothes.id, parseInt(id)))
      .leftJoin(variants, eq(variants.clothesId, clothes.id))
      .leftJoin(reviews, eq(reviews.clothesId, clothes.id));

    const clothesMap = new Map();
    clothes_with_variants_reviews.forEach((item) => {
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

        // Check if the review is not null and does not already exist
        if (
          item.reviews &&
          !clothes.reviews.some((review) => review.id === item.reviews?.id)
        ) {
          clothes.reviews.push(item.reviews);
        }
      } else {
        const clothes = {
          ...item.clothes,
          variants: item.variants ? [item.variants] : [],
          reviews: item.reviews ? [item.reviews] : [],
        };
        clothesMap.set(clothesId, clothes);
      }
    });

    const clothes_array = Array.from(clothesMap.values());

    return NextResponse.json(clothes_array[0]);
  } catch (error) {
    console.log(error);
    return NextResponse.json({});
  }
}
