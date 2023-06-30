import React from "react";

interface PaymentOptionProps {
  provider: {
    name: string;
    img: string;
    fn: () => void;
  };
}

export const PaymentOption: React.FC<PaymentOptionProps> = ({ provider }) => {
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
