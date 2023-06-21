import React from "react";
import { LocalSingleFilter } from "./LocalSingleFilter";

export const LocalesFilter = ({ names }) => {
  return (
    <div className="container">
      <div className="flex-w flex-c-m ">
        <div className="flex-w flex-c-m filter-tope-group m-tb-10">
          {names.map((name, index) => (
            <LocalSingleFilter key={index} name={name} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
