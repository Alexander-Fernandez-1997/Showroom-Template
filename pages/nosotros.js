import { AboutContent } from "../components/about/AboutContent";
import { AboutTittle } from "../components/about/AboutTittle";
import { BackToTop } from "../components/utils/BackToTop";
import { Faq } from "../components/about/Faq";
import { Footer } from "../components/utils/Footer";
import { Navbar } from "../components/utils/Navbar";

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
