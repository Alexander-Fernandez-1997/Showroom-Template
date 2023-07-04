import React from "react";
import { AccountList } from "./AccountList";
import { AccountHeader } from "./AccountHeader";

export const AccountContainer = ({ children, id }) => {
  return (
    <div className="row container border border-dark p-md-5 mt-3 mb-3">
      <AccountList id={id} />
      <div className="col-12 col-md-9 p-3">
        <AccountHeader />
        {children}
      </div>
    </div>
  );
};
