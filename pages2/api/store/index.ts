import { NextApiRequest, NextApiResponse } from "next";
import conn from "../../../src/lib/db";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const storeId = req.headers["store-id"];
    const query = await conn.query(
      `SELECT * FROM stores WHERE id = ${storeId}`
    );
    const data = query.rows[0];
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
