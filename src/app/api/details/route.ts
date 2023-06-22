import { NextResponse } from "next/server";

import { categories, stores, subcategories } from "../../../lib/db/schema";
import { eq } from "drizzle-orm";
import { db } from "@/lib/db";

export async function GET(request: Request) {
  try {
    const key = request.headers.get("store-id") || "1";

    const stores_query = await db
      .select()
      .from(stores)
      .where(eq(stores.id, parseInt(key)))
      .leftJoin(categories, eq(stores.id, categories.storeId))
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

    const store = stores_query[0].stores || {};

    const result = {
      ...store,
      categories: categories_array,
      subcategories: subcategories_array,
    };

    return NextResponse.json(result);
  } catch (error) {
    console.log(error);
    return NextResponse.json([]);
  }
}
