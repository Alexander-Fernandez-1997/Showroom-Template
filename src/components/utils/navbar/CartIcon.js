import React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import useCart from "../../../store/store";
import { useRouter } from "next/router";
import { FiShoppingBag } from "react-icons/fi";

export const CartIcon = () => {
  const { asPath } = useRouter();
  const totalqty = useCart((state) => state.totalqty);
  const [mytotalqty, setTotalqty] = useState();

  useEffect(() => {
    setTotalqty(totalqty);
  }, [totalqty]);

  return (
    <li className={asPath === "/cart" ? "active-menu" : null}>
      <Link
        data-bs-toggle="offcanvas"
        href="#offcanvasCart"
        role="button"
        aria-controls="offcanvasCart"
      >
        <FiShoppingBag size={"1.2rem"} />
        <span className="badge">{mytotalqty > 0 ? mytotalqty : null}</span>
      </Link>
    </li>
  );
};
