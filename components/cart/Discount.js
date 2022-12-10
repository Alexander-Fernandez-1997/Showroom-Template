import React from "react";

export const Discount = () => {
  return (
    <div className="bg-white p-4 ">
      <div className="mb-3">
        <h5 className="text-dark">Descuento</h5>
      </div>

      <form className="d-flex justify-content-between mb-2 text-caracteristic gap-2">
        <input
          name="discount_code"
          placeholder="Cupon"
          className="form-control border-secondary border"
        />

        <button className="flex-c-m stext-101 cl0 size-80 bg3 hov-btn3 p-lr-15 trans-04">
          Aplicar
        </button>
      </form>
    </div>
  );
};
