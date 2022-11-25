import Link from "next/link";
import React from "react";
import useCart from "../../store/store";

export const AddToCartFicha = ({
  id,
  name,
  color,
  size,
  price,
  quantity,
  img,
}) => {
  const addTocart = useCart((state) => state.addTocart);
  const updatecart = useCart((state) => state.updatecart);
  const mycart = useCart((state) => state.cartContent);
  const addProduct = (params) => {
    const product = mycart.findIndex((item) => item.id === params.id);
    if (product !== -1) {
      mycart[product].quantity++;
      updatecart({ params, mycart });
    } else {
      addTocart(params);
    }
  };
  return (
    <Link
      onClick={() =>
        addProduct({
          id: id,
          name: name,
          color: color,
          size: size,
          price: price,
          quantity: quantity,
          img: img,
        })
      }
      href="#"
      className="flex-c-m stext-101 cl0 size-101 bg3 bor1 hov-btn3 p-lr-15 trans-04"
    >
      Agregar al carrito
    </Link>
  );
};
