import { BackToTop } from "../components/BackToTop";
import { ContactContent } from "../components/ContactContent";
import { ContactMap } from "../components/ContactMap";
import { ContactTittle } from "../components/ContactTittle";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export default function Contacto() {
  return (
    <>
      <Navbar></Navbar>
      <ContactTittle></ContactTittle>
      <ContactContent></ContactContent>
      <ContactMap></ContactMap>
      <Footer></Footer>
      <BackToTop />
    </>
  );
}
