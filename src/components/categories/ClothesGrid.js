"use client";
import React, { useState } from "react";
import { ConditionalGrid } from "./ConditionalGrid";
import { GridSearch } from "./GridSearch";
import { SearchButton } from "./SearchButton";
import { SortBy } from "./SortBy";
import { getFilteredClothes, sortByPrice } from "../../utils/gridFilters";

export const ClothesGrid = ({ clothesJson }) => {
  const [clothes, setClothes] = useState(clothesJson);
  const [categ, setCateg] = useState("");
  const [query, setQuery] = useState("");

  const filteredClothes = getFilteredClothes(query, clothes) || [];

  const variants =
    filteredClothes !== []
      ? filteredClothes.map((clothe) =>
          clothe.variants.map((variant) => ({
            ...variant,
            clotheName: clothe.name,
          }))
        )
      : [];
  const sortedClothes = sortByPrice(variants.flat(), categ) || [];

  return (
    <>
      <section className="bg0 p-t-23 p-b-140">
        <div className="container">
          <div className="p-b-10">
            <h3 className="ltext-103 cl5">Productos</h3>
          </div>
          <div className="flex-w flex-sb-m p-b-52">
            <SortBy setCateg={setCateg} categ={categ} />
            <SearchButton></SearchButton>
            <GridSearch setQuery={setQuery}></GridSearch>
          </div>
          <ConditionalGrid sortedClothes={sortedClothes} />
        </div>
      </section>
    </>
  );
};
