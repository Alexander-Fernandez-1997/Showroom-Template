import React from "react";
import { Header } from "./confirmation/Header";

const OrderConfirmation = () => {
  return (
    <div className="container mt-2 bg-white">
      <h1>Order confirmation:</h1>
      <hr />
      <Header></Header>
    </div>
  );
};

export default OrderConfirmation;
