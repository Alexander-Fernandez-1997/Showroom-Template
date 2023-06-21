import Link from "next/link";
import React from "react";

export const FooterInfo = () => {
  return (
    <div className="col-sm-6 col-lg-3 p-b-50">
      <h4 className="stext-301 cl0 p-b-30">Info</h4>
      <ul>
        <li className="p-b-10">
          <Link href="/locales" className="stext-107 cl7 hov-cl1 trans-04">
            Locales
          </Link>
        </li>
        <li className="p-b-10">
          <Link href="/nosotros" className="stext-107 cl7 hov-cl1 trans-04">
            Reembolsos
          </Link>
        </li>
        <li className="p-b-10">
          <Link href="/nosotros" className="stext-107 cl7 hov-cl1 trans-04">
            Envios
          </Link>
        </li>
        <li className="p-b-10">
          <Link href="/nosotros" className="stext-107 cl7 hov-cl1 trans-04">
            FAQs
          </Link>
        </li>
      </ul>
    </div>
  );
};
