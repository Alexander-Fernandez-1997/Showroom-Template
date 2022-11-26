import { useRouter } from "next/router";
import React from "react";
import { FiSearch } from "react-icons/fi";

export const SearchBar = () => {
  const router = useRouter();

  const CloseSearch = () => {
    document.querySelector(".bigsearch").classList.remove("show-modal-search");
  };

  const lfclothes = (e) => {
    e.preventDefault();
    let search = document.querySelector(".plh3");
    router.push(`/search/${search.value}`);
    CloseSearch();
  };

  return (
    <div className="modal-search-header flex-c-m trans-04 js-hide-modal-search bigsearch">
      <div className="container-search-header">
        <button
          onClick={CloseSearch}
          className="flex-c-m btn-hide-modal-search trans-04 js-hide-modal-search "
        >
          <img src="images/icons/icon-close2.png" alt="CLOSE" />
        </button>
        <form onSubmit={lfclothes} className="wrap-search-header flex-w p-l-15">
          <button className="flex-c-m trans-04">
            <FiSearch />
          </button>
          <input
            className="plh3"
            type="text"
            name="search"
            placeholder="Buscar..."
            autoComplete="off"
          />
        </form>
      </div>
    </div>
  );
};
