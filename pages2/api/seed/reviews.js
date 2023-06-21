import conn from "../../../lib/db";

export default async (req, resp) => {
  const reviews = [
    {
      reviewer: "Jonh Smith",
      review: "Muy buen producto",
      rating: 5,
      clothes_id: 9,
    },
    {
      reviewer: "Maria Lopez",
      review: "Excelente calidad",
      rating: 3,
      clothes_id: 9,
    },
    {
      reviewer: "Esteban De La Cruz",
      review: "Cumple con las expectativas",
      rating: 4,
      clothes_id: 9,
    },
  ];

  reviews.forEach(async (review) => {
    const query = `INSERT INTO reviews (reviewer, review, rating, clothes_id) VALUES ('${review.reviewer}', '${review.review}', ${review.rating}, ${review.clothes_id})`;
    const result = await conn.query(query);
    console.log(result);
  });

  resp.status(200).json({ message: "reviews creado" });
};
