import React from "react";
import { Header } from "./confirmation/Header";
import { Body } from "./confirmation/Body";
import { Footer } from "./confirmation/Footer";

const OrderConfirmation = () => {
  return (
    <div className="container mt-5 pt-5 bg-white border border-dark">
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
};

export default OrderConfirmation;
