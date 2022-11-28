import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { AdminNav } from "../admin/AdminNav";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { BackToTop } from "./BackToTop";
import useDetails from "../../store/details";

export const Layout = ({ children, initialData }) => {
  const { asPath } = useRouter();
  const { setStore, setCategories, setSubCategories } = useDetails();

  useEffect(() => {
    if (initialData) {
      setStore(initialData[0][0]);
      setCategories(initialData[1]);
      setSubCategories(initialData[2]);
    }
  }, []);

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
