import React, { useState } from "react";
import { useEffect } from "react";
import useDetails from "../../../store/details";
import { FooterLink } from "./FooterLink";

export const FooterCateg = () => {
  const { categories } = useDetails();
  const [categ, setCateg] = useState([]);
  useEffect(() => {
    setCateg(categories);
  }, [categories]);

  return (
    <div className="col-sm-6 col-lg-3 p-b-50">
      <h4 className="stext-301 cl0 p-b-30">Categorias</h4>
      <ul>
        {categ.map((categLink, index) => {
          if (index < 4) {
            return (
              <FooterLink
                key={index + categLink.slug}
                slug={categLink.slug}
                name={categLink.name}
              ></FooterLink>
            );
          }
        })}
      </ul>
    </div>
  );
};
