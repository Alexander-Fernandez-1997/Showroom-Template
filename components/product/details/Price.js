import React from "react";

export const Price = ({ ActiveVariant, activePrice }) => {
  return (
    <div className="price">
      <span className={ActiveVariant.discount ? "old-price" : "d-none"}>
        ${ActiveVariant.price}
      </span>{" "}
      ${activePrice}
    </div>
  );
};
