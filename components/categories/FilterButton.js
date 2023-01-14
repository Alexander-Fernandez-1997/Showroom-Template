import React from "react";

export const FilterButton = ({ text, setCateg, categ }) => {
  return (
    <button
      className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
      onClick={(e) => {
        setCateg(text);
      }}
      style={
        categ === text ? { color: "#17a2b8", borderColor: "#17a2b8" } : null
      }
    >
      {text}
    </button>
  );
};
