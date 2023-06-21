import React from "react";

export const Price = ({ ActiveVariant, activePrice }) => {
  return (
    <div className="price mb-4">
      <span className={ActiveVariant.discount ? "old-price" : "d-none"}>
        ${ActiveVariant.price}
      </span>{" "}
      ${activePrice}
    </div>
  );
};
