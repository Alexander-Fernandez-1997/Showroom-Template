// import { ClothesGrid } from "../../../components/categories/ClothesGrid";
// import { simpleFetch } from "../../../utils/simpleFetch";

// export default function Showroom({ categJson }) {
//   return (
//     <>
//       <ClothesGrid clothesJson={categJson.clothes}></ClothesGrid>
//     </>
//   );
// }

// export const getStaticPaths = async (ctx) => {
//   const categJson = await simpleFetch("categories");
export default function Showroom() {
  return (
    <>
      <h1>hola</h1>
    </>
  );
}
//   return {
//     fallback: "blocking",
//     paths: categJson.map((clothe) => ({
//       params: { slug: clothe.slug.toString() },
//     })),
//   };
// };

// export async function getStaticProps(context) {
//   const { slug } = context.params;
//   const categJson = await simpleFetch("categories/main/" + slug);

//   return {
//     props: { categJson },
//     revalidate: 120,
//   };
// }
