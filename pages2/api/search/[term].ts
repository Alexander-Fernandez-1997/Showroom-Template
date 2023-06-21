import { NextApiRequest, NextApiResponse } from "next";
import conn from "../../../src/lib/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { term } = req.query;
    const storeId = req.headers["store-id"];
    const query = `SELECT * FROM clothes WHERE LOWER(name) LIKE '%${term}%' AND store_id = ${storeId};SELECT * FROM variants WHERE clothes_id IN (SELECT id FROM clothes WHERE LOWER(name) LIKE '%${term}%' AND store_id = ${storeId});`;
    const result = await conn.query(query);

    const clothes = result[0].rows;
    const variants = result[1].rows;

    const clothesWithVariants = clothes.map((clothe) => {
      const variantsOfClothe = variants.filter(
        (variant) => variant.clothes_id === clothe.id
      );
      return { ...clothe, variants: variantsOfClothe };
    });

    res.status(200).json(clothesWithVariants);
  } catch (err) {
    res.status(500).json("no hay productos con ese nombre");
  }
}
