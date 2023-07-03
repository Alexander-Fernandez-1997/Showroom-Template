"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { useEffect, useState } from "react";
import useCart from "../../store/store";
import { formatPrice } from "utils/price";
import useOrderInfo from "store/orderInfo";

export const Total = () => {
  const [mytotal, setTotal] = useState();
  const [providerPrice, setProviderPrice] = useState(0);

  const total = useCart((state) => state.total);
  const shippingProvider = useOrderInfo((state) => state.provider);

  useEffect(() => {
    setTotal(total);
    if (shippingProvider?.price && pathname === "/checkout") {
      setProviderPrice(shippingProvider.price);
    }
  }, [total, shippingProvider]);

  const pathname = usePathname();

  return (
    <div className="bor10 p-4 ">
      <div className="d-flex flex-column gap-3">
        <div className="text-caracteristic ">
          <div className="d-flex justify-content-between mb-2">
            <span>Subtotal</span>
            <span>{formatPrice(mytotal)}</span>
          </div>
          <div className="flex flex-col gap-y-1">
            <div className="d-flex justify-content-between mb-2">
              <span>Shipping</span>
              <span>{formatPrice(providerPrice)}</span>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <span>Taxes</span>
              <span>{formatPrice(0)}</span>
            </div>
          </div>
          <hr></hr>
          <div className="d-flex justify-content-between mb-2">
            <span>Total</span>
            <span>{formatPrice(mytotal + providerPrice)}</span>
          </div>
        </div>

        {/* // if current route is /cart then show the button "Ir al Checkout" */}
        {pathname === "/cart" && (
          <Link
            href="/checkout"
            className="flex-c-m stext-101 cl0 size-101 bg3 hov-btn3 p-lr-15 trans-04"
          >
            Ir al Checkout
          </Link>
        )}
      </div>
    </div>
  );
};
