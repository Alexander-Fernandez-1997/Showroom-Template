import { NextApiRequest, NextApiResponse } from "next";
import conn from "../../../lib/db";
import storeKey from "../../../utils/storeKey";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const query = await conn.query(
      `SELECT * FROM configuration WHERE store_id = ${storeKey}`
    );
    const data = await query.rows[0];
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
