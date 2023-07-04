import React from "react";
import { AccountListItem } from "./AccountListItem";
import { AccountLogout } from "./AccountLogout";
import { getAccountLinks } from "utils/account";

export const AccountList = ({ id }) => {
  const account_links = getAccountLinks(id);

  return (
    <div className="col-12 col-md-3 pt-3 ">
      <ul className="list-group list-group-flush">
        {account_links.map((link) => {
          return (
            <AccountListItem
              key={link.href}
              tittle={link.tittle}
              href={link.href}
            />
          );
        })}
        <AccountLogout />
      </ul>
    </div>
  );
};
