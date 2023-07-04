import React from "react";
import { AccountListItem } from "./AccountListItem";

import Link from "next/link";
import { AccountLogout } from "./AccountLogout";

export const AccountList = ({ id }) => {
  const account_links = [
    { tittle: "Profile", href: `/account/${id}/profile` },
    { tittle: "Addresses", href: `/account/${id}/addresses` },
    { tittle: "Orders", href: `/account/${id}/orders` },
  ];

  return (
    <div className="col-12 col-md-3 pt-3 ">
      <ul className="list-group list-group-flush">
        <Link href={`/account/${id}`} className="list-group-item text-dark">
          <h5>Account</h5>
        </Link>
        {account_links.map((link) => {
          return <AccountListItem tittle={link.tittle} href={link.href} />;
        })}
        <AccountLogout />
      </ul>
    </div>
  );
};
