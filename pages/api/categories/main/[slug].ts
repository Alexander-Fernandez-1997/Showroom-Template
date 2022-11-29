import { NextApiRequest, NextApiResponse } from "next";
import conn from "../../../../lib/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const slug = req.query.slug;
    console.log(slug);
    const storeId = req.headers["store-id"];
    const query = `SELECT * FROM categories WHERE slug = '${slug}' AND store_id = ${storeId}; SELECT * FROM subcategories WHERE category_id = (SELECT id FROM categories WHERE slug = '${slug}' AND store_id = ${storeId});`;
    const data = await conn.query(query);
    const rows = data.map((info) => info.rows);
    const subcategories_ids_array = rows[1].map(
      (subcategory) => subcategory.id
    );

    // get all the clothes that belong to the subcategories matching the subcategories_ids [] column with the subcategories_ids_array array
    const clothesQuery = `SELECT * FROM clothes WHERE subcategories_ids && ARRAY[${subcategories_ids_array}] AND store_id = ${storeId};SELECT * FROM variants WHERE clothes_id IN (SELECT id FROM clothes WHERE subcategories_ids && ARRAY[${subcategories_ids_array}] AND store_id = ${storeId});`;
    const clothesData = await conn.query(clothesQuery);
    const clothesRows = clothesData.map((info) => info.rows);

    const finalData = {
      category: rows[0][0],
      subcategories: rows[1],
      clothes: clothesRows[0],
      variants: clothesRows[1],
    };

    res.status(200).json(finalData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
