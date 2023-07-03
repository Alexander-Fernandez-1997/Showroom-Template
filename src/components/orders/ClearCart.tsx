"use client";
import React, { useEffect } from "react";
import useCart from "store/store";

export const ClearCart = () => {
  const clearCart = useCart((state) => state.clearCart);
  useEffect(() => {
    console.log("clearing cart");
    clearCart();
  }, []);

  return null;
};
