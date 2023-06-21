import Link from "next/link";
import React from "react";

export const SubCategLink = ({ subCateg, mainSlug }) => {
  return (
    <li>
      <Link
        className="dropdown-item"
        href={`/categorias/${mainSlug}/${subCateg.slug}`}
        as={`/categorias/${mainSlug}/${subCateg.slug}`}
      >
        {subCateg.name}
      </Link>
    </li>
  );
};
