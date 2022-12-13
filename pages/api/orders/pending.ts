import { NextApiRequest, NextApiResponse } from "next";
import conn from "../../../lib/db";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const query = await conn.query(
      `SELECT slug FROM orders WHERE status = 'pending' AND slug != ''`
    );
    const data = query.rows;
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
