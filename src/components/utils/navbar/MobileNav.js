import React from "react";
import { MobileBody } from "./MobileBody";
import { MobileHeader } from "./MobileHeader";

export const MobileNav = ({ directions }) => {
  return (
    <>
      <MobileHeader></MobileHeader>
      <MobileBody directions={directions}></MobileBody>
    </>
  );
};
