import React from "react";
import { AccountOrderListItem } from "./AccountOrderListItem";

export const AccountRecentOrders = ({ tittle, orders }) => {
  return (
    <div>
      <h4>{tittle}</h4>
      {orders.map((order) => {
        return <AccountOrderListItem order={order} />;
      })}
    </div>
  );
};
