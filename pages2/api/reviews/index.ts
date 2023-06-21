import { NextApiRequest, NextApiResponse } from "next";
import conn from "../../../src/lib/db";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const { clothes_id, review, rating, reviewer } = req.body;
      const query = await conn.query(
        `INSERT INTO reviews (clothes_id, review, rating, reviewer) VALUES (${clothes_id}, '${review}', ${Number(
          rating
        )}, '${reviewer}') RETURNING *`
      );
      res.status(200).json({ message: "Review created" });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: err.message });
    }
  }
};
