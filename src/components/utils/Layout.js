import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { BackToTop } from "./BackToTop";
import { StickyWp } from "./StickyWp";

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
      <StickyWp></StickyWp>
      <BackToTop></BackToTop>
    </>
  );
};
