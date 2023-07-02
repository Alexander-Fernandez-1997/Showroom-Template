import React from "react";

export const ItemHeader = ({ item }) => {
  const { id, name, color, size, price, quantity, img } = item;

  return (
    <tr className="mt-2  border-top border-top-secondary">
      <td data-th="Product">
        <div className="row">
          <div className="col-md-4 text-left">
            <img
              src={img}
              alt=""
              className="img-fluid d-none d-md-block rounded mb-2 shadow "
            />
          </div>
          <div className="col-md-8 text-left mt-sm-2">
            <h5>{name}</h5>
            <p className="font-weight-light p-color">
              Color:
              <span
                className="colorEsfera"
                style={{ backgroundColor: `${color}` }}
              ></span>
            </p>
            <p className="font-weight-light">Talle: {size}</p>
            <p className="font-weight-light">Cantidad: {quantity}</p>
          </div>
        </div>
      </td>
      <td data-th="Price">
        <h3 className="mt-2">
          Precio unitario: <span className="text-muted">${price}</span>
        </h3>
      </td>
    </tr>
  );
};
