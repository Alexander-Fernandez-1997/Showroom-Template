import React, { useEffect, useState } from "react";
import useDetails from "../../../store/details";
import { NestedLink } from "./NestedLink";

export const CategLink = () => {
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

  useEffect(() => {
    getNestedCateg(categories, subcategories);
  }, [categories]);

  return (
    <li className="dropdown">
      <a
        className=" dropdown-toggle"
        type="button"
        id="MyAccountDDM"
        data-bs-toggle="dropdown"
        data-bs-auto-close="outside"
        aria-expanded="false"
      >
        Categorias
      </a>

      <ul
        className="dropdown-menu"
        aria-labelledby="MyAccountDDM"
        id="AppDropDownId"
      >
        {nestedCateg.map((categ) => {
          return (
            <NestedLink key={categ.id + categ.name} categ={categ}></NestedLink>
          );
        })}
      </ul>
    </li>
  );
};
