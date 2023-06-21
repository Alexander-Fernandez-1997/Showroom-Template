import React from "react";

export const GridSearch = ({ setQuery }) => {
  return (
    <div className="dis-none panel-search w-full p-t-10 p-b-15 litte-bar">
      <div className="bor8 dis-flex p-l-15">
        <button className="size-113 flex-c-m fs-16 cl2 hov-cl1 trans-04">
          <i className="zmdi zmdi-search" />
        </button>
        <input
          onChange={(e) => setQuery(e.target.value)}
          className="mtext-107 cl2 size-114 plh2 p-r-15 barraReset"
          type="text"
          name="search-product"
          placeholder="Buscar"
          autoComplete="off"
        />
      </div>
    </div>
  );
};
