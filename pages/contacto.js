import { ContactContent } from "../components/contact/ContactContent";
import { ContactMap } from "../components/contact/ContactMap";
import { ContactTittle } from "../components/contact/ContactTittle";

export default function Contacto({ store }) {
  return (
    <>
      <ContactTittle></ContactTittle>
      <ContactContent store={store[0]}></ContactContent>
      <ContactMap address={store[0]}></ContactMap>
    </>
  );
}

// Incremental Static Regeneration (ISR)
export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/store");
  const store = await res.json();
  return {
    props: {
      store,
    },
    revalidate: 600,
  };
}
