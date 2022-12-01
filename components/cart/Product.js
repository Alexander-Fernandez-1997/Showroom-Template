import React from "react";
import { BiTrash } from "react-icons/bi";
import useCart from "../../store/store";

export const Product = ({ item }) => {
  const { id, name, color, size, price, quantity, img } = item;
  const remove = useCart((state) => state.removeFromCart);
  const update = useCart((state) => state.updateQty);

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
              <span
                className="colorEsfera"
                style={{ backgroundColor: `${color}` }}
              ></span>
            </p>
            <p className="font-weight-light">Talle: {size}</p>
          </div>
        </div>
      </td>
      <td data-th="Price">
        <h4 className="mt-2">${price}</h4>
      </td>
      <td data-th="Quantity">
        <input
          type="number"
          className="form-control form-control-lg text-center"
          defaultValue={quantity}
          onChange={(e) => update({ qty: e.target.value, id })}
          min="0"
          value={quantity}
        />
      </td>
      <td className="actions" data-th="">
        <div className="text-right">
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
            <BiTrash></BiTrash>
          </button>
        </div>
      </td>
    </tr>
  );
};
