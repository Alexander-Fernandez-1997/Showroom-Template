import React from "react";

export const DinamicImgs = ({ imgs }) => {
  const picZoomer = ({ target }) => {
    console.log(target);
    document.querySelector(".picZoomer img").src = target.src;
  };

  return (
    <div className="d-none d-md-block col-7 _boxzoom">
      <div className="zoom-thumb">
        <ul className="piclist">
          {imgs.map((img, i) => (
            <li key={i + img}>
              <img onClick={(e) => picZoomer(e)} src={img} alt=""></img>
            </li>
          ))}
        </ul>
      </div>
      <div className="_product-images">
        <div className="picZoomer">
          <img className="my_img" src={imgs[0]} alt=""></img>
        </div>
      </div>
    </div>
  );
};
