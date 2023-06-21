import conn from "../../../lib/db";
import storeKey from "../../../utils/storeKey";

export default async (req, resp) => {
  try {
    const clothes_list = [
      {
        name: "T-shirt",
        price: 10,
        description: "T-shirt",
        subcategories_ids: "{1, 2}",
        slug: "t-shirt",
        image_main: "https://source.unsplash.com/400x600",
        store_id: storeKey,
      },
      {
        name: "Shirt",
        price: 15,
        description: "Shirt",
        subcategories_ids: "{1, 2}",
        slug: "shirt",
        image_main: "https://source.unsplash.com/400x600",
        store_id: storeKey,
      },
      {
        name: "Pants",
        price: 20,
        description: "Pants",
        subcategories_ids: "{3, 2}",
        slug: "pants",
        image_main: "https://source.unsplash.com/400x600",
        store_id: storeKey,
      },
      {
        name: "Shorts",
        price: 25,
        description: "Shorts",
        subcategories_ids: "{3,4}",
        slug: "shorts",
        image_main: "https://source.unsplash.com/400x600",
        store_id: storeKey,
      },
      {
        name: "Dress",
        price: 30,
        description: "Dress",
        subcategories_ids: "{5,6}",
        slug: "dress",
        image_main: "https://source.unsplash.com/400x600",
        store_id: storeKey,
      },
    ];

    clothes_list.forEach(async (clothes) => {
      const {
        name,
        price,
        description,
        subcategories_ids,
        slug,
        image_main,
        store_id,
      } = clothes;

      const query = `INSERT INTO clothes (name, price, description, subcategories_ids, slug, image_main, store_id) VALUES ('${name}', ${price}, '${description}', '${subcategories_ids}', '${slug}', '${image_main}', ${store_id})`;

      const result = await conn.query(query);
      console.log(result);
    });
    resp.status(200).json({ message: "clothes creadas" });
  } catch (err) {
    console.log(err);
    resp.status(500).json({ message: err.message });
  }
};
