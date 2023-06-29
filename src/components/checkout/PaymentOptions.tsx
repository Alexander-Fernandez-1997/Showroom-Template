import React from "react";
import { PaymentOption } from "./PaymentOption";

export const PaymentOptions = () => {
  const payment_providers = [
    {
      name: "Paypal",
      img: "https://i.imgur.com/vCxEbYg.png",
      fn: () => console.log("Paypal"),
    },
    {
      name: "Stripe",
      img: "https://cdn.worldvectorlogo.com/logos/stripe-4.svg",
      fn: () => console.log("Stripe"),
    },
    {
      name: "Mercado Pago",
      img: "https://i.imgur.com/ku8Uml9.png",
      fn: () => console.log("Mercado Pago"),
    },
  ];
  return (
    <div className="paymentList d-none">
      <div className="row gap-2 ">
        {payment_providers.map((provider) => (
          <PaymentOption key={provider.name} provider={provider} />
        ))}
      </div>
    </div>
  );
};
