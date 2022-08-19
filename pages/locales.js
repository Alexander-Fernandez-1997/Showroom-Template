import { BackToTop } from "../components/BackToTop";
import { Footer } from "../components/Footer";
import { Locales } from "../components/Locales";
import { LocalesFilter } from "../components/LocalesFilter";
import { LocalesTittle } from "../components/LocalesTittle";
import { Navbar } from "../components/Navbar";

export default function LocalesPage() {
  return (
    <>
      <Navbar></Navbar>
      <LocalesTittle></LocalesTittle>
      <LocalesFilter></LocalesFilter>
      <Locales></Locales>
      <Footer></Footer>
      <BackToTop />
    </>
  );
}
