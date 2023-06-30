import React, { useState } from "react";
import { PaymentOption } from "./PaymentOption";
import { mercadoFetch } from "utils/mercadoPago/fetch";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";

interface PaymentOptionsProps {}

interface PaymentProvider {
  name: string;
  img: string;
  fn: () => void;
}

export const PaymentOptions: React.FC<PaymentOptionsProps> = () => {
  const [preference, setPreference] = useState(null);

  const key = "TEST-3c5ade5d-fec0-4f11-b82d-a72f07315cfa";
  initMercadoPago(key, { locale: "es-AR" });
  // let ml = "203354989-4d171f9f-dc06-4a02-973f-dd3fa67f22c1";

  const mercadoPagoPayment = () => {
    mercadoFetch("27-l3kpj5ub8r").then((preference) => {
      console.log(preference.preferenceId);
      setPreference(preference.preferenceId);
    });
  };

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
      fn: () => {
        mercadoPagoPayment();
      },
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
