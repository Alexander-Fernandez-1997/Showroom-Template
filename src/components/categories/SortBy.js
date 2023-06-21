import React from "react";
import { FilterButton } from "./FilterButton";

export const SortBy = ({ setCateg, categ }) => {
  const filters = ["Novedades", "Mayor precio", "Menor precio"];

  return (
    <div className="flex-w flex-l-m filter-tope-group m-tb-10">
      <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5">
        Ordenar por:
      </button>
      {filters.map((filter) => (
        <FilterButton
          key={filter}
          text={filter}
          setCateg={setCateg}
          categ={categ}
        />
      ))}
    </div>
  );
};
