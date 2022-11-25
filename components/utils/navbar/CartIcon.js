import React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import useCart from "../../../store/store";
import { useRouter } from "next/router";

export const CartIcon = () => {
  const { asPath } = useRouter();

  const total = useCart((state) => state.total);
  const totalqty = useCart((state) => state.totalqty);
  const clearCart = useCart((state) => state.clearCart);

  const [mytotal, setTotal] = useState();
  const [mytotalqty, setTotalqty] = useState();

  useEffect(() => {
    setTotal(total);
    setTotalqty(totalqty);
  }, [total]);

  return (
    <li className={asPath === "/cart" ? "active-menu" : null}>
      <Link href="/cart">{`Cart : $${mytotal} / ${mytotalqty}`}</Link>
    </li>
  );
};
