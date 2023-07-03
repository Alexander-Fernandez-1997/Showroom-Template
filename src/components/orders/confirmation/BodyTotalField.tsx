import React from "react";

export const BodyTotalField = ({ tittle, price }) => {
  return (
    <div className="d-flex justify-between mb-2 gap-2">
      <span>{tittle}</span>
      <span>{price}</span>
    </div>
  );
};
