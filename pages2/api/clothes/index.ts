import { NextApiRequest, NextApiResponse } from "next";
import conn from "../../../src/lib/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const storeId = req.headers["store-id"];
    const query = await conn.query(
      `SELECT * FROM clothes WHERE store_id = ${storeId};SELECT * FROM variants WHERE clothes_id IN (SELECT id FROM clothes WHERE store_id = ${storeId});`
    );
    const clothes = query[0].rows;
    const variants = query[1].rows;

    const clothesWithVariants = clothes.map((clothe) => {
      const variantsOfClothe = variants.filter(
        (variant) => variant.clothes_id === clothe.id
      );
      return { ...clothe, variants: variantsOfClothe };
    });

    res.status(200).json(clothesWithVariants);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
