import React from "react";

export const Product = ({ item, remove }) => {
  const { id, name, color, size, price, quantity, img } = item;
  const updateQuantity = (e) => {
    console.log(e.target.value);
  };

  return (
    <tr>
      <td data-th="Product">
        <div className="row">
          <div className="col-md-2 text-left">
            <img
              src={img}
              alt=""
              className="img-fluid d-none d-md-block rounded mb-2 shadow "
            />
          </div>
          <div className="col-md-4 text-left mt-sm-2">
            <h4>{name}</h4>
            <p className="font-weight-light p-color">
              Color:
              <div
                className="colorEsfera"
                style={{ backgroundColor: `${color}` }}
              ></div>
            </p>
            <p className="font-weight-light">Talle: {size}</p>
          </div>
        </div>
      </td>
      <td data-th="Price">${price}</td>
      <td data-th="Quantity">
        <input
          type="number"
          className="form-control form-control-lg text-center"
          defaultValue={quantity}
          onChange={updateQuantity}
        />
      </td>
      <td className="actions" data-th="">
        <div className="text-right">
          <button className="btn btn-white border-secondary bg-white btn-md mb-2">
            <i className="fas fa-sync" />
          </button>
          {/* <button className="btn btn-white border-secondary bg-white btn-md mb-2">
            <i className="fas fa-trash" />
          </button> */}
          <button
            className="p-2 bg-slate-200"
            onClick={() =>
              remove({
                id: item.id,
                name: item.name,
                color: item.color,
                size: item.size,
                price: item.price,
                quantity: item.quantity,
                img: item.img,
              })
            }
          >
            X
          </button>
        </div>
      </td>
    </tr>
  );
};
