import React from "react";

export const SearchButton = () => {
  const DisplaySearchBar = () => {
    document.querySelector(".litte-bar").classList.toggle("dis-none");
  };

  return (
    <div className="flex-w flex-c-m m-tb-10">
      <div
        onClick={DisplaySearchBar}
        className="flex-c-m stext-106 cl6 size-105 bor4 pointer hov-btn3 trans-04 m-tb-4 js-show-search"
      >
        <i className="icon-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-search" />
        <i className="icon-close-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none" />
        Buscar
      </div>
    </div>
  );
};
