import { NextResponse } from "next/server";

import { configuration, franchises } from "../../../lib/db/schema";
import { eq } from "drizzle-orm";
import { db } from "@/lib/db";

export async function GET(request: Request) {
  try {
    const key = request.headers.get("store-id") || "1";

    const query = await db
      .select()
      .from(configuration)
      .where(eq(configuration.storeId, parseInt(key)))
      .leftJoin(franchises, eq(configuration.storeId, franchises.storeId));

    const franchises_array = query.map((store) => {
      return {
        ...store.franchises,
      };
    });
    const configuration_data = query[0].configuration || {};

    const result = {
      configuration: configuration_data,
      franchises: franchises_array,
    };

    return NextResponse.json(result);
  } catch (error) {
    console.log(error);
    return NextResponse.json([
      {
        configuration: {},
        franchises: [],
      },
    ]);
  }
}
