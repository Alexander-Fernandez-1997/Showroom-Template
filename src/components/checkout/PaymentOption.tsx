import React from "react";

interface PaymentOptionProps {
  provider: {
    name: string;
    img: string;
    btn: React.ReactNode;
  };
}

export const PaymentOption: React.FC<PaymentOptionProps> = ({ provider }) => {
  const { name, img, btn } = provider;

  return (
    <div className="container p-3 mt-4">
      <div className="card">
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
          <hr></hr>
          {btn}
        </div>
      </div>
    </div>
  );
};
