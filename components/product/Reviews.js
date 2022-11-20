import React, { useState } from "react";
import { ReviewForm } from "./ReviewForm";
import { ReviewItem } from "./ReviewItem";
import { simpleFetch } from "../../utils/simpleFetch";

export const Reviews = ({ reviews, product }) => {
  const [reviewsReset, setReviewsReset] = useState(reviews);
  const reviewResetStart = async () => {
    const clothe = await simpleFetch(`clothes/${product}`);
    setReviewsReset(clothe[2].rows);
  };

  return (
    <div className="container mb-5 pb-2">
      <button onClick={reviewResetStart} id="resetView" className="d-none">
        Reset Reviews
      </button>
      <div className="divider mb-5"></div>
      <h2 className="mt-5 mb-3">Escribe tu Review:</h2>
      <ReviewForm product={product}></ReviewForm>
      <h2 className="mt-5 mb-3">Reviews:</h2>
      {reviewsReset.map((review, i) => (
        <ReviewItem
          key={review.id + i + Math.random()}
          singlereview={review}
        ></ReviewItem>
      ))}
    </div>
  );
};
