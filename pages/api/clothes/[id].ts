import { NextApiRequest, NextApiResponse } from "next";
import conn from "../../../lib/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const id = req.query.id;
    const storeId = req.headers["store-id"];
    const query = `SELECT * FROM clothes WHERE id = ${id} AND store_id = ${storeId}; SELECT * FROM variants WHERE clothes_id = ${id};SELECT * FROM reviews WHERE clothes_id = ${id};`;
    const data = await conn.query(query);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
