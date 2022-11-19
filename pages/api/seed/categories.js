import conn from "../../../lib/db";
import storeKey from "../../../utils/storeKey";

export default async (req, resp) => {
  try {
    const categories_list = [
      {
        name: "Tops",
        description: "Tops description",
        banner_image: " https://source.unsplash.com/1200x600",
        slug: "tops",
        store_id: storeKey,
      },
      {
        name: "Bottoms",
        description: "Bottoms description",
        banner_image: " https://source.unsplash.com/1200x600",
        slug: "bottoms",
        store_id: storeKey,
      },
      {
        name: "Dresses",
        description: "Dresses description",
        banner_image: " https://source.unsplash.com/1200x600",
        slug: "dresses",
        store_id: storeKey,
      },
      {
        name: "Shoes",
        description: "Shoes description",
        banner_image: " https://source.unsplash.com/1200x600",
        slug: "shoes",
        store_id: storeKey,
      },
      {
        name: "Accessories",
        description: "Accessories description",
        banner_image: " https://source.unsplash.com/1200x600",
        slug: "accessories",
        store_id: storeKey,
      },
    ];

    categories_list.forEach(async (category) => {
      console.log("category start");
      const res = await conn.query(
        "INSERT INTO categories (name, description, banner_image, slug, store_id) VALUES ($1, $2, $3, $4, $5) RETURNING *",
        [
          category.name,
          category.description,
          category.banner_image,
          category.slug,
          category.store_id,
        ]
      );
    });

    resp.status(200).json({ message: "Categories created" });
  } catch (err) {
    console.log(err);
    resp.status(500).json({ message: err.message });
  }
};
