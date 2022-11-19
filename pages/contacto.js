import { ContactContent } from "../components/contact/ContactContent";
import { ContactMap } from "../components/contact/ContactMap";
import { Banner } from "../components/utils/Banner";

export default function Contacto({ store, configuration }) {
  const { contact_banner, contact_slogan } = configuration;
  return (
    <>
      <Banner banner_url={contact_banner} text={contact_slogan}></Banner>
      <ContactContent store={store}></ContactContent>
      <ContactMap address={store}></ContactMap>
    </>
  );
}

// Incremental Static Regeneration (ISR)
export async function getStaticProps() {
  const storeFetch = await fetch("http://localhost:3000/api/store");
  const store = await storeFetch.json();

  const configurationFetch = await fetch(
    "http://localhost:3000/api/configuration"
  );
  const configuration = await configurationFetch.json();

  return {
    props: {
      store,
      configuration,
    },
    revalidate: 600,
  };
}
