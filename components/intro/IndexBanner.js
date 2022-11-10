import Link from "next/link";
import React from "react";

export const IndexBanner = ({ categorias }) => {
  const activeCategories = categorias.filter((cat) => cat.main_active === true);
  return <>
    <div className="sec-banner bg0 p-t-80 p-b-50">
      <div className="container">
        <div className="row">
          {/* start banner */}
          {activeCategories.map((categoria) => (
            <div
              key={`${categoria.id}${categoria.created_at}`}
              className="col-md-6 col-xl-4 p-b-30 m-lr-auto"
            >
              {/* Block1 */}
              <div className="block1 wrap-pic-w">
                <img src={categoria.banner_image} alt={categoria.name} />
                <Link
                  href="/showroom"
                  className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">

                  <div className="block1-txt-child1 flex-col-l">
                    <span className="block1-name ltext-102 trans-04 p-b-8">
                      {categoria.name}
                    </span>
                    <span className="block1-info stext-102 trans-04">
                      {categoria.description}
                    </span>
                  </div>
                  <div className="block1-txt-child2 p-b-4 trans-05">
                    <div className="block1-link stext-101 cl0 trans-09">
                      Ver Ahora
                    </div>
                  </div>

                </Link>
              </div>
            </div>
          ))}
          {/* end banner */}
        </div>
      </div>
    </div>
  </>;
};
