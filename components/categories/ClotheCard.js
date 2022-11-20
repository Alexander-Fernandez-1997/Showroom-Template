import Link from "next/link";
import React from "react";

export const ClotheCard = ({ clothe }) => {
  const { id, name, price, image_main } = clothe;
  return (
    <div className="block2">
      <div className="block2-pic hov-img0">
        <img src={image_main} alt={name} />
        <Link
          href={`/${id}`}
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
            {name}
          </a>
          <span className="stext-105 cl3">${price}</span>
        </div>
        <div className="block2-txt-child2 flex-r p-t-3">
          <Link href="/contacto" legacyBehavior>
            <button className="btn text-light bg3 c10 hov-btn3 bor1">
              Contactanos
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
