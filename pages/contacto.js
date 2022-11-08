import { BackToTop } from "../components/utils/BackToTop";
import { ContactContent } from "../components/contact/ContactContent";
import { ContactMap } from "../components/contact/ContactMap";
import { ContactTittle } from "../components/contact/ContactTittle";
import { Footer } from "../components/utils/Footer";
import { Navbar } from "../components/utils/Navbar";

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
