import { NextApiRequest, NextApiResponse } from "next";
import conn from "../../../lib/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { term } = req.query;
    const storeId = req.headers["store-id"];
    const query = `SELECT * FROM clothes WHERE LOWER(name) LIKE '%${term}%' AND store_id = ${storeId}`;
    const result = await conn.query(query);
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json("no hay productos con ese nombre");
  }
}
