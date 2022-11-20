import Link from "next/link";
import React, { useState } from "react";
import { groupBy } from "../../utils/groupBy";
import { DinamicImgs } from "./DinamicImgs";
import { MobileImgs } from "./MobileImgs";

export const CustomProduct = ({ clothe }) => {
  const { name, price, description } = clothe[0].rows[0];
  const variant = clothe[1].rows;
  const variantsGrouped = groupBy(variant, "color");
  const variants = Object.keys(variantsGrouped).reduce((acc, key) => {
    const filtered = variantsGrouped[key].filter((item) => item.quantity > 0);
    if (filtered.length > 0) {
      acc[key] = filtered;
    }
    return acc;
  }, {});
  const colors = Object.keys(variants);

  const [colorActive, setColor] = useState(colors[0]);
  const [sizeActive, setSize] = useState(variants[colorActive][0].size);

  const ActiveVariant = variants[colorActive].find(
    (v) => v.size === sizeActive
  );

  let activePrice = ActiveVariant.discount
    ? ActiveVariant.discount_price
    : ActiveVariant.price || price;
  console.log("x", ActiveVariant);

  return (
    <>
      <div className="pt-5 pb-5 container ">
        <div className="row pt-5 pb-5 justify-content-center">
          <DinamicImgs imgs={ActiveVariant.image} />
          <MobileImgs imgs={ActiveVariant.image} />

          <div className="col-12 col-md-5 col-lg-5">
            <div className="main-content">
              <h2 className="h2">{name}</h2>
              {/* <h1 className="h1">{name}</h1> */}
              <h3 className="h3">Colores:</h3>
              <div className="coloresContainer">
                {colors.map((color, i) => (
                  <div
                    key={i + color}
                    className={`colorEsfera ${
                      colorActive === color ? "active" : ""
                    }`}
                    style={{ backgroundColor: `${color}` }}
                    onClick={() => setColor(color)}
                  ></div>
                ))}
              </div>
              <h3 className="h3 mt-2">Tallas:</h3>
              <div className="coloresContainer">
                {variants[colorActive].map((size, i) => (
                  <h5
                    key={i + size.size}
                    className={`tallaEsfera ${
                      sizeActive === size.size ? "active" : ""
                    }`}
                    onClick={() => setSize(size.size)}
                  >
                    {size.size}
                  </h5>
                ))}
              </div>
              <div className="description2" id="description2">
                {description}
              </div>

              <div className="options"></div>
              <div className="divider" />
              <div className="purchase-info">
                <div className="price">
                  <span
                    className={ActiveVariant.discount ? "old-price" : "d-none"}
                  >
                    ${ActiveVariant.price || price}
                  </span>{" "}
                  ${activePrice}
                </div>
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
