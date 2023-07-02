import { Wallet } from "@mercadopago/sdk-react";
import React from "react";

export const MercadoPagoBtn = ({ preference }) => {
  if (preference === null) {
    return null;
  }
  return (
    <Wallet
      initialization={{
        preferenceId: preference,
        redirectMode: "modal",
      }}
    ></Wallet>
  );
};
