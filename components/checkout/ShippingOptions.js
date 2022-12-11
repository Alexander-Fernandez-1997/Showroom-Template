import React from "react";

export const ShippingOptions = () => {
  const providers = [
    {
      name: "DHL",
      price: 10,
      type: "express",
    },
    {
      name: "Fedex",
      price: 15,
      type: "express",
    },
    {
      name: "UPS",
      price: 20,
      type: "express",
    },
    {
      name: "USPS",
      price: 5,
      type: "standard",
    },
    {
      name: "Purolator",
      price: 5,
      type: "standard",
    },
  ];
  return (
    <div className="row gap-2">
      {providers.map((provider) => (
        <div className="col-12 ">
          <div className="bor10 p-3">
            <h2 className="mb-3">{provider.name}</h2>
            <hr />
            <p className="mb-3">Price: ${provider.price}</p>
            <p className="mb-3">Type: {provider.type}</p>
            <p className="">Delivery time: 2-3 days</p>
          </div>
        </div>
      ))}
    </div>
  );
};
