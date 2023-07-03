import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import React from "react";

export const PayPalBtn = ({ total, slug }) => {
  if (total === null) {
    return null;
  }

  // Current currency codes are:
  // Australian Dollar	AUD
  // Brazilian real	BRL
  // Canadian dollar	CAD
  // Czech koruna	CZK
  // Danish krone	DKK
  // Euro	EUR
  // Hong Kong dollar	HKD
  // Hungarian forint	HUF
  // Israeli new shekel	ILS
  // Japanese yen	JPY
  // Malaysian ringgit	MYR
  // Mexican peso	MXN
  // New Taiwan dollar	TWD
  // New Zealand dollar	NZD
  // Norwegian krone	NOK
  // Philippine peso	PHP
  // Polish złoty	PLN
  // Pound sterling	GBP
  // Russian ruble	RUB
  // Singapore dollar	SGD
  // Swedish krona	SEK
  // Swiss franc	CHF
  // Thai baht	THB
  // United States dollar	USD

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: total.toString(), // Convert the value to a string
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order
      .capture()
      .then((details) => {
        const url = details.links[0].href;
        console.log(url);
        console.log(details);
        const id = details.id;
        const status = details.status;
        if (status === "COMPLETED") {
          window.location.href = `/order/${slug}/completed`;
        }
      })
      .catch((error) => {
        console.error("Failed to capture order:", error);
        // Handle the error case here
      });
  };

  return (
    <PayPalScriptProvider options={{ "client-id": "test" }}>
      <PayPalButtons
        style={{
          layout: "vertical",
          color: "blue",
          shape: "rect",
          label: "paypal",
          tagline: false,
        }}
        createOrder={createOrder} // Use the local createOrder function
        onApprove={onApprove} // Use the local onApprove function
      />
    </PayPalScriptProvider>
  );
};
