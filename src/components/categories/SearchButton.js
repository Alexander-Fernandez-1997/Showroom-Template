import React from "react";
import { FiSearch } from "react-icons/fi";

export const SearchButton = () => {
  const DisplaySearchBar = () => {
    document.querySelector(".litte-bar").classList.toggle("dis-none");
  };

  return (
    <div className="flex-w flex-c-m m-tb-10">
      <div
        onClick={DisplaySearchBar}
        className="flex-c-m stext-106 cl6 size-105 bor4 pointer hov-btn3 trans-04 m-tb-4 js-show-search gap-2"
      >
        <FiSearch />
        Buscar
      </div>
    </div>
  );
};
