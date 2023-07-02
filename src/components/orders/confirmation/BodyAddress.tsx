import React from "react";

export const BodyAddress = () => {
  return (
    <div className="col-12 col-md-6">
      <h5 className="">Delivery</h5>
      <div className="my-2">
        <p className="text-small text-secondary">Address</p>
        <div className="flex flex-col">
          <span>Alexander Fernandez</span>
          <span>Camargo 936</span>
          <span>Capital Federal 1414</span>
          <span>Argentina</span>
        </div>
      </div>
      <div className="my-2">
        <p className="text-small text-secondary">Delivery method</p>
        <span>PostFake Standard</span>
      </div>
    </div>
  );
};
