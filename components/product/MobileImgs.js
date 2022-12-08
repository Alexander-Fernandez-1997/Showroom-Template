import React from "react";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import { TbArrowBigLeft, TbArrowBigRight } from "react-icons/tb";
import { FlickingError, ERROR_CODE } from "@egjs/flicking";

export const MobileImgs = ({ imgs }) => {
  const flickingRef = React.useRef(null);
  const next = async () => {
    try {
      await flickingRef.current.next();
    } catch (e) {
      if (
        e instanceof FlickingError &&
        e.code === ERROR_CODE.ELEMENT_NOT_FOUND
      ) {
        console.log("error");
      }
    }
  };
  const prev = async () => {
    try {
      await flickingRef.current.prev();
    } catch (e) {
      if (
        e instanceof FlickingError &&
        e.code === ERROR_CODE.ELEMENT_NOT_FOUND
      ) {
        console.log("error");
      }
    }
  };
  return (
    <div className="d-block d-md-none col-12">
      <Flicking circular={true} ref={flickingRef}>
        {/* // create 2 buttons to move the flicking to the next/previous panel */}
        {imgs.map((img, i) => (
          <div key={i} style={{ width: "100vw" }}>
            <div className="wrap-slick2">
              <div className="slick2">
                <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
                  <button class="nextArrow" onClick={prev}>
                    <TbArrowBigLeft size={"2rem"} color={"#fff"} />
                  </button>
                  <img src={img} alt="img" />
                  <button class="prevArrow" onClick={next}>
                    <TbArrowBigRight size={"2rem"} color={"#fff"} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Flicking>
    </div>
  );
};
