import React, { useEffect, useState } from "react";
import useDetails from "../../../store/details";
import { MegaOption } from "./MegaOption";

export const MegaMenu = (activeLink) => {
  const { categories, subcategories } = useDetails();
  const [nestedCateg, setNestedCateg] = useState([]);

  const getNestedCateg = (categ, subCateg) => {
    const nestedCategories = categ.map((categ) => {
      const subCategs = subCateg.filter((subCateg) => {
        return subCateg.category_id === categ.id;
      });
      return { ...categ, subCategs };
    });
    setNestedCateg(nestedCategories);
  };

  // useEffect(() => {
  // getNestedCateg(categories, subcategories);
  // }, [categories]);

  return (
    <li className={`nav-item dropdown has-megamenu ${activeLink.activeLink()}`}>
      <a
        className="nav-link dropdown-toggle"
        href="#"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Categorias
      </a>
      <div className="dropdown-menu megamenu" role="menu">
        <div className="row g-3">
          {nestedCateg !== [] &&
            nestedCateg.map((categ) => {
              return (
                <MegaOption
                  key={categ.id + categ.name}
                  categ={categ}
                ></MegaOption>
              );
            })}
        </div>
      </div>
    </li>
  );
};
