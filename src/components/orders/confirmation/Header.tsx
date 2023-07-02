import React from "react";
import { ItemHeader } from "./ItemHeader";

export const Header = () => {
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
        <h1 className="mt-2 uppercase text-2xl-semi">#ID</h1>
        <span>SLU: G5646546465454654654FAS</span>
        <div className="flex items-center text-gray-700 text-small-regular gap-x-4 mt-4">
          <span>Fecha: Domingo 2 de julio 2023</span>
          <br />
          <span>Cantidad de items total: 2</span>
        </div>
      </div>
      <table
        id="shoppingCart"
        className="mt-4 mb-4 table table-condensed table-responsive"
      >
        <tbody>
          <ItemHeader item={item} />
          <ItemHeader item={item} />
        </tbody>
      </table>
    </>
  );
};
