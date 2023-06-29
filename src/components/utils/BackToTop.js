"use client";

export const BackToTop = () => {
  const toTheMoon = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div onClick={toTheMoon} className="btn-back-to-top" id="myBtn">
        <span className="symbol-btn-back-to-top font-weight-bold">
          {/* <i className="zmdi zmdi-chevron-up" /> */}↑
        </span>
      </div>
    </>
  );
};
