import React from "react";

export const Description = ({ description }) => {
  return (
    <>
      <div className="description2" id="description2">
        {description}
      </div>
      <div className="options"></div>
      <div className="divider"></div>
    </>
  );
};
