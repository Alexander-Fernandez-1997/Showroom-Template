import React, { useState } from "react";
import { ClotheCard } from "./ClotheCard";

export const ClothesGrid = ({ clothesJson, query, setQuery }) => {
  const [clothes, setClothes] = useState(clothesJson);
  const [categ, setCateg] = useState("");

  const getFilteredClothes = (q, clothe, cate) => {
    if (q === "" && cate === "") {
      return clothe;
    } else if (q === "" && cate !== "") {
      return clothe.filter((clothe) =>
        clothe.category.toLowerCase().includes(cate.toLowerCase())
      );
    } else if (q !== "" && cate !== "") {
      setCateg("");
      return clothe.filter((cloth) =>
        cloth.name.toLowerCase().includes(q.toLowerCase())
      );
    } else if (q !== "" && cate === "") {
      return clothe.filter((cloth) =>
        cloth.name.toLowerCase().includes(q.toLowerCase())
      );
    }
  };

  const filteredClothes = getFilteredClothes(query, clothes, categ);

  const DisplaySearchBar = () => {
    const searchbar = document.querySelector(".litte-bar");
    if (searchbar.style.display === "none") {
      searchbar.style.display = "block";
    } else {
      searchbar.style.display = "none";
    }
  };

  const SelectCategory = (cat) => {
    setQuery("");
    setCateg(cat);
    document.querySelector(".barraReset").value = "";
    document.querySelector(".litte-bar").style.display = "none";
  };

  return (
    <>
      <section className="bg0 p-t-23 p-b-140">
        <div className="container">
          <div className="p-b-10">
            <h3 className="ltext-103 cl5">Productos</h3>
          </div>
          <div className="flex-w flex-sb-m p-b-52">
            <div className="flex-w flex-l-m filter-tope-group m-tb-10">
              <button
                className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 "
                data-filter="*"
                onClick={(e) => {
                  setQuery("");
                  setCateg("");
                  document.querySelector(".barraReset").value = "";
                  document.querySelector(".litte-bar").style.display = "none";
                }}
                style={
                  categ === ""
                    ? { color: "#17a2b8", borderColor: "#17a2b8" }
                    : null
                }
              >
                Todo
              </button>
              <button
                className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
                data-filter=".shoes"
                onClick={(e) => {
                  setQuery("");
                  setCateg("bombacha");
                  document.querySelector(".barraReset").value = "";
                  document.querySelector(".litte-bar").style.display = "none";
                }}
                style={
                  categ === "bombacha"
                    ? { color: "#17a2b8", borderColor: "#17a2b8" }
                    : null
                }
              >
                Bombacha
              </button>
              <button
                className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
                data-filter=".men"
                onClick={(e) => {
                  setQuery("");
                  setCateg("corpiño");
                  document.querySelector(".barraReset").value = "";
                  document.querySelector(".litte-bar").style.display = "none";
                }}
                style={
                  categ === "corpiño"
                    ? { color: "#17a2b8", borderColor: "#17a2b8" }
                    : null
                }
              >
                Corpiños
              </button>
              <button
                className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
                data-filter=".bag"
                onClick={(e) => {
                  setQuery("");
                  setCateg("enteriza");
                  document.querySelector(".barraReset").value = "";
                  document.querySelector(".litte-bar").style.display = "none";
                }}
                style={
                  categ === "enteriza"
                    ? { color: "#17a2b8", borderColor: "#17a2b8" }
                    : null
                }
              >
                Enterizas
              </button>
              <button
                className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
                data-filter=".shoes"
                onClick={(e) => {
                  setQuery("");
                  setCateg("tankini");
                  document.querySelector(".barraReset").value = "";
                  document.querySelector(".litte-bar").style.display = "none";
                }}
                style={
                  categ === "tankini"
                    ? { color: "#17a2b8", borderColor: "#17a2b8" }
                    : null
                }
              >
                Tankinis
              </button>
            </div>
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
            {/* Search product */}
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
          </div>
          <div className="row isotope-grid">
            {filteredClothes.map((clothe) => (
              <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
                <ClotheCard key={clothe.slug} clothe={clothe} />
              </div>
            ))}
          </div>
          {/* Load more */}
          {/* <div className="flex-c-m flex-w w-full p-t-45">
            <a
              href="#"
              className="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04"
            >
              Load More
            </a>
          </div> */}
        </div>
      </section>
    </>
  );
};
