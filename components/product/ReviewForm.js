import React, { useState } from "react";
import { Stars } from "./Stars";

export const ReviewForm = ({ product }) => {
  const initialForm = {
    reviewer: "",
    rating: 0,
    review: "",
    clothes_id: product,
  };

  const [values, setValues] = useState(initialForm);

  const reset = () => {
    setValues(initialForm);
  };

  const refreshReviews = () => {
    document.getElementById("resetView").click();
  };

  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = `${window.location.origin}/api/reviews`;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    };
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
    reset();
    setTimeout(refreshReviews, 5000);
  };

  return (
    <>
      <form className="form-group" onSubmit={handleSubmit}>
        <Stars setRating={setValues}></Stars>
        <span id="starsInfo" className="help-block">
          Clickea en una estrella para cambiar tu rating 1 - 5, donde 5 = es
          genial and 1 = es muy malo
        </span>
        <div className="form-group mt-4">
          <label className="control-label" htmlFor="review">
            <strong>Tu Review:</strong>
          </label>
          <textarea
            className="form-control"
            rows={10}
            placeholder="Review"
            name="review"
            id="review"
            value={values.review}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="reviewer">
            <strong>Nombre:</strong>
          </label>
          <input
            className="form-control"
            type="text"
            placeholder="Nombre"
            name="reviewer"
            id="reviewer"
            value={values.reviewer}
            onChange={handleInputChange}
          />
        </div>
        <input id="submitForm" type="submit" className="btn btn-dark" />
      </form>
    </>
  );
};
