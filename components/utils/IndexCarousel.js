import React, { useState } from "react";
import Link from "next/link";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";

export const IndexCarousel = ({ clothes }) => {
  return (
    <>
      {clothes !== undefined ? (
        <section className="sec-product bg0 pt-2 p-b-50">
          <div className="container">
            <div>
              <h3 className="ltext-105 cl5 txt-center respon1">
                Nuevos ingresos
              </h3>
            </div>
            <div className="tab01">
              <div className="tab-content p-t-50">
                <div
                  className="tab-pane fade show active"
                  id="best-seller"
                  role="tabpanel"
                >
                  <Flicking circular={true}>
                    {clothes.map(({ id, name, price, image_main }) => (
                      <div key={id} style={{ width: "300px", padding: "1rem" }}>
                        <div className="wrap-slick2">
                          <div className="slick2">
                            <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
                              <div className="block2">
                                <div className="block2-pic hov-img0">
                                  <img src={image_main} alt={name} />
                                  <Link href={`/${id}`}>
                                    <a className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                                      Detalles
                                    </a>
                                  </Link>
                                </div>
                                <div className="block2-txt flex-w flex-t p-t-14">
                                  <div className="block2-txt-child1 flex-col-l ">
                                    <a
                                      href="product-detail.html"
                                      className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                                    >
                                      {name}
                                    </a>
                                    <span className="stext-105 cl3">
                                      ${price}
                                    </span>
                                  </div>
                                  <div className="block2-txt-child2 flex-r p-t-3">
                                    <Link href="/contacto">
                                      <button className="btn text-light bg3 c10 hov-btn3 bor1">
                                        Contactanos
                                      </button>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Flicking>

                  {/* Load more */}
                  <div className="flex-c-m flex-w w-full p-t-45">
                    <Link href="/showroom">
                      <a className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04">
                        Ver mas
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};
