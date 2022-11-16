import { Locales } from "../components/stores/Locales";
import { LocalesFilter } from "../components/stores/LocalesFilter";
import { LocalesTittle } from "../components/stores/LocalesTittle";

export default function LocalesPage({ locales }) {
  const names = locales.map((locale) => locale.name);

  return (
    <>
      <LocalesTittle></LocalesTittle>
      <LocalesFilter names={names}></LocalesFilter>
      <Locales locales={locales}></Locales>
    </>
  );
}

// Incremental Static Regeneration (ISR)
export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/franchises");
  const locales = await res.json();
  return {
    props: {
      locales,
    },
    revalidate: 600,
  };
}
