import React from "react";
import { BiTrash } from "react-icons/bi";
import useCart from "../../store/store";

export const ProductData = ({ item }) => {
  const { id, name, color, size, price, quantity, img } = item;
  const remove = useCart((state) => state.removeFromCart);
  const update = useCart((state) => state.updateQty);
  return (
    <div className="row">
      <div className="col-3">
        <img
          src={img}
          alt=""
          className="img-fluid d-none d-md-block rounded mb-2 shadow "
        ></img>
      </div>
      <div className="col-9 d-flex">
        <div className="d-flex flex-column">
          <div>
            <h5>{name}</h5>
            <p>Size: {size}</p>
            <p>Color: {color}</p>
          </div>
          <div>
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
        </div>
        {/* // bloque derecho */}
        <div className="d-flex flex-column">
          <input
            type="number"
            className="form-control form-control-lg text-center"
            onChange={(e) => update({ qty: e.target.value, id })}
            min="0"
            value={quantity}
          />
          <p>${price}</p>
        </div>
      </div>
    </div>
  );
};
