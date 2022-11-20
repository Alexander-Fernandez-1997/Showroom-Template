import React from "react";

export const Stars = ({ setRating }) => {
  // when click on star change rating
  const changeRating = ({ target }) => {
    const stat = target.value;
    setRating((prev) => ({ ...prev, rating: stat }));
  };

  return (
    <div className="ratingControl" onClick={(e) => changeRating(e)}>
      <input type="radio" id="rating-5" name="rating" defaultValue={5} />
      <label
        className="ratingControl-stars ratingControl-stars--5"
        htmlFor="rating-5"
      >
        5
      </label>

      <input type="radio" id="rating-4" name="rating" defaultValue={4} />
      <label
        className="ratingControl-stars ratingControl-stars--4"
        htmlFor="rating-4"
      >
        4
      </label>

      <input type="radio" id="rating-3" name="rating" defaultValue={3} />
      <label
        className="ratingControl-stars ratingControl-stars--3"
        htmlFor="rating-3"
      >
        3
      </label>

      <input type="radio" id="rating-2" name="rating" defaultValue={2} />
      <label
        className="ratingControl-stars ratingControl-stars--2"
        htmlFor="rating-2"
      >
        2
      </label>

      <input type="radio" id="rating-1" name="rating" defaultValue={1} />
      <label
        className="ratingControl-stars ratingControl-stars--1"
        htmlFor="rating-1"
      >
        1
      </label>
    </div>
  );
};
