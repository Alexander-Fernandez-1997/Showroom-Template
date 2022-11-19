import { Locales } from "../components/stores/Locales";
import { LocalesFilter } from "../components/stores/LocalesFilter";
import { Banner } from "../components/utils/Banner";

export default function LocalesPage({ locales, configuration }) {
  const names = locales.map((locale) => locale.name);
  const { store_banner, store_slogan } = configuration;

  return (
    <>
      <Banner banner_url={store_banner} text={store_slogan}></Banner>
      <LocalesFilter names={names}></LocalesFilter>
      <Locales locales={locales}></Locales>
    </>
  );
}

// Incremental Static Regeneration (ISR)
export async function getStaticProps() {
  const localesFetch = await fetch("http://localhost:3000/api/franchises");
  const locales = await localesFetch.json();

  const configurationFetch = await fetch(
    "http://localhost:3000/api/configuration"
  );
  const configuration = await configurationFetch.json();

  return {
    props: {
      locales,
      configuration,
    },
    revalidate: 600,
  };
}
