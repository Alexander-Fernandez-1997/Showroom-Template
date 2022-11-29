import Link from "next/link";
import React from "react";

export const SubCategLink = ({ subCateg }) => {
  const { name, slug } = subCateg;
  return (
    <li>
      <Link className="dropdown-item" href={`/${slug}`}>
        {name}
      </Link>
    </li>
  );
};
