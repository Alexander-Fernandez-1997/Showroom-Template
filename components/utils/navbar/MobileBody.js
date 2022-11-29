import React from "react";
import { CategLink } from "./CategLink";
import { MobileLink } from "./MobileLink";

export const MobileBody = ({ directions }) => {
  return (
    <div className="menu-mobile mobile-transform ">
      <ul className="main-menu-m">
        <CategLink></CategLink>
        {directions.map((direction) => (
          <MobileLink key={direction} direction={direction} />
        ))}
      </ul>
    </div>
  );
};
