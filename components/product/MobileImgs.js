import React from "react";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";

export const MobileImgs = ({ imgs }) => {
  return (
    <div className="d-block d-md-none col-12">
      <Flicking circular={true}>
        {imgs.map((img, i) => (
          <div key={i} style={{ padding: "1rem" }}>
            <div className="wrap-slick2">
              <div className="slick2">
                <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
                  <img src={img} alt="img" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Flicking>
    </div>
  );
};
