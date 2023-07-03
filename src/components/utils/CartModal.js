"use client";
import Link from "next/link";
import React from "react";
import useCart from "../../store/store";
import { useEffect, useState } from "react";
import { ModalProduct } from "../cart/ModalProduct";
import { formatPrice } from "utils/price";

export const CartModal = () => {
  const total = useCart((state) => state.total);
  const cart = useCart((state) => state.cartContent);
  const [mycart, setCart] = useState([]);
  const [mytotal, setTotal] = useState();
  useEffect(() => {
    setCart(cart);
    setTotal(total);
  }, [cart, total]);

  return (
    <div
      className="offcanvas offcanvas-end"
      tabIndex={-1}
      id="offcanvasCart"
      aria-labelledby="offcanvasCartLabel"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasCartLabel">
          Tu carrito de compras
        </h5>
        <button
          type="button"
          className="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        />
      </div>
      <div className="offcanvas-body">
        <table className="table table-image">
          <thead>
            <tr>
              <th scope="col" />
              <th scope="col">Producto</th>
              <th scope="col">Precio</th>
              <th scope="col">Cantidad</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {mycart.map((item, key) => (
              <ModalProduct key={key} item={item}></ModalProduct>
            ))}
          </tbody>
        </table>
        <div className="d-flex align-content-center justify-content-between">
          <h5 className="mt-3 mb-4 price">Subtotal:</h5>
          <h5 className="mt-3 mb-4 price text-dark">{formatPrice(mytotal)}</h5>
        </div>

        <div className="d-flex flex-column justify-content-center gap-2 align-items-center mt-2">
          <Link href="/cart" className="btn btn-dark w-75">
            Ir al carrito
          </Link>
          <button
            type="button"
            className="btn btn-secondary w-75"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            Seguir comprando
          </button>
        </div>
      </div>
    </div>
  );
};
