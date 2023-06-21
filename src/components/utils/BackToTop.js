import React, { useEffect, useState } from "react";
import useDetails from "../../store/details";

export const BackToTop = () => {
  const { store } = useDetails();
  const [storeDetails, setStoreDetails] = useState({});
  useEffect(() => {
    setStoreDetails(store);
  }, [store]);
  const toTheMoon = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <a
        target="_blank"
        rel="noreferrer"
        href={`https://api.whatsapp.com/send?phone=${
          storeDetails.wp_number || ""
        }&text=Me%20interesa%20saber%20mas%20sobre%20los%20productos`}
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
