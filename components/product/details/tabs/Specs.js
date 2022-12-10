import React from "react";

export const Specs = () => {
  const specsData = [
    {
      name: "Material",
      value: "-",
    },
    {
      name: "Weight",
      value: "0.2 kg",
    },
    {
      name: "Dimensions",
      value: "10 × 10 × 10 cm",
    },
    {
      name: "Pais de origen",
      value: "Argentina",
    },
  ];

  return (
    <div className="row">
      {specsData.map((spec) => (
        <div className="col-6  gap-4 mb-3">
          <p className="mb-0 text-caracteristic">{spec.name}</p>

          <p className="mb-0 tab-description">{spec.value}</p>
        </div>
      ))}
    </div>
  );
};
