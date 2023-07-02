import { db } from "@/lib/db";
import { orders } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";
import { fetchUrl } from "utils/fetchUrl";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function POST(
  request: Request,
  { params: { slug } }: { params: { slug: string } }
) {
  try {
    const order = await db
      .select({
        total: orders.total,
      })
      .from(orders)
      .where(eq(orders.slug, slug))
      .limit(1);

    const { total } = order[0];
    console.log("stripe total", total);
    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: "ars",
            product_data: {
              name: "Compra total",
            },
            unit_amount: total * 100,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${fetchUrl}/order/completed`,
      cancel_url: `${fetchUrl}/?canceled=true`,
    });

    return NextResponse.redirect(session.url, { status: 303 });
  } catch (err) {
    return NextResponse.json(err.message, { status: 400 });
  }
}
