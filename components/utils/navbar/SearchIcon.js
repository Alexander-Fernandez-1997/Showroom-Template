import React from "react";
import { FiSearch } from "react-icons/fi";

export const SearchIcon = () => {
  const showSearch = () => {
    document.querySelector(".bigsearch").classList.add("show-modal-search");
  };

  return <FiSearch size={"1.2rem"} onClick={showSearch} />;
};
