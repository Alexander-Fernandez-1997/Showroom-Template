import conn from "../../../lib/db";

export default async (req, resp) => {
  try {
    const categories_list = [
      {
        name: "Tops",
        description: "Tops description",
        banner_image: " https://source.unsplash.com/1200x600",
        slug: "tops",
      },
      {
        name: "Bottoms",
        description: "Bottoms description",
        banner_image: " https://source.unsplash.com/1200x600",
        slug: "bottoms",
      },
      {
        name: "Dresses",
        description: "Dresses description",
        banner_image: " https://source.unsplash.com/1200x600",
        slug: "dresses",
      },
      {
        name: "Shoes",
        description: "Shoes description",
        banner_image: " https://source.unsplash.com/1200x600",
        slug: "shoes",
      },
      {
        name: "Accessories",
        description: "Accessories description",
        banner_image: " https://source.unsplash.com/1200x600",
        slug: "accessories",
      },
    ];

    categories_list.forEach(async (category) => {
      console.log("category start");
      const res = await conn.query(
        "INSERT INTO categories (name, description, banner_image, slug) VALUES ($1, $2, $3, $4) RETURNING *",
        [
          category.name,
          category.description,
          category.banner_image,
          category.slug,
        ]
      );
    });

    resp.status(200).json({ message: "Categories created" });
  } catch (err) {
    console.log(err);
    resp.status(500).json({ message: err.message });
  }
};
