import React, { useEffect, useState } from "react";
import useOrderInfo from "../../store/orderInfo";
import { PaymentBtn } from "./PaymentBtn";
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
  const setProvider = useOrderInfo((state) => state.setProvider);

  useEffect(() => {
    setProvider(service);
  }, [service]);

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
      <PaymentBtn></PaymentBtn>
    </div>
  );
};
