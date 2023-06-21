import conn from "../../../lib/db";

export default async (req, resp) => {
  try {
    const subcategories_list = [
      {
        name: "Tops",
        description: "Tops description",
        banner_image: " https://source.unsplash.com/1200x600",
        slug: "tops",
        category_id: 1,
      },
      {
        name: "Bottoms",
        description: "Bottoms description",
        banner_image: " https://source.unsplash.com/1200x600",
        slug: "bottoms",
        category_id: 2,
      },
      {
        name: "Dresses",
        description: "Dresses description",
        banner_image: " https://source.unsplash.com/1200x600",
        slug: "dresses",
        category_id: 3,
      },
      {
        name: "Shoes",
        description: "Shoes description",
        banner_image: " https://source.unsplash.com/1200x600",
        slug: "shoes",
        category_id: 4,
      },
      {
        name: "Accessories",
        description: "Accessories description",
        banner_image: " https://source.unsplash.com/1200x600",
        slug: "accessories",
        category_id: 5,
      },
    ];

    subcategories_list.forEach(async (subcategory) => {
      console.log("subcategory start");
      const res = await conn.query(
        "INSERT INTO subcategories (name, description, banner_image, slug, category_id) VALUES ($1, $2, $3, $4, $5) RETURNING *",
        [
          subcategory.name,
          subcategory.description,
          subcategory.banner_image,
          subcategory.slug,
          subcategory.category_id,
        ]
      );
    });
    resp.status(200).json({ message: "Subcategories created" });
  } catch (err) {
    console.log(err);
    resp.status(500).json({ message: err.message });
  }
};
