import Link from "next/link";
import React from "react";
import { SubCategLink } from "./SubCategLink";

export const NestedLink = ({ categ }) => {
  const { name, slug, subCategs } = categ;

  if (subCategs.length === 0) {
    return (
      <li>
        <Link
          className="dropdown
        -item"
          href={`/categorias/${slug}`}
        >
          {name}
        </Link>
      </li>
    );
  } else {
    return (
      <li>
        <div className="btn-group dropend">
          <a
            type="button"
            className="dropdown-item dropdown-toggle p-0"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {name}
          </a>
          <ul className="dropdown-menu">
            {subCategs.map((subCateg) => {
              return (
                <SubCategLink
                  key={subCateg.id + subCateg.name}
                  subCateg={subCateg}
                ></SubCategLink>
              );
            })}
          </ul>
        </div>
      </li>
    );
  }
};
