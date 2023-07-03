import React from "react";
import { formatPrice } from "utils/price";

export const Price = ({ ActiveVariant, activePrice }) => {
  return (
    <div className="price mb-4">
      <span className={ActiveVariant.discount ? "old-price" : "d-none"}>
        {formatPrice(ActiveVariant.price)}
      </span>{" "}
      {formatPrice(activePrice)}
    </div>
  );
};
