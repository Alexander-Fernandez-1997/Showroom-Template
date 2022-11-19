import { NextApiRequest, NextApiResponse } from "next";
import conn from "../../../lib/db";
import storeKey from "../../../utils/storeKey";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const query = await conn.query(
      `SELECT * FROM franchises WHERE store_id = ${storeKey}`
    );
    const data = query.rows;
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
