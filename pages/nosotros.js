import { AboutContent } from "../components/AboutContent";
import { AboutTittle } from "../components/AboutTittle";
import { BackToTop } from "../components/BackToTop";
import { Faq } from "../components/Faq";
import { Footer } from "../components/Footer";

import { Navbar } from "../components/Navbar";

export default function Nosotros() {
  return (
    <>
      <Navbar></Navbar>
      <AboutTittle></AboutTittle>
      <AboutContent></AboutContent>
      <Faq></Faq>
      <Footer></Footer>
      <BackToTop />
    </>
  );
}
