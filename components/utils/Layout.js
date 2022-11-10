import React from "react";
import { useRouter } from "next/router";
import { AdminNav } from "../admin/AdminNav";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { BackToTop } from "./BackToTop";

export const Layout = ({ children }) => {
  const { asPath } = useRouter();

  if (asPath.includes("/admin")) {
    return (
      <>
        <AdminNav></AdminNav>
        {children}
      </>
    );
  } else {
    return (
      <>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
        <BackToTop></BackToTop>
      </>
    );
  }
};
