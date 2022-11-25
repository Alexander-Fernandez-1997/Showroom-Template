import React from "react";

export const Size = ({ variants, colorActive, sizeActive, setSize }) => {
  return (
    <>
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
    </>
  );
};
