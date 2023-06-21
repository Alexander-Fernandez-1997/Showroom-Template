import React from "react";

export const ShippingOption = ({ provider, setService, service }) => {
  return (
    <div className="col-12 " onClick={() => setService(provider)}>
      <div
        className={`p-3 bor10 ${
          service.name === provider.name ? "border-dark border" : ""
        }`}
      >
        <h2 className="mb-3">{provider.name}</h2>
        <hr />
        <p className="mb-3">Price: ${provider.price}</p>
        <p className="mb-3">Type: {provider.type}</p>
        <p className="">Delivery time: 2-3 days</p>
      </div>
    </div>
  );
};
