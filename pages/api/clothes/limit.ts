import { NextApiRequest, NextApiResponse } from "next";
import conn from "../../../lib/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const storeId = req.headers["store-id"];
    const query = await conn.query(
      `SELECT * FROM clothes WHERE store_id = ${storeId} LIMIT 10;`
    );
    const clothes = query.rows;

    const variants = await Promise.all(
      clothes.map(async (clothe) => {
        const variant = await conn.query(
          `SELECT * FROM variants WHERE clothes_id = ${clothe.id} LIMIT 1;`
        );
        return variant.rows[0];
      })
    );

    const clothesWithVariants = clothes.map((clothe, index) => {
      return { ...clothe, variants: variants[index] };
    });

    res.status(200).json(clothesWithVariants);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
