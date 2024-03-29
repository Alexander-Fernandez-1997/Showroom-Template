import { NextApiRequest, NextApiResponse } from "next";
import conn from "../../../lib/db";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // get the slug from the request
    const { slug } = req.query;
    const query = await conn.query(
      `SELECT * FROM orders WHERE  slug = '${slug}'`
    );
    const data = query.rows[0];
    const id = data.id;
    const orderItems = await conn.query(
      `SELECT * FROM orders_items WHERE order_id = ${id}`
    );
    data.order_items = orderItems.rows;

    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};
