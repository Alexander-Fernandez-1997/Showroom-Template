import React from "react";

export const ShowProviders = () => {
  const showShippingOptions = () => {
    const cp = document.querySelector(".cp-provider");
    console.log(cp.value);
    const shippingList = document.querySelector(".shippingList");
    shippingList.classList.remove("d-none");
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
