import React from "react";

export const PaymentOption = ({ provider }) => {
  const { name, img, fn } = provider;
  return (
    <div className="container p-3 mt-4">
      <div className="card" onClick={fn}>
        <div className="card-body">
          <img
            src={img}
            alt={name}
            style={{
              maxHeight: "70px",
              display: "block",
              margin: "auto",
            }}
          />
        </div>
      </div>
    </div>
  );
};
