import React from "react";

export const ReviewItem = ({ singlereview }) => {
  const { review, reviewer, rating, created_at } = singlereview;

  const createStars = (rating) => {
    let stars = "";
    for (let i = 0; i < rating; i++) {
      stars += "⭐";
    }
    if (rating < 5) {
      for (let i = 0; i < 5 - rating; i++) {
        stars += "☆";
      }
    }
    return stars;
  };

  return (
    <blockquote className="quote-card">
      <span>{createStars(rating)}</span>
      <p>{review}</p>
      <cite>
        {reviewer} - {created_at.slice(0, 10)}
      </cite>
    </blockquote>
  );
};
