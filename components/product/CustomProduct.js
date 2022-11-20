import Link from "next/link";
import React from "react";

export const CustomProduct = ({ clothe }) => {
  const product = clothe[0].rows[0];
  const variant = clothe[1].rows;
  const { slug, name, price, image_main, description } = product;
  console.log(product);
  console.log(variant);
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
            style={{ backgroundImage: `url(${image_main})` }}
            id="product-img"
          ></div>
          {/* Cubo derecho */}
          <div className="window col-10 col-md-5 col-lg-4">
            <div className="main-content">
              <h2 className="h2">{slug}</h2>
              <h1 className="h1">{name}</h1>
              <h3 className="h3">Colores:</h3>
              <div className="coloresContainer">
                <div
                  className="colorEsfera"
                  style={{ backgroundColor: `red` }}
                ></div>
              </div>
              <h3 className="h3 mt-3">Tallas:</h3>
              <div className="coloresContainer">
                <h5 className="tallaEsfera">S</h5>
              </div>
              <div className="description2" id="description2">
                {description}
              </div>

              <div className="options"></div>
              <div className="divider" />
              <div className="purchase-info">
                <div className="price">${price}</div>
                <Link
                  href="/contacto"
                  className="flex-c-m stext-101 cl0 size-101 bg3 bor1 hov-btn3 p-lr-15 trans-04"
                >
                  Contacto
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
