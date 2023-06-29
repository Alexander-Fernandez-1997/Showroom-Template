"use client";
import React from "react";
import { Product } from "./Product";
import { useEffect, useState } from "react";
import useCart from "../../store/store";

export const CartTable = () => {
  const total = useCart((state) => state.total);
  const cart = useCart((state) => state.cartContent);
  const [mycart, setCart] = useState([]);
  const [mytotal, setTotal] = useState();
  useEffect(() => {
    setCart(cart);
    setTotal(total);
  }, [cart, total]);

  return (
    <table id="shoppingCart" className="table table-condensed table-responsive">
      <thead>
        <tr>
          <th style={{ width: "40%" }}>Producto</th>
          <th style={{ width: "12%" }}>Precio</th>
          <th style={{ width: "10%" }}>Cantidad</th>
          <th style={{ width: "16%" }} />
        </tr>
      </thead>
      <tbody>
        {mycart.map((item, key) => (
          <Product key={key} item={item}></Product>
        ))}
      </tbody>
    </table>
  );
};
