import React from "react";

export const Banner = ({ banner_url, text = "", position = "center" }) => {
  return (
    <>
      <section
        className="bg-img1 txt-center p-lr-15 p-tb-92 mid-banner"
        style={{
          backgroundImage: `url(${banner_url})`,
        }}
      >
        <h2
          className={
            position === "center" ? "ltext-105 cl0 txt-center" : "ltext-105 cl0"
          }
        >
          {text}
        </h2>
      </section>
    </>
  );
};
