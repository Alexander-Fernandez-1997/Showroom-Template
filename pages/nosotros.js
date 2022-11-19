import { AboutContent } from "../components/about/AboutContent";
import { AboutTittle } from "../components/about/AboutTittle";
import { Faq } from "../components/about/Faq";

export default function Nosotros({ notes }) {
  return (
    <>
      <AboutTittle></AboutTittle>
      <AboutContent></AboutContent>
      <Faq notes={notes}></Faq>
    </>
  );
}

// Incremental Static Regeneration (ISR)
export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/notes");
  const notes = await res.json();
  return {
    props: {
      notes,
    },
    revalidate: 600,
  };
}
