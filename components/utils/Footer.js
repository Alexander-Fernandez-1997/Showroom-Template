import Link from "next/link";
import React from "react";
import { FooterCateg } from "./footer/FooterCateg";
import { FooterCompras } from "./footer/FooterCompras";
import { FooterContact } from "./footer/FooterContact";
import { FooterInfo } from "./footer/FooterInfo";

export const Footer = () => {
  return (
    <>
      <footer className="bg3 p-t-75 p-b-32">
        <div className="container">
          <div className="row">
            <FooterCateg></FooterCateg>
            <FooterInfo></FooterInfo>
            <FooterContact></FooterContact>
            <FooterCompras></FooterCompras>
          </div>
        </div>
      </footer>
    </>
  );
};
