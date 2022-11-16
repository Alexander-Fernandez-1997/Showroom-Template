import React from "react";
import { LocalDiv } from "./LocalDiv";

export const Locales = ({ locales }) => {
  return (
    <div className="localesbody mb-5">
      <div className="options">
        {locales.map((local) => (
          <LocalDiv key={local.id} local={local}></LocalDiv>
        ))}
      </div>
    </div>
  );
};
