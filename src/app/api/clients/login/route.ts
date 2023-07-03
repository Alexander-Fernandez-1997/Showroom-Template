import { NextResponse } from "next/server";
import { clients } from "@/lib/db/schema";
import { and, eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { isSamePass } from "utils/bcrypt";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    const key = request.headers.get("store-id") || "1";

    const client_query = await db
      .select()
      .from(clients)
      .where(and(eq(clients.storeId, parseInt(key)), eq(clients.email, email)))
      .limit(1);

    if (client_query.length === 0) {
      return NextResponse.json(null);
    }
    const adminPassword = client_query[0].password;
    // console.log("adminPassword", adminPassword);
    const isPasswordValid = isSamePass(password, adminPassword);
    // console.log("isPasswordValid", isPasswordValid);
    if (!isPasswordValid) {
      return NextResponse.json(null);
    }

    return NextResponse.json(client_query[0]);
  } catch (error) {
    return NextResponse.json(null);
  }
}
