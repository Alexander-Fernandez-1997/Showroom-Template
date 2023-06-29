import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { address, orders, ordersItems } from "../../../../lib/db/schema";
import { and, eq } from "drizzle-orm";

export async function POST(request: Request) {
  try {
    const key = request.headers.get("store-id") || "1";
    const { shipping_address, billing_adress, items, provider, money, client } =
      await request.json();

    console.log("shipping_address", shipping_address);
    console.log("billing_adress", billing_adress);
    console.log("items", items);
    console.log("provider", provider);
    console.log("money", money);
    console.log("client", client);

    interface Dire {
      address: string;
      apartment: string;
      city: string;
      state: string;
      country: string;
      cp: string;
      store_id: number;
      client_id?: number; // optional
    }

    const checkAddress = async (dire: Dire) => {
      // 1st check if address exists in db for store id else create new address
      const checkedAddress = await db
        .select()
        .from(address)
        .where(
          and(
            eq(address.street, dire.address),
            eq(address.apartment, dire.apartment),
            eq(address.city, dire.city),
            eq(address.state, dire.state),
            eq(address.country, dire.country),
            eq(address.zipcode, dire.cp),
            eq(address.storeId, parseInt(key))
          )
        );
      if (checkedAddress.length > 0) {
        return checkedAddress[0].id;
      }
      const newAddress = await db
        .insert(address)
        .values({
          street: dire.address,
          apartment: dire.apartment,
          city: dire.city,
          state: dire.state,
          country: dire.country,
          zipcode: dire.cp,
          storeId: parseInt(key),
        })
        .returning();

      return newAddress[0].id;
    };

    const shippingAddressId = await checkAddress(shipping_address);
    console.log("40", shippingAddressId);

    const billingAddressId = await checkAddress(billing_adress);
    console.log("41", billingAddressId);

    const order_body = {
      storeId: parseInt(key),
      clientId: client ? client : null,
      email: shipping_address.email,
      firstName: shipping_address.name,
      lastName: shipping_address.lastname,
      phone: shipping_address.phone,
      company: shipping_address.company,
      shippingAddressId: shippingAddressId,
      billingAddressId: billingAddressId,
      status: "pending",
      shippingProviderName: provider.name,
      shippingProviderType: provider.type,
      shippingPrice: provider.price,
      discounts: 0,
      taxes: 0,
      total: money,
      currency: "ARS",
      slug: "",
    };

    const newOrder = await db.insert(orders).values(order_body).returning();

    console.log("newOrder", newOrder);

    const orderId = newOrder[0].id;

    const newOrderItems = items.map(async (item) => {
      const item_body = {
        orderId: orderId,
        name: item.name,
        variantId: item.id,
        img: item.img,
        quantity: item.quantity,
        price: item.price,
        currency: order_body.currency,
      };
      const newItem = await db
        .insert(ordersItems)
        .values(item_body)
        .returning();
      return newItem;
    });

    await Promise.all(newOrderItems);

    const slug = `${orderId}-${Math.random().toString(36).substr(2, 16)}`;

    const updatedOrder = await db
      .update(orders)
      .set({ slug: slug })
      .where(eq(orders.id, orderId))
      .returning();

    //if updatedOrder status is 200 then return slug

    console.log("updatedOrder", updatedOrder);

    if (updatedOrder.length > 0) {
      return NextResponse.json({ slug: slug });
    } else {
      return NextResponse.json(
        { error: "No se pudo crear la orden" },
        { status: 400 }
      );
    }
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
