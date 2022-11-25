import React from "react";

export const Colores = ({ colors, colorActive, setColor }) => {
  return (
    <>
      <h3 className="h3">Colores:</h3>
      <div className="coloresContainer">
        {colors.map((color, i) => (
          <div
            key={i + color}
            className={`colorEsfera ${colorActive === color ? "active" : ""}`}
            style={{ backgroundColor: `${color}` }}
            onClick={() => setColor(color)}
          ></div>
        ))}
      </div>
    </>
  );
};
