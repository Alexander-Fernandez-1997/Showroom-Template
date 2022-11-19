import Link from "next/link";
import React from "react";

export const SectionSlide = ({ store }) => {
  console.log(store);
  const { name, slogan, main_banner } = store;
  return (
    <>
      <section className="section-slide">
        <div className="wrap-slick1">
          <div className="slick1">
            <div
              className="item-slick1"
              style={{
                backgroundImage: `url(${main_banner})`,
              }}
            >
              <div className="container h-full">
                <div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
                  <div
                    className="layer-slick1 animated "
                    data-appear="fadeInDown"
                    data-delay={0}
                  >
                    <span className="ltext-101 cl0 respon2">{name}</span>
                  </div>
                  <div
                    className="layer-slick1 animated "
                    data-appear="fadeInUp"
                    data-delay={800}
                  >
                    <h2 className="ltext-201 cl0 p-t-19 p-b-43 respon1">
                      {slogan}
                    </h2>
                  </div>
                  <div
                    className="layer-slick1 animated "
                    data-appear="zoomIn"
                    data-delay={1600}
                  >
                    <Link
                      href="/showroom"
                      className="flex-c-m stext-101 cl0 size-101 bg3 bor1  hov-btn3 p-lr-15 trans-04"
                    >
                      Showroom
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
