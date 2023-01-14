import React from "react";
import { MegaMenu } from "./MegaMenu";
import { MobileLink } from "./MobileLink";

export const MobileBody = ({ directions }) => {
  return (
    <div className="menu-mobile mobile-transform ">
      <ul className="main-menu-m">
        <MegaMenu></MegaMenu>
        {directions.map((direction) => (
          <MobileLink key={direction} direction={direction} />
        ))}
      </ul>
    </div>
  );
};
