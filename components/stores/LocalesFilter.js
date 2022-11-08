import React from "react";

export const LocalesFilter = () => {
  const activarCarta = (n) => {
    const options = document.querySelectorAll(".option");
    options.forEach((option) => {
      option.classList.remove("active");
    });
    options[n].classList.add("active");
    options[n].scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  };

  return (
    <div className="container">
      <div className="flex-w flex-c-m ">
        <div className="flex-w flex-c-m filter-tope-group m-tb-10">
          <button
            className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 "
            data-filter="*"
            onClick={() => activarCarta(0)}
          >
            Central
          </button>
          <button
            className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
            data-filter=".women"
            onClick={() => activarCarta(1)}
          >
            Caba
          </button>
          <button
            className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
            data-filter=".men"
            onClick={() => activarCarta(2)}
          >
            San Isidro
          </button>
          <button
            className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
            data-filter=".bag"
            onClick={() => activarCarta(3)}
          >
            Bahia Blanca
          </button>
          <button
            className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
            data-filter=".shoes"
            onClick={() => activarCarta(4)}
          >
            Colón
          </button>
          <button
            className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
            data-filter=".shoes"
            onClick={() => activarCarta(5)}
          >
            Gualeguaychú
          </button>
          <button
            className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
            data-filter=".shoes"
            onClick={() => activarCarta(6)}
          >
            Valentin Alsina
          </button>
        </div>
      </div>
    </div>
  );
};
