import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";
import useCart from "../../store/store";

export const Total = () => {
  const total = useCart((state) => state.total);
  const [mytotal, setTotal] = useState();
  useEffect(() => {
    setTotal(total);
  }, [total]);

  return (
    <div className="bor10 p-4 ">
      <div className="d-flex flex-column gap-3">
        <div className="text-caracteristic ">
          <div className="d-flex justify-content-between mb-2">
            <span>Subtotal</span>
            <span>${mytotal}</span>
          </div>
          <div className="flex flex-col gap-y-1">
            <div className="d-flex justify-content-between mb-2">
              <span>Shipping</span>
              <span>€0.00</span>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <span>Taxes</span>
              <span>€0.00</span>
            </div>
          </div>
          <hr></hr>
          <div className="d-flex justify-content-between mb-2">
            <span>Total</span>
            <span>${mytotal}</span>
          </div>
        </div>

        <Link
          href="/cart"
          className="flex-c-m stext-101 cl0 size-101 bg3 hov-btn3 p-lr-15 trans-04"
        >
          Ir al Checkout
        </Link>
      </div>
    </div>
  );
};
