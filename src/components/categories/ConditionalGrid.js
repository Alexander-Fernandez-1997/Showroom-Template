import React from "react";
import { ClotheCard } from "./ClotheCard";

export const ConditionalGrid = ({ sortedClothes }) => {
  return (
    <div className="row isotope-grid">
      {sortedClothes === undefined || sortedClothes.length === 0 ? (
        <h1>No disponemos productos con ese nombre</h1>
      ) : (
        <>
          {sortedClothes.map((variant) => (
            <div
              key={variant.sku}
              className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women"
            >
              <ClotheCard
                variant={variant}
                path={variant.clothesId}
                name={variant.clotheName}
              />
            </div>
          ))}
        </>
      )}
    </div>
  );
};
