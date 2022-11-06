import conn from "../../../lib/db";

export default async (req, resp) => {
  try {
    const variant_list = [
      {
        sku: "1234567890",
        color: "red",
        size: "M",
        quantity: 10,
        image: [
          "https://source.unsplash.com/400x600",
          "https://source.unsplash.com/400x600",
          "https://source.unsplash.com/400x600",
        ],
        video_url: "https://www.youtube.com/watch?v=1",
        weight: 1,
        height: 1,
        width: 1,
        length: 1,
        price: 10,
        discount: true,
        discount_price: 8,
        discount_end: "2021-01-01",
        clothes_id: 1,
      },
      {
        sku: "1234567891",
        color: "blue",
        size: "M",
        quantity: 10,
        image: [
          "https://source.unsplash.com/400x600",
          "https://source.unsplash.com/400x600",
          "https://source.unsplash.com/400x600",
        ],
        video_url: "https://www.youtube.com/watch?v=1",
        weight: 1,
        height: 1,
        width: 1,
        length: 1,
        price: 10,
        discount: true,
        discount_price: 8,
        discount_end: "2021-01-01",
        clothes_id: 1,
      },
      {
        sku: "1234567892",
        color: "red",
        size: "L",
        quantity: 10,
        image: [
          "https://source.unsplash.com/400x600",
          "https://source.unsplash.com/400x600",
          "https://source.unsplash.com/400x600",
        ],
        video_url: "https://www.youtube.com/watch?v=1",
        weight: 1,
        height: 1,
        width: 1,
        length: 1,
        price: 10,
        discount: true,
        discount_price: 8,
        discount_end: "2021-01-01",
        clothes_id: 1,
      },
      {
        sku: "1234567893",
        color: "blue",
        size: "L",
        quantity: 10,
        image: [
          "https://source.unsplash.com/400x600",
          "https://source.unsplash.com/400x600",
          "https://source.unsplash.com/400x600",
        ],
        video_url: "https://www.youtube.com/watch?v=1",
        weight: 1,
        height: 1,
        width: 1,
        length: 1,
        price: 10,
        discount: true,
        discount_price: 8,
        discount_end: "2021-01-01",
        clothes_id: 1,
      },
    ];

    variant_list.forEach(async (variant) => {
      const {
        sku,
        color,
        size,
        quantity,
        image,
        video_url,
        weight,
        height,
        width,
        length,
        price,
        discount,
        discount_price,
        discount_end,
        clothes_id,
      } = variant;
      const sql = `INSERT INTO variant (sku, color, size, quantity, image, video_url, weight, height, width, length, price, discount, discount_price, discount_end, clothes_id) VALUES ('${sku}', '${color}', '${size}', ${quantity}, '${JSON.stringify(
        image
      )}', '${video_url}', ${weight}, ${height}, ${width}, ${length}, ${price}, ${discount}, ${discount_price}, '${discount_end}', ${clothes_id})`;
      const result = await conn.query(sql);
      console.log(result);
    });
    resp.status(200).json({ message: "variants creadas" });
  } catch (err) {
    console.log(err);
    resp.status(500).json({ message: err.message });
  }
};
