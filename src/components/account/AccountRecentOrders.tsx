import React from "react";
import { AccountOrderListItem } from "./AccountOrderListItem";

export const AccountRecentOrders = ({ orders }) => {
  return (
    <div>
      <h4>Recent orders</h4>
      {orders.map((order) => {
        return <AccountOrderListItem order={order} />;
      })}
    </div>
  );
};
