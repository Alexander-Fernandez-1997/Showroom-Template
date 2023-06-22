"use client";
import React from "react";
import Link from "next/link";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import { ClotheCard } from "../categories/ClotheCard";

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
                    {clothes.map((clothe) => (
                      <div
                        key={clothe.id}
                        style={{ width: "300px", padding: "1rem" }}
                      >
                        <div className="wrap-slick2">
                          <div className="slick2">
                            <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
                              <ClotheCard
                                variant={clothe.variants}
                                path={clothe.id}
                                name={clothe.name}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Flicking>

                  {/* Load more */}
                  <div className="flex-c-m flex-w w-full p-t-45">
                    <Link
                      href="/showroom"
                      className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04"
                    >
                      Ver mas
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
