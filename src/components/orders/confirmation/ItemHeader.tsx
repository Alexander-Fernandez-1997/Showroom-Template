import React from "react";
import { formatPrice } from "utils/price";

export const ItemHeader = ({ item }) => {
  const { name, price, quantity, img } = item;
  return (
    <tr className="mt-2  border-top border-top-secondary">
      <td data-th="Product">
        <div className="row">
          <div className="col-md-2 text-left">
            <img
              src={img}
              alt=""
              className="img-fluid d-none d-md-block rounded mb-2 shadow "
            />
          </div>
          <div className="col-md-8 text-left mt-sm-2">
            <h5>{name}</h5>

            <p className="font-weight-light">Cantidad: {quantity}</p>
          </div>
        </div>
      </td>
      <td data-th="Price">
        <div className="d-flex flex-column justify-content-between align-items-end flex-grow-1">
          <h5 className="mt-2">
            Precio unitario:{" "}
            <span className="text-muted">{formatPrice(price)}</span>
          </h5>
          <h5 className="mt-2">
            Precio total:{" "}
            <span className="text-muted">{formatPrice(price * quantity)}</span>
          </h5>
        </div>
      </td>
    </tr>
  );
};
