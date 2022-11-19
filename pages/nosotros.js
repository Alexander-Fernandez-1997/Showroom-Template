import { AboutContent } from "../components/about/AboutContent";
import { Banner } from "../components/utils/Banner";
import { Faq } from "../components/about/Faq";

export default function Nosotros({ notes, configuration }) {
  const { about_banner, about_slogan, about_html } = configuration;
  return (
    <>
      <Banner banner_url={about_banner} text={about_slogan}></Banner>
      <AboutContent content={about_html}></AboutContent>
      <Faq notes={notes}></Faq>
    </>
  );
}

// Incremental Static Regeneration (ISR)
export async function getStaticProps() {
  const notesFetch = await fetch("http://localhost:3000/api/notes");
  const notes = await notesFetch.json();

  const configurationFetch = await fetch(
    "http://localhost:3000/api/configuration"
  );
  const configuration = await configurationFetch.json();

  return {
    props: {
      notes,
      configuration,
    },
    revalidate: 600,
  };
}
