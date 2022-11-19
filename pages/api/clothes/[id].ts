import { NextApiRequest, NextApiResponse } from "next";
import conn from "../../../lib/db";
import storeKey from "../../../utils/storeKey";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const id = req.query.id;
    const query = await conn.query(
      `SELECT * FROM clothes WHERE id = $1 AND store_id = $2`,
      [id, storeKey]
    );
    console.log(query);
    res.status(200).json(query.rows[0]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
