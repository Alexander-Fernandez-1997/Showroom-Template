import React from "react";

export const BodyTotal = () => {
  return (
    <div className="col-12 col-md-6">
      <h5 className="">Order Summary</h5>
      <div className="text-small text-secondary my-2">
        <div className="d-flex justify-between mb-2 gap-2">
          <span>Subtotal</span>
          <span>€19.50</span>
        </div>
        <div className="text-small text-secondary">
          <div className="d-flex justify-between mb-2 gap-2">
            <span>Shipping</span>
            <span>€10.00</span>
          </div>
          <div className="d-flex justify-between mb-2 gap-2">
            <span>Taxes</span>
            <span>2%</span>
          </div>
        </div>
        <hr />
        <div className="text-small text-dark d-flex justify-between mb-2 gap-2">
          <p>Total</p>
          <p>€29.50</p>
        </div>
      </div>
    </div>
  );
};
