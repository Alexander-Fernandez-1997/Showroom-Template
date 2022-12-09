// import { Banner } from "../components/utils/Banner";
// import { ContactContent } from "../components/contact/ContactContent";
// import { ContactMap } from "../components/contact/ContactMap";
// import { simpleFetch } from "../utils/simpleFetch";

// export default function Contacto({ store, configuration }) {
//   const { contact_banner, contact_slogan } = configuration;
//   return (
//     <>
//       <Banner banner_url={contact_banner} text={contact_slogan}></Banner>
//       <ContactContent store={store}></ContactContent>
//       <ContactMap address={store}></ContactMap>
//     </>
//   );
// }

// // Incremental Static Regeneration (ISR)
// export async function getStaticProps() {
//   const store = await simpleFetch("store");
//   const configuration = await simpleFetch("configuration");
export default function Showroom() {
  return (
    <>
      <h1>hola</h1>
    </>
  );
}
//   return {
//     props: {
//       store,
//       configuration,
//     },
//     revalidate: 600,
//   };
// }
