import React from "react";

export const BackToTop = () => {
  const toTheMoon = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://api.whatsapp.com/send?phone=5491157510886&text=Me%20interesa%20saber%20mas%20sobre%20los%20productos%20de%20Bahia%20del%20Sol"
      >
        <div
          className="wp"
          style={{
            backgroundImage: "url(images/icons/wp.png)",
          }}
        ></div>
      </a>
      <div onClick={toTheMoon} className="btn-back-to-top" id="myBtn">
        <span className="symbol-btn-back-to-top font-weight-bold">
          {/* <i className="zmdi zmdi-chevron-up" /> */}↑
        </span>
      </div>
    </>
  );
};
