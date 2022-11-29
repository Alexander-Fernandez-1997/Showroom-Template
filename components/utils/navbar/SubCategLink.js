import Link from "next/link";
import React from "react";

export const SubCategLink = ({ subCateg }) => {
  return (
    <li>
      <Link
        className="dropdown-item"
        href={`/categorias/remera/${subCateg.slug}`}
      >
        {subCateg.name}
      </Link>
    </li>
  );
};
