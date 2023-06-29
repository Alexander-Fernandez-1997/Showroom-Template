import React from "react";

export const ShowProviders = () => {
  const showShippingOptions = () => {
    const cp = document.querySelector(".cp-provider");
    console.log(cp.value);
    document.querySelector(".shippingList")?.classList.remove("d-none");
    document.querySelector(".shippingTittle")?.scrollIntoView({
      block: "center",
      behavior: "smooth",
      inline: "center",
    });
  };
  return (
    <button
      onClick={() => showShippingOptions()}
      className="flex-c-m stext-101 cl0 size-101 bg3 hov-btn3 p-lr-15 trans-04 mt-5"
    >
      Continuar a metodo de envio
    </button>
  );
};
