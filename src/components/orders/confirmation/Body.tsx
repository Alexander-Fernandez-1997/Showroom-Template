import React from "react";
import { BodyAddress } from "./BodyAddress";
import { BodyTotal } from "./BodyTotal";

export const Body = () => {
  return (
    <div className="container row mb-3 mt-3">
      <BodyAddress></BodyAddress>
      <BodyTotal></BodyTotal>
      <hr className="mt-4" />
    </div>
  );
};
