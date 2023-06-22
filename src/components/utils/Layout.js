"use client";
import React, { useEffect } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { BackToTop } from "./BackToTop";
import useDetails from "../../store/details";
import { simpleFetch } from "utils/simpleFetch";

export const Layout = ({ children }) => {
  // const { setStore, setCategories, setSubCategories } = useDetails();

  // useEffect(() => {
  // const initialData = simpleFetch("details", "ssr");
  // const initialData = [];
  // if (initialData) {
  // console.log("this is the initialData", initialData);
  // setStore(initialData.stores);
  // setCategories(initialData.categories);
  // setSubCategories(initialData.subcategories);
  // setStore([]);
  // setCategories([]);
  // setSubCategories([]);
  // }
  // }, []);

  return (
    <>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
      <BackToTop></BackToTop>
    </>
  );
};
