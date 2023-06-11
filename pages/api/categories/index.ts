import { NextApiRequest, NextApiResponse } from "next";
import conn from "../../../src/lib/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const storeId = req.headers["store-id"];
    const query = await conn.query(
      `SELECT * FROM categories WHERE store_id = ${storeId}`
    );
    res.status(200).json(query.rows);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
