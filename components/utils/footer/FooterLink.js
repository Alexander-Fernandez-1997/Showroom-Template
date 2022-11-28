import Link from "next/link";
import React from "react";

export const FooterLink = ({ slug = "", name = "" }) => {
  return (
    <li className="p-b-10">
      <Link href={`/${slug}`} className="stext-107 cl7 hov-cl1 trans-04">
        {name}
      </Link>
    </li>
  );
};
