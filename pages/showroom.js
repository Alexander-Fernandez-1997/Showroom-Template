// import { ClothesGrid } from "../components/categories/ClothesGrid";
// import { simpleFetch } from "../utils/simpleFetch";

// export default function Showroom({ clothesJson }) {
//   console.log(clothesJson);
//   return (
//     <>
//       <ClothesGrid clothesJson={clothesJson}></ClothesGrid>
//     </>
//   );
// }

// export async function getStaticProps(context) {
//   const clothesJson = await simpleFetch("clothes");
export default function Showroom() {
  return (
    <>
      <h1>hola</h1>
    </>
  );
}
//   return {
//     props: { clothesJson },
//     revalidate: 120,
//   };
// }
