import React, { useEffect, useState } from "react";
import { PaymentOption } from "./PaymentOption";
import { mercadoPagoPayment } from "utils/mercadoPago/view";
import { StripeBtn } from "./payments/StripeBtn";
import { PayPalBtn } from "./payments/PayPalBtn";
import { MercadoPagoBtn } from "./payments/MercadoPagoBtn";

interface PaymentOptionsProps {
  slug: string;
}

interface PaymentProvider {
  name: string;
  img: string;
  btn: React.ReactNode;
}

export const PaymentOptions: React.FC<PaymentOptionsProps> = ({ slug }) => {
  const [preference, setPreference] = useState(null);
  const [total, setTotal] = useState(null);

  useEffect(() => {
    if (slug !== "") {
      mercadoPagoPayment(slug, setPreference, setTotal);
    }
  }, [slug]);

  const payment_providers: PaymentProvider[] = [
    {
      name: "Paypal",
      img: "https://i.imgur.com/vCxEbYg.png",
      btn: <PayPalBtn key={`payapal-${total}`} total={total} />,
    },
    {
      name: "Stripe",
      img: "https://cdn.worldvectorlogo.com/logos/stripe-4.svg",
      btn: <StripeBtn key={`stripe-${slug}`} slug={slug} />,
    },
    {
      name: "Mercado Pago",
      img: "https://i.imgur.com/ku8Uml9.png",
      btn: (
        <MercadoPagoBtn
          key={preference}
          preference={preference}
        ></MercadoPagoBtn>
      ),
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
