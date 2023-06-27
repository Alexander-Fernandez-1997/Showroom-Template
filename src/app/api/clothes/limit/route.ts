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

    const clothes_array = clothes_with_variants.reduce((acc: any, clothes) => {
      // Check if the clothes already exist in the accumulator
      const existingClothes: any = acc.find(
        (c: any) => c.id === clothes.clothes.id
      );

      if (existingClothes) {
        // If clothes already exist, add the variant to its variants array
        existingClothes.variants.push(clothes.variants);
      } else {
        // If clothes don't exist, create a new entry with variants as an array
        const newClothes: any = {
          ...clothes.clothes,
          variants: [clothes.variants],
        };
        acc.push(newClothes);
      }

      return acc;
    }, []);

    return NextResponse.json(clothes_array);
  } catch (error) {
    console.log(error);
    return NextResponse.json([]);
  }
}
