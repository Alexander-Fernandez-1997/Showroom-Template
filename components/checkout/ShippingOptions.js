import React, { useState } from "react";
import { ShippingOption } from "./ShippingOption";

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
  const [service, setService] = useState(providers[0]);
  return (
    <div className="d-none shippingList">
      <div className="row gap-2 ">
        {providers.map((provider) => (
          <ShippingOption
            key={provider.name}
            provider={provider}
            setService={setService}
            service={service}
          />
        ))}
      </div>
      <button className="flex-c-m stext-101 cl0 size-101 bg3 hov-btn3 p-lr-15 trans-04 mt-5">
        Continuar a metodo de pago
      </button>
    </div>
  );
};
