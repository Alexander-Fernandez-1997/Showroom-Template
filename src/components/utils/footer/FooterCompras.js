import Link from "next/link";
import React from "react";

export const FooterCompras = () => {
  return (
    <div className="col-sm-6 col-lg-3 p-b-50">
      <h4 className="stext-301 cl0 p-b-30">Compras</h4>

      <p className="stext-107 cl7 size-201">
        Para realizar compras al por mayor o menor les dejaremos nuestra
      </p>
      <div className="focus-input1 trans-04" />

      <div className="p-t-18">
        <Link href="/contacto" legacyBehavior>
          <button className="flex-c-m stext-101 cl0 size-103 bg1 bor1 hov-btn2 p-lr-15 trans-04">
            Linea directa
          </button>
        </Link>
      </div>
    </div>
  );
};
