import { NextResponse } from "next/server";
import { categories, subcategories } from "../../../../lib/db/schema";
import { eq } from "drizzle-orm";
import { db } from "@/lib/db";

export async function GET(request: Request) {
  try {
    const key = request.headers.get("store-id") || "1";

    const stores_query = await db
      .select()
      .from(categories)
      .where(eq(categories.storeId, parseInt(key)))
      .leftJoin(subcategories, eq(categories.id, subcategories.categoryId));

    const categories_array = stores_query.map((store) => {
      return {
        ...store.categories,
      };
    });

    const subcategories_array = stores_query.map((store) => {
      return {
        ...store.subcategories,
      };
    });

    const unique_categories = categories_array.filter(
      (v, i, a) => a.findIndex((t) => t.id === v.id) === i
    );

    const unique_subcategories = subcategories_array.filter(
      (v, i, a) => a.findIndex((t) => t.id === v.id) === i
    );

    const full_categories = unique_categories.map((category) => {
      const subcategories = unique_subcategories.filter(
        (subcategory) => subcategory.categoryId === category.id
      );
      return {
        ...category,
        subcategories,
      };
    });

    return NextResponse.json(full_categories);
  } catch (error) {
    console.log(error);
    return NextResponse.json([]);
  }
}
