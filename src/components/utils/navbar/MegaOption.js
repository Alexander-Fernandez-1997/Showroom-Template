import Link from "next/link";
import React from "react";
import { SubCategLink } from "./SubCategLink";

export const MegaOption = ({ categ }) => {
  const { name, slug, subcategories } = categ;

  return (
    <div key={categ.name} className="col-lg-3 col-4">
      <div className="col-megamenu">
        <Link className="title" href={`/categorias/${slug}`}>
          {name}
        </Link>

        <ul className="list-unstyled col-12">
          {subcategories.map((subCateg) => {
            return (
              <SubCategLink
                key={subCateg.id + subCateg.name}
                subCateg={subCateg}
                mainSlug={slug}
              ></SubCategLink>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
