import { NextApiRequest, NextApiResponse } from "next";
import conn from "../../../lib/db";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const storeId = req.headers["store-id"];
    const { shipping_address, billing_adress, items, provider, money, client } =
      req.body;

    interface Address {
      street: string;
      apartment: string;
      city: string;
      state: string;
      country: string;
      zipcode: string;
      store_id: number;
      client_id?: number; // optional
    }

    const checkAddress = async (address: Address) => {
      // 1st check if address exists in db for store id else create new address
      const checkedAddress = await conn.query(
        `SELECT * FROM shipping_addresses WHERE street = '${address.street}' AND apartment = '${address.apartment}' AND city = '${shipping_address.city}' AND state = '${address.state}' AND country = '${address.country}' AND zipcode = '${address.zipcode}' AND store_id = ${storeId}`
      );
      if (checkedAddress.rows.length === 0) {
        const newAddress = await conn.query(
          `INSERT INTO shipping_addresses (street, apartment, city, state, country, zipcode, store_id) VALUES ('${address.street}', '${address.apartment}', '${address.city}', '${address.state}', '${address.country}', '${address.zipcode}', ${storeId}) RETURNING *`
        );
        return newAddress.rows[0].id;
      } else {
        return checkedAddress.rows[0].id;
      }
    };

    const shippingAddressId = await checkAddress(shipping_address);
    const billingAddressId = await checkAddress(billing_adress);

    // Items is an array of objects  that looks like this:
    // `CREATE TABLE IF NOT EXISTS orders_items (
    //     id SERIAL PRIMARY KEY,
    //     order_id INTEGER NOT NULL,
    //     name VARCHAR(255) NOT NULL,
    //     variant_id INTEGER NOT NULL,
    //     img VARCHAR(255) NOT NULL,
    //     quantity INTEGER NOT NULL,
    //     price INTEGER NOT NULL,
    //     currency VARCHAR(255) NOT NULL,
    //     created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    //     updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    //     FOREIGN KEY (order_id) REFERENCES orders(id),
    //     FOREIGN KEY (variant_id) REFERENCES variants(id)
    //   );`

    const Order = {
      store_id: storeId,
      client_id: client ? client : null,
      email: shipping_address.email,
      first_name: shipping_address.first_name,
      last_name: shipping_address.last_name,
      phone: shipping_address.phone,
      company: shipping_address.company,
      shipping_address_id: shippingAddressId,
      billing_address_id: billingAddressId,
      status: "pending",
      shipping_provider_name: provider.name,
      shipping_provider_type: provider.type,
      shipping_price: provider.price,
      discounts: 0,
      taxes: 0,
      total: money.total,
      currency: money.currency,
      created_at: new Date(),
      updated_at: new Date(),
      slug: "",
    };

    const newOrder = await conn.query(
      `INSERT INTO orders (store_id, client_id, email, first_name, last_name, phone, company, shipping_address_id, billing_address_id, status, shipping_provider_name, shipping_provider_type, shipping_price, discounts, taxes, total, currency, created_at, updated_at, slug) VALUES (${Order.store_id}, ${Order.client_id}, '${Order.email}', '${Order.first_name}', '${Order.last_name}', '${Order.phone}', '${Order.company}', ${Order.shipping_address_id}, ${Order.billing_address_id}, '${Order.status}', '${Order.shipping_provider_name}', '${Order.shipping_provider_type}', ${Order.shipping_price}, ${Order.discounts}, ${Order.taxes}, ${Order.total}, '${Order.currency}', '${Order.created_at}', '${Order.updated_at}', '${Order.slug}') RETURNING *`
    );

    const orderId = newOrder.rows[0].id;

    const newOrderItems = items.map(async (item) => {
      const newItem = await conn.query(
        `INSERT INTO orders_items (order_id, name, variant_id, img, quantity, price, currency, created_at, updated_at) VALUES (${orderId}, '${item.name}', ${item.variant_id}, '${item.img}', ${item.quantity}, ${item.price}, '${item.currency}', '${Order.created_at}', '${Order.updated_at}') RETURNING *`
      );
      return newItem.rows[0];
    });

    //If newOrderItems status is 200 then update the order slug creating a unique slug using the order id + 16 random characters and update the order with the new slug
    if (newOrderItems.status === 200) {
      const slug = `${orderId}-${Math.random().toString(36).substr(2, 16)}`;
      const updatedOrder = await conn.query(
        `UPDATE orders SET slug = '${slug}' WHERE id = ${orderId} RETURNING *`
      );
      return res.status(200).json(updatedOrder.rows[0]);
    }

    return res.status(200).json(newOrder.rows[0]);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Something went wrong" });
  }
};
