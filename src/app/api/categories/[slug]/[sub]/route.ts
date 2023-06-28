import { NextResponse } from "next/server";
import {
  categories,
  clothes,
  subcategories,
  variants,
} from "../../../../../lib/db/schema";
import { and, eq, sql } from "drizzle-orm";
import { db } from "@/lib/db";

export async function GET(
  request: Request,
  { params: { slug, sub } }: { params: { slug: string; sub: string } }
) {
  try {
    const key = request.headers.get("store-id") || "1";

    console.log("key", key);
    console.log("slug 19", slug);
    console.log("sub 20", sub);

    const subcategories_query = await db.execute(
      sql`select ${subcategories.id} from ${subcategories} where ${subcategories.categoryId} in (select ${categories.id} from ${categories} where ${categories.storeId} = ${key} and slug = ${slug}) AND ${subcategories.slug} = ${sub}`
    );

    const subcategories_array = subcategories_query.rows.map(
      (subcategory) => subcategory.id
    );

    console.log("subcategories_array", subcategories_array);

    const clothes_with_variants = await db
      .select()
      .from(clothes)
      .where(
        and(
          eq(clothes.storeId, parseInt(key)),
          sql`ARRAY[${subcategories_array}]::integer[] && ${clothes.subcategoriesIds}`
        )
      )
      .leftJoin(variants, eq(clothes.id, variants.clothesId))
      .execute();

    console.log("clothes_with_variants", clothes_with_variants);

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
