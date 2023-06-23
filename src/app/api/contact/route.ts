import { NextResponse } from "next/server";

import { configuration, stores } from "../../../lib/db/schema";
import { eq } from "drizzle-orm";
import { db } from "@/lib/db";

export async function GET(request: Request) {
  try {
    const key = request.headers.get("store-id") || "1";

    const query = await db
      .select()
      .from(configuration)
      .where(eq(configuration.storeId, parseInt(key)))
      .leftJoin(stores, eq(configuration.storeId, stores.id));

    const store_data = query[0].stores || {};
    const configuration_data = query[0].configuration || {};

    const result = {
      configuration: configuration_data,
      store: store_data,
    };

    return NextResponse.json(result);
  } catch (error) {
    console.log(error);
    return NextResponse.json([
      {
        configuration: {},
        store: {},
      },
    ]);
  }
}
