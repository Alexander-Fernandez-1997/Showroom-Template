import { NextResponse } from "next/server";

import { stores } from "../../../../lib/db/schema";
import { eq } from "drizzle-orm";
import { db } from "@/lib/db";

export async function GET(request: Request) {
  try {
    const key = request.headers.get("store-id") || "1";

    const stores_query = await db
      .select({ logo: stores.logo })
      .from(stores)
      .where(eq(stores.id, parseInt(key)));

    const store = stores_query[0].logo || {};

    return NextResponse.json(store);
  } catch (error) {
    console.log(error);
    return NextResponse.json([]);
  }
}
