import Link from "next/link";
import React from "react";

export const AccountListItem = ({
  tittle,
  href,
}: {
  tittle: string;
  href: string;
}) => {
  return (
    <li className="list-group-item">
      <Link className="text-dark" href={href}>
        {tittle}
      </Link>
    </li>
  );
};
