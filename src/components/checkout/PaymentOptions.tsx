import React, { useState } from "react";
import { PaymentOption } from "./PaymentOption";
import { Wallet } from "@mercadopago/sdk-react";
import { mercadoPagoPayment } from "utils/mercadoPago/view";

interface PaymentOptionsProps {
  slug: string;
}

interface PaymentProvider {
  name: string;
  img: string;
  fn: () => void;
}

export const PaymentOptions: React.FC<PaymentOptionsProps> = ({ slug }) => {
  const [preference, setPreference] = useState(null);

  const payment_providers: PaymentProvider[] = [
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
      fn: () => mercadoPagoPayment(slug, setPreference),
    },
  ];

  return (
    <div className="paymentList d-none">
      <div className="row gap-2 ">
        {payment_providers.map((provider) => (
          <PaymentOption key={provider.name} provider={provider} />
        ))}
        {preference && (
          <Wallet
            initialization={{
              preferenceId: preference,
              redirectMode: "modal",
            }}
          ></Wallet>
        )}
      </div>
    </div>
  );
};
