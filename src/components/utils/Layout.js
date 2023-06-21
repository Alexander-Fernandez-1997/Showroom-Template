import React, { useEffect } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { BackToTop } from "./BackToTop";
import useDetails from "../../store/details";

export const Layout = ({ children, initialData }) => {
  const { setStore, setCategories, setSubCategories } = useDetails();

  useEffect(() => {
    if (initialData) {
      setStore(initialData[0][0]);
      setCategories(initialData[1]);
      setSubCategories(initialData[2]);
    }
  }, []);

  return (
    <>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
      <BackToTop></BackToTop>
    </>
  );
};
