import React from "react";
import { ReviewItem } from "./ReviewItem";
import { Stars } from "./Stars";

export const Reviews = ({ reviews }) => {
  console.log(reviews);
  return (
    <div className="container mb-5 pb-2">
      <div className="divider mb-5"></div>
      <h2 className="mt-5">Reviews:</h2>
      <Stars></Stars>
      {reviews.map((review, i) => (
        <ReviewItem
          key={review.id + i + Math.random()}
          singlereview={review}
        ></ReviewItem>
      ))}
    </div>
  );
};
