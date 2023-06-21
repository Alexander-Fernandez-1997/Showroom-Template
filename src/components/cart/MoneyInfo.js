import React from "react";
import { Discount } from "./Discount";
import { Total } from "./Total";

export const MoneyInfo = () => {
  return (
    <div className="col-12 col-md-5">
      <div className="d-flex flex-column gap-4 pe-4 ps-4">
        <Total></Total>
        <Discount></Discount>
      </div>
    </div>
  );
};
