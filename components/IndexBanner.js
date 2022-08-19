import Link from "next/link";
import React from "react";

export const IndexBanner = () => {
  return (
    <>
      <div className="sec-banner bg0 p-t-80 p-b-50">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-xl-4 p-b-30 m-lr-auto">
              {/* Block1 */}
              <div className="block1 wrap-pic-w">
                <img src="images/bahia/bikini.jpg" alt="IMG-BANNER" />
                <Link href="/showroom">
                  <a className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
                    <div className="block1-txt-child1 flex-col-l">
                      <span className="block1-name ltext-102 trans-04 p-b-8">
                        Corpiños
                      </span>
                      <span className="block1-info stext-102 trans-04">
                        Tendencias
                      </span>
                    </div>
                    <div className="block1-txt-child2 p-b-4 trans-05">
                      <div className="block1-link stext-101 cl0 trans-09">
                        Ver Ahora
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-xl-4 p-b-30 m-lr-auto">
              {/* Block1 */}
              <div className="block1 wrap-pic-w">
                <img src="images/bahia/colales.jpg" alt="IMG-BANNER" />
                <Link href="/showroom">
                  <a className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
                    <div className="block1-txt-child1 flex-col-l">
                      <span className="block1-name ltext-102 trans-04 p-b-8">
                        Bombachas
                      </span>
                      <span className="block1-info stext-102 trans-04">
                        Tendencias
                      </span>
                    </div>
                    <div className="block1-txt-child2 p-b-4 trans-05">
                      <div className="block1-link stext-101 cl0 trans-09">
                        Ver Ahora
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-xl-4 p-b-30 m-lr-auto">
              {/* Block1 */}
              <div className="block1 wrap-pic-w">
                <img src="images/bahia/enterizas.jpg" alt="IMG-BANNER" />
                <Link href="/showroom">
                  <a className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
                    <div className="block1-txt-child1 flex-col-l">
                      <span className="block1-name ltext-102 trans-04 p-b-8">
                        Enterizas
                      </span>
                      <span className="block1-info stext-102 trans-04">
                        Tendencias
                      </span>
                    </div>
                    <div className="block1-txt-child2 p-b-4 trans-05">
                      <div className="block1-link stext-101 cl0 trans-09">
                        Ver Ahora
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
