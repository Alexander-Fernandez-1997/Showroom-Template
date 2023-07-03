import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { BackToTop } from "./BackToTop";
import { StickyWp } from "./StickyWp";
import { AuthProvider } from "../auth/AuthProvider";

export const Layout = ({ children }) => {
  return (
    <>
      <AuthProvider>
        <Navbar></Navbar>
        {children}
      </AuthProvider>
      <Footer></Footer>
      <StickyWp></StickyWp>
      <BackToTop></BackToTop>
    </>
  );
};
