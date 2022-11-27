import React from "react";
import useCart from "../../store/store";
import { BiTrash } from "react-icons/bi";

export const ModalProduct = ({ item }) => {
  const { id, name, color, size, price, quantity, img } = item;
  const remove = useCart((state) => state.removeFromCart);
  const update = useCart((state) => state.updateQty);
  return (
    <tr>
      <td className="w-25">
        <img src={img} className="img-fluid img-thumbnail" alt="Sheep" />
      </td>
      <td>
        {name}
        <br />
        {color}-{size}
      </td>
      <td>${price}</td>
      <td className="qty">
        <input
          type="number"
          className="form-control"
          defaultValue={quantity}
          onChange={(e) => update({ qty: e.target.value, id })}
          min="0"
        />
      </td>

      <td>
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
      </td>
    </tr>
  );
};
