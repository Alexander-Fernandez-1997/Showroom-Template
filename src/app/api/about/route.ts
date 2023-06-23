import { NextResponse } from "next/server";

import { configuration, notes } from "../../../lib/db/schema";
import { eq } from "drizzle-orm";
import { db } from "@/lib/db";

export async function GET(request: Request) {
  try {
    const key = request.headers.get("store-id") || "1";

    const query = await db
      .select()
      .from(configuration)
      .where(eq(configuration.storeId, parseInt(key)))
      .leftJoin(notes, eq(configuration.storeId, notes.storeId));

    const notes_array = query.map((store) => {
      return {
        ...store.notes,
      };
    });
    const configuration_data = query[0].configuration || {};

    const result = {
      configuration: configuration_data,
      notes: notes_array,
    };

    // console.log(result);

    return NextResponse.json(result);
  } catch (error) {
    console.log(error);
    return NextResponse.json([
      {
        configuration: {},
        notes: [],
      },
    ]);
  }
}
