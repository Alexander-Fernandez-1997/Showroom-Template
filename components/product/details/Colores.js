import React from "react";

export const Colores = ({ colors, colorActive, setColor }) => {
  return (
    <>
      <h3 className="h3 mt-2 mb-2">Colores:</h3>
      <div className="div-caracteristic">
        {colors.map((color, i) => (
          <button
            key={i + color}
            className={`btn-caracteristic ${
              colorActive === color ? "active" : ""
            }`}
            // style={{ backgroundColor: `${color}` }}
            onClick={() => setColor(color)}
          >
            {color}
          </button>
        ))}
      </div>
    </>
  );
};
