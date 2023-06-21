import React from "react";

export const LocalSingleFilter = ({ name, index }) => {
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
    <button
      className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 "
      data-filter="*"
      onClick={() => activarCarta(index)}
    >
      {name}
    </button>
  );
};
