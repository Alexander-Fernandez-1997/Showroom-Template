import React from "react";
import { LocalDiv } from "./LocalDiv";

export const Locales = ({ locales }) => {
  return (
    <div className="localesbody mb-5">
      <div className="options">
        {locales.map((local, index) => (
          <LocalDiv key={local.id} index={index} local={local}></LocalDiv>
        ))}
      </div>
    </div>
  );
};
