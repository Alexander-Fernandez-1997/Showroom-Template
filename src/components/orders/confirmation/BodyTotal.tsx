import React from "react";
import { BodyTotalField } from "./BodyTotalField";
import { formatPrice } from "utils/price";

export const BodyTotal = ({ order }) => {
  const { total, taxes, subtotal, shippingPrice, discounts } = order;

  const fields = [
    { tittle: "Subtotal", price: formatPrice(subtotal) },
    { tittle: "Shipping", price: formatPrice(shippingPrice) },
    { tittle: "Discounts", price: formatPrice(discounts) },
    { tittle: "Taxes", price: `${taxes}%` },
  ];

  return (
    <div className="col-12 col-md-6">
      <h5 className="">Order Summary</h5>
      <div className="text-small text-secondary my-2">
        <div>
          {fields.map((field) => (
            <BodyTotalField
              key={field.tittle}
              tittle={field.tittle}
              price={field.price}
            ></BodyTotalField>
          ))}
        </div>
        <hr />
        <div className="text-small text-dark d-flex justify-between mb-2 gap-2">
          <p>Total</p>
          <p>{formatPrice(total)}</p>
        </div>
      </div>
    </div>
  );
};
