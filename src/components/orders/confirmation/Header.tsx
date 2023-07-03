import React from "react";
import { ItemHeader } from "./ItemHeader";
import { dateFormat } from "utils/dates";

export const Header = ({ order }) => {
  const { id, slug, createdAt, order_items } = order;
  const formateddate = dateFormat(new Date(createdAt));
  const items_length = order_items.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);
  const item = {
    id: 1,
    name: "Remera",
    color: "red",
    size: "M",
    price: 100,
    quantity: 1,
    img: "https://via.placeholder.com/150",
  };
  return (
    <>
      <div className="p-10 border-b border-gray-200">
        <span className="text-gray-700 text-small-regular uppercase">
          Thank you, your order was successfully placed
        </span>
        <h1 className="mt-2 uppercase text-2xl-semi">#{id}</h1>
        <span>SLUG: {slug}</span>
        <div className="flex items-center text-gray-700 text-small-regular gap-x-4 mt-4">
          <span>Fecha: {formateddate}</span>
          <br />
          <span>Cantidad de items total: {items_length}</span>
        </div>
      </div>
      <table
        id="shoppingCart"
        className="mt-4 mb-4 table table-condensed table-responsive"
      >
        <tbody>
          {order_items.map((item) => (
            <ItemHeader key={item.id} item={item} />
          ))}
        </tbody>
      </table>
    </>
  );
};
