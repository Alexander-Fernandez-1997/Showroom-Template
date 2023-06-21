import React from "react";

export const Size = ({ variants, colorActive, sizeActive, setSize }) => {
  return (
    <>
      <h3 className="h3 mt-2 mb-2">Tallas:</h3>
      <div className="div-caracteristic">
        {variants[colorActive].map((size, i) => (
          <button
            key={i + size.size}
            className={`btn-caracteristic ${
              sizeActive === size.size ? "active" : ""
            }`}
            onClick={() => setSize(size.size)}
          >
            {size.size}
          </button>
        ))}
      </div>
    </>
  );
};
