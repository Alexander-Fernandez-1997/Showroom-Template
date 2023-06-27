import { useEffect, useState } from "react";
import { MegaOption } from "./MegaOption";
import { simpleFetch } from "utils/simpleFetch";

export const MegaMenu = (activeLink) => {
  const [nestedCateg, setNestedCateg] = useState([]);

  useEffect(() => {
    const fetchNestedCateg = async () => {
      const categories = await simpleFetch("categories/full", "ssr");
      setNestedCateg(categories);
    };
    fetchNestedCateg();
  }, []);

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
