// import { AboutContent } from "../components/about/AboutContent";
// import { Banner } from "../components/utils/Banner";
// import { Faq } from "../components/about/Faq";
// import { simpleFetch } from "../utils/simpleFetch";

// export default function Nosotros({ notes, configuration }) {
//   const { about_banner, about_slogan, about_html } = configuration;
//   return (
//     <>
//       <Banner banner_url={about_banner} text={about_slogan}></Banner>
//       <AboutContent content={about_html}></AboutContent>
//       <Faq notes={notes}></Faq>
//     </>
//   );
// }

// // Incremental Static Regeneration (ISR)
// export async function getStaticProps() {
//   const notes = await simpleFetch("notes");
//   const configuration = await simpleFetch("configuration");

//   return {
//     props: {
//       notes,
//       configuration,
//     },
//     revalidate: 600,
//   };
// }
