import Link from "next/link";
import React from "react";

export const CustomProduct = ({ id, name, category, image, description }) => {
  console.log(image);
  return (
    <>
      <div className="customprision ">
        <div className="container3 row pt-5 pb-5">
          <div
            className="background-element mt-5"
            id="background-element"
          ></div>
          <div
            className="highlight-window col-10 col-md-5 col-lg-4"
            style={{ backgroundImage: `url(${image})` }}
            id="product-img"
          ></div>
          <div className="window col-10 col-md-5 col-lg-4">
            <div className="main-content">
              <h2 className="h2">{category}</h2>
              <h1 className="h1">{name}</h1>
              <h3 className="h3">Para compras mayoristas o minoristas</h3>
              <div className="description2" id="description2">
                {description}
              </div>

              <div className="options"></div>
              <div className="divider" />
              <div className="purchase-info">
                <div className="price">Linea directa</div>
                <Link href="/contacto">
                  <a className="flex-c-m stext-101 cl0 size-101 bg3 bor1 hov-btn3 p-lr-15 trans-04">
                    Contacto
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
