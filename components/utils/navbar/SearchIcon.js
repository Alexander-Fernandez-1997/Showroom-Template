import React from "react";

export const SearchIcon = () => {
  const showSearch = () => {
    document.querySelector(".bigsearch").classList.add("show-modal-search");
  };

  return (
    <div
      onClick={showSearch}
      className="icon-header-item cl2 hov-cl1 trans-04  js-show-modal-search"
    >
      <i className="zmdi zmdi-search" />
    </div>
  );
};
