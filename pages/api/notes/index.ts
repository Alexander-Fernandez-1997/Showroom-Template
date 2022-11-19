import { NextApiRequest, NextApiResponse } from "next";
import conn from "../../../lib/db";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const query = await conn.query("SELECT * FROM notes");
  const data = query.rows;
  res.status(200).json(data);
};
