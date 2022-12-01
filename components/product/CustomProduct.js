import React, { useState } from "react";
import { groupBy } from "../../utils/groupBy";
import { AddToCartFicha } from "./AddToCartFicha";
import { Colores } from "./details/Colores";
import { Description } from "./details/Description";
import { Price } from "./details/Price";
import { Size } from "./details/Size";
import { DinamicImgs } from "./DinamicImgs";
import { MobileImgs } from "./MobileImgs";
import { NoDisponible } from "./NoDisponible";

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

  const [colorActive, setColor] = useState(colors[0] || "");
  const [sizeActive, setSize] = useState(
    colors.length > 0 ? variants[colorActive][0].size : ""
  );

  const ActiveVariant =
    colors.length > 0
      ? variants[colorActive].find((v) => v.size === sizeActive) ||
        variants[colorActive][0]
      : undefined;

  ActiveVariant.size !== sizeActive ? setSize(ActiveVariant.size) : null;

  let colorPrice = colors.length > 0 ? true : false;
  let discount_price =
    ActiveVariant.discount === true
      ? ActiveVariant.discount_price
      : ActiveVariant.price;

  let activePrice = colorPrice && discount_price ? discount_price : price;

  if (ActiveVariant !== undefined) {
    return (
      <>
        <div className="pt-5 pb-5 container ">
          <div className="row pt-5 pb-5 justify-content-center">
            <DinamicImgs imgs={ActiveVariant.image} />
            <MobileImgs imgs={ActiveVariant.image} />

            <div className="col-12 col-md-5 col-lg-5">
              <div className="main-content">
                <h2 className="h2">{name}</h2>
                <Colores
                  colors={colors}
                  colorActive={colorActive}
                  setColor={setColor}
                />
                <Size
                  variants={variants}
                  colorActive={colorActive}
                  sizeActive={sizeActive}
                  setSize={setSize}
                ></Size>
                <Description description={description} />

                <div className="purchase-info">
                  <Price
                    ActiveVariant={ActiveVariant}
                    activePrice={activePrice}
                  />
                  <AddToCartFicha
                    id={ActiveVariant.id}
                    name={name}
                    color={ActiveVariant.color}
                    size={ActiveVariant.size}
                    price={activePrice}
                    quantity={1}
                    img={ActiveVariant.image[0]}
                  ></AddToCartFicha>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <NoDisponible></NoDisponible>;
  }
};
