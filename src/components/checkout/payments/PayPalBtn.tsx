import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import React from "react";

export const PayPalBtn = ({ total }) => {
  if (total === null) {
    return null;
  }

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
          alert(`Transaction ${id} completed by ${url}`);
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
