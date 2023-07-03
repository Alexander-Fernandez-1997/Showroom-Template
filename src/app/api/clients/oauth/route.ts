import { NextResponse } from "next/server";
import { clients } from "@/lib/db/schema";
import { and, eq } from "drizzle-orm";
import { db } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    const key = request.headers.get("store-id") || "1";

    console.log("oauth pathhh");
    console.log("key", key);
    console.log("email", email);

    const client_query = await db
      .select()
      .from(clients)
      .where(and(eq(clients.storeId, parseInt(key)), eq(clients.email, email)))
      .limit(1);

    console.log("client_query oauth", client_query[0]);

    if (client_query.length === 0) {
      // create a new client
      const pass = Math.random().toString(36).slice(-8);
      const newClient = await db
        .insert(clients)
        .values({
          storeId: parseInt(key),
          email: email,
          password: pass,
        })
        .returning();

      console.log("newClient", newClient[0]);

      return NextResponse.json(newClient[0]);
    }

    return NextResponse.json(client_query[0]);
  } catch (error) {
    return NextResponse.json(null);
  }
}
