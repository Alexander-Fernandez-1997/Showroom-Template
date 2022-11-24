import React from "react";
import { FilterButton } from "./FilterButton";

export const GridFilter = ({ setCateg, categ }) => {
  const categories = ["Todos", "Hombre", "Mujer", "Niño", "Niña"];
  return (
    <div className="flex-w flex-l-m filter-tope-group m-tb-10">
      {categories.map((category) => (
        <FilterButton
          key={category}
          text={category}
          setCateg={setCateg}
          categ={categ}
        />
      ))}
    </div>
  );
};
