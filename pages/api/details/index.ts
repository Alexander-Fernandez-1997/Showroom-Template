import { NextApiRequest, NextApiResponse } from "next";
import conn from "../../../lib/db";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const storeId = req.headers["store-id"];
    const query = await conn.query(
      `SELECT logo, phone_number, wp_number, instagram FROM stores WHERE id = ${storeId}; SELECT * FROM categories WHERE store_id = ${storeId}; SELECT * FROM subcategories WHERE category_id IN (SELECT id FROM categories WHERE store_id = ${storeId});`
    );
    const data = [];
    query.forEach((q) => {
      data.push(q.rows);
    });
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
