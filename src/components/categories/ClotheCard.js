import Link from "next/link";
import React from "react";
import useCart from "../../store/store";
import { formatPrice } from "utils/price";

export const ClotheCard = ({ variant, path, name }) => {
  const { image, price, discount, discountPrice, size, color } = variant;
  const finalPrice = discount ? discountPrice : price;
  const addTocart = useCart((state) => state.addTocart);
  const updatecart = useCart((state) => state.updatecart);
  const mycart = useCart((state) => state.cartContent);
  const addProduct = (params) => {
    const product = mycart.findIndex((item) => item.id === params.id);
    if (product !== -1) {
      mycart[product].quantity++;
      updatecart({ params, mycart });
    } else {
      addTocart(params);
    }
  };
  return (
    <div className="block2">
      <div className="block2-pic hov-img0">
        <img src={image[0]} alt={name} />
        <Link
          href={`/${path}`}
          className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
        >
          Detalles
        </Link>
      </div>

      <div className="block2-txt flex-w flex-t p-t-14">
        <div className="block2-txt-child1 flex-col-l ">
          <a
            href="product-detail.html"
            className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
          >
            {name} {color}-{size}
          </a>

          <span className="stext-105 cl3">{formatPrice(finalPrice)}</span>
        </div>
        <div className="block2-txt-child2 flex-r p-t-3">
          <button
            className="btn btn-dark text-light bg3 c10 hov-btn3 bor1"
            onClick={() =>
              addProduct({
                id: variant.id,
                name: name,
                color: color,
                size: size,
                price: finalPrice,
                quantity: 1,
                img: image[0],
              })
            }
          >
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
};
