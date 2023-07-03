import React from "react";
import { Header } from "./confirmation/Header";
import { Body } from "./confirmation/Body";
import { Footer } from "./confirmation/Footer";

const OrderConfirmation = ({ order }: { order: any }) => {
  return (
    <div className="container m-2 mt-md-5 pt-2 pt-md-5 bg-white border border-dark">
      <Header order={order}></Header>
      <Body order={order}></Body>
      <Footer></Footer>
    </div>
  );
};

export default OrderConfirmation;
