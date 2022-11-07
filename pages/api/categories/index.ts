import { NextApiRequest, NextApiResponse } from "next";
import conn from "../../../lib/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const query = await conn.query("SELECT * FROM categories");
    res.status(200).json(query.rows);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
