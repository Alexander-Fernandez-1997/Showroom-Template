"use client";
import React, { useEffect, useState } from "react";
import useDetails from "../../../store/details";

export const FooterContact = () => {
  const { store } = useDetails();
  const [storeDetails, setStoreDetails] = useState({});
  useEffect(() => {
    setStoreDetails(store);
  }, [store]);

  return (
    <div className="col-sm-6 col-lg-3 p-b-50">
      <h4 className="stext-301 cl0 p-b-30">Contactenos</h4>
      <p className="stext-107 cl7 size-201">
        Tiene alguna consulta? <br></br> Visitenos en alguno de nuestros locales
        o comuniquese atraves de: <br></br>
        <a
          className="cl7 hov-cl1 trans-04 m-r-16"
          target="_blank"
          rel="noreferrer"
          href={`https://api.whatsapp.com/send?phone=${
            storeDetails.wp_number || ""
          }&text=Me%20interesa%20saber%20mas%20sobre%20los%20productos`}
        >
          Whatsapp: {storeDetails.wp_number || ""}
        </a>{" "}
        <br />
        <a
          className="cl7 hov-cl1 trans-04 m-r-16"
          href={`https://www.instagram.com/${storeDetails.instagram || ""}/`}
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa fa-instagram" />
          Insta: {storeDetails.instagram || ""}
        </a>
      </p>
    </div>
  );
};
