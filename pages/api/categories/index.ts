import { NextApiRequest, NextApiResponse } from "next";
import conn from "../../../lib/db";
import storeKey from "../../../utils/storeKey";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const query = await conn.query(
      `SELECT * FROM categories WHERE store_id = ${storeKey}`
    );
    res.status(200).json(query.rows);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
