"use client";
import React, { useEffect } from "react";
import useOrderInfo from "store/orderInfo";
import useCart from "store/store";

export const ClearCart = () => {
  const clearCart = useCart((state) => state.clearCart);
  const clearOrderInfo = useOrderInfo((state) => state.reset);
  useEffect(() => {
    console.log("clearing cart and order info");
    clearCart();
    clearOrderInfo();
  }, []);

  return null;
};
