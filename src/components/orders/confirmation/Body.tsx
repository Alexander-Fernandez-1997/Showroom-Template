import React from "react";
import { BodyAddress } from "./BodyAddress";
import { BodyTotal } from "./BodyTotal";

export const Body = ({ order }) => {
  return (
    <div className="container row mb-3 mt-3">
      <BodyAddress order={order}></BodyAddress>
      <BodyTotal order={order}></BodyTotal>
      <hr className="mt-4" />
    </div>
  );
};
