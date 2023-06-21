import { NextApiRequest, NextApiResponse } from "next";
import conn from "../../../../src/lib/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const storeId = req.headers["store-id"];
    // get cat and subcateg from the url
    const { cat, subcateg } = req.query;

    const categ = await conn.query(
      `SELECT id FROM categories WHERE store_id = ${storeId} AND slug = '${cat}'`
    );
    const categId = categ.rows[0].id;
    console.log("categId", categId);
    const subcategs = await conn.query(
      `SELECT * FROM subcategories WHERE category_id = ${categId} AND slug = '${subcateg}'`
    );
    const subcategory = subcategs.rows[0];

    const clothes = await conn.query(
      `SELECT * FROM clothes WHERE subcategories_ids @> '{${subcategory.id}}'`
    );
    const clothesWithVariants = await Promise.all(
      clothes.rows.map(async (cloth) => {
        const variants = await conn.query(
          `SELECT * FROM variants WHERE clothes_id = ${cloth.id}`
        );
        return { ...cloth, variants: variants.rows };
      })
    );

    const response = {
      subcategory,
      clothes: clothesWithVariants,
    };

    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
