import { NextApiRequest, NextApiResponse } from "next";
import conn from "../../../lib/db";
import storeKey from "../../../utils/storeKey";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { term } = req.query;
    const query = `SELECT * FROM clothes WHERE LOWER(name) LIKE '%${term}%' AND store_id = ${storeKey}`;
    const result = await conn.query(query);
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json("no hay productos con ese nombre");
  }
}
