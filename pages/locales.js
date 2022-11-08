import { BackToTop } from "../components/utils/BackToTop";
import { Footer } from "../components/utils/Footer";
import { Locales } from "../components/stores/Locales";
import { LocalesFilter } from "../components/stores/LocalesFilter";
import { LocalesTittle } from "../components/stores/LocalesTittle";
import { Navbar } from "../components/utils/Navbar";

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
