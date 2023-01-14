import React, { useState } from "react";
import { ClotheCard } from "./ClotheCard";
import { GridFilter } from "./GridFilter";
import { GridSearch } from "./GridSearch";
import { SearchButton } from "./SearchButton";
import { SortBy } from "./SortBy";

export const ClothesGrid = ({ clothesJson }) => {
  const [clothes, setClothes] = useState(clothesJson);
  const [categ, setCateg] = useState("");
  const [query, setQuery] = useState("");

  const getFilteredClothes = (q, clothe) => {
    if (q === "") {
      return clothe;
    } else {
      return clothe.filter((cloth) =>
        cloth.name.toLowerCase().includes(q.toLowerCase())
      );
    }
  };

  const sortByPrice = (clothes, sort) => {
    if (sort === "Mayor precio") {
      return clothes
        .sort((a, b) => b.variants[0].price - a.variants[0].price)
        .map((clothe) => {
          return {
            ...clothe,
            variants: clothe.variants.sort((a, b) => b.price - a.price),
          };
        });
    } else if (sort === "Menor precio") {
      return clothes
        .sort((a, b) => a.variants[0].price - b.variants[0].price)
        .map((clothe) => {
          return {
            ...clothe,
            variants: clothe.variants.sort((a, b) => a.price - b.price),
          };
        });
    } else {
      return clothes;
    }
  };

  const filteredClothes = getFilteredClothes(query, clothes);
  const sortedClothes = sortByPrice(filteredClothes, categ);

  return (
    <>
      <section className="bg0 p-t-23 p-b-140">
        <div className="container">
          <div className="p-b-10">
            <h3 className="ltext-103 cl5">Productos</h3>
          </div>

          <div className="flex-w flex-sb-m p-b-52">
            <SortBy setCateg={setCateg} categ={categ} />
            {/* <GridFilter setCateg={setCateg} categ={categ} /> */}
            <SearchButton></SearchButton>
            <GridSearch setQuery={setQuery}></GridSearch>
          </div>
          <div className="row isotope-grid">
            {sortedClothes === undefined || sortedClothes.length === 0 ? (
              <h1>No disponemos productos con ese nombre</h1>
            ) : (
              <>
                {sortedClothes.map((clothe) =>
                  clothe.variants.map((variant) => (
                    <div
                      key={variant.sku}
                      className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women"
                    >
                      <ClotheCard
                        variant={variant}
                        path={clothe.id}
                        name={clothe.name}
                      />
                    </div>
                  ))
                )}
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
