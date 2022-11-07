import conn from "../../../lib/db";

export default async (req, resp) => {
  try {
    const variant_list = [
      {
        sku: "1234567890",
        color: "red",
        size: "M",
        quantity: 10,
        image:
          '{"https://source.unsplash.com/400x600","https://source.unsplash.com/400x600","https://source.unsplash.com/400x600"}',
        video_url: "https://www.youtube.com/watch?v=1",
        weight: 1,
        height: 1,
        width: 1,
        length: 1,
        price: 10,
        clothes_id: 1,
        discount: true,
        discount_price: 8,
        discount_end: "2021-01-01",
      },
      {
        sku: "1234567891",
        color: "blue",
        size: "M",
        quantity: 10,
        image:
          '{"https://source.unsplash.com/400x600","https://source.unsplash.com/400x600","https://source.unsplash.com/400x600"}',
        video_url: "https://www.youtube.com/watch?v=1",
        weight: 1,
        height: 1,
        width: 1,
        length: 1,
        price: 10,
        clothes_id: 1,
        discount: true,
        discount_price: 8,
        discount_end: "2021-01-01",
      },
      {
        sku: "1234567892",
        color: "red",
        size: "L",
        quantity: 10,
        image:
          '{"https://source.unsplash.com/400x600","https://source.unsplash.com/400x600","https://source.unsplash.com/400x600"}',
        video_url: "https://www.youtube.com/watch?v=1",
        weight: 1,
        height: 1,
        width: 1,
        length: 1,
        price: 10,
        clothes_id: 1,
        discount: true,
        discount_price: 8,
        discount_end: "2021-01-01",
      },
      {
        sku: "1234567893",
        color: "blue",
        size: "L",
        quantity: 10,
        image:
          '{"https://source.unsplash.com/400x600","https://source.unsplash.com/400x600","https://source.unsplash.com/400x600"}',
        video_url: "https://www.youtube.com/watch?v=1",
        weight: 1,
        height: 1,
        width: 1,
        length: 1,
        price: 10,
        clothes_id: 1,
        discount: true,
        discount_price: 8,
        discount_end: "2021-01-01",
      },
    ];

    variant_list.forEach(async (variant) => {
      const sql = `INSERT INTO variants (sku, color, size, quantity, image, video_url, weight, height, width, length, price, clothes_id, discount, discount_price, discount_end) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15) RETURNING *`;
      const values = [
        variant.sku,
        variant.color,
        variant.size,
        variant.quantity,
        variant.image,
        variant.video_url,
        variant.weight,
        variant.height,
        variant.width,
        variant.length,
        variant.price,
        variant.clothes_id,
        variant.discount,
        variant.discount_price,
        variant.discount_end,
      ];
      console.log("val", values);
      const query = await conn.query(sql, values);
      console.log(query.rows);
    });
    resp.status(200).json({ message: "variants creadas" });
  } catch (err) {
    console.log(err);
    resp.status(500).json({ message: err.message });
  }
};
