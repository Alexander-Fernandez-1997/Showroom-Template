import { Locales } from "../components/stores/Locales";
import { LocalesFilter } from "../components/stores/LocalesFilter";
import { LocalesTittle } from "../components/stores/LocalesTittle";

export default function LocalesPage() {
  return (
    <>
      <LocalesTittle></LocalesTittle>
      <LocalesFilter></LocalesFilter>
      <Locales></Locales>
    </>
  );
}
